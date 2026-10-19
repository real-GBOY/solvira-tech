/**
 * POST /api/interest  { email, company }
 *
 * Emails each "Register interest" submission to the Solvira inbox through Resend. Configure in Vercel:
 *   RESEND_API_KEY        required. Without it the endpoint answers 503 and the form shows its fallback message.
 *   INTEREST_TO_EMAIL     inbox that receives submissions (default hello@solvirapharma.com)
 *   INTEREST_FROM_EMAIL   verified Resend sender (default "Solvira <noreply@solvirapharma.com>")
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export async function POST(request: Request): Promise<Response> {
  // Same-origin only: the form is the one legitimate caller.
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== request.headers.get("host")) return json({ error: "forbidden" }, 403);

  const raw = await request.text();
  if (raw.length > 2048) return json({ error: "too_large" }, 413);

  let data: { email?: unknown; company?: unknown };
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  // Honeypot: bots fill the hidden field. Pretend success so they learn nothing.
  if (typeof data.company === "string" && data.company !== "") return json({ ok: true }, 200);

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) return json({ error: "invalid_email" }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return json({ error: "not_configured" }, 503);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.INTEREST_FROM_EMAIL ?? "Solvira <noreply@solvirapharma.com>",
      to: [process.env.INTEREST_TO_EMAIL ?? "hello@solvirapharma.com"],
      reply_to: email,
      subject: "New Solvira interest registration",
      text: `${email} registered interest in Solvira Care updates on solvirapharma.com.`,
    }),
  });

  if (!res.ok) return json({ error: "delivery_failed" }, 502);
  return json({ ok: true }, 200);
}
