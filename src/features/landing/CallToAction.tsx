import { Arrow } from "@/components/Arrow";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { CARE, CONTACT } from "@/config/pages";
import { SITE } from "@/config/site";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function InterestForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [sending, setSending] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value) || value.length > 254) {
      setError("Please enter a valid email address.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // `company` is a honeypot: real visitors never see or fill it.
        body: JSON.stringify({ email: value, company: new FormData(e.currentTarget).get("company") ?? "" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(`We couldn't register that just now. Please try again, or email ${SITE.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="flex min-w-0 basis-[340px] flex-1 flex-col gap-3.5 border-t border-teal-rule pt-6">
      <label htmlFor="interest-email" className="font-mono text-[11px] tracking-[0.12em] text-mist">
        FOLLOW THE INITIATIVE
      </label>
      <AnimatePresence mode="wait" initial={false}>
        {!sent ? (
          <motion.div key="form" exit={{ opacity: 0, y: -8 }} className="flex flex-col gap-3.5">
            <div className="flex flex-wrap gap-2">
              <input
                id="interest-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Your email address"
                autoComplete="email"
                className="min-h-[52px] min-w-0 basis-[200px] flex-1 rounded-full border border-teal-line bg-teal-deep px-[18px] font-[inherit] text-base text-ivory outline-offset-2"
              />
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <Button type="submit" variant="clay" className="px-[22px] text-[15px]" disabled={sending}>
                {sending ? "Sending…" : "Register interest"}
              </Button>
            </div>
            <span role="alert" className="min-h-[18px] text-[13px] text-clay-light">
              {error}
            </span>
            <span className="text-[13px] leading-[1.55] text-[#a9c0ba]">
              Occasional updates on Solvira Care's development. No marketing lists; unsubscribe any time. See our{" "}
              <a href="/privacy" className="text-mist-soft">
                privacy policy
              </a>
              .
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="thanks"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3.5 rounded-card border border-teal-line p-[18px]"
          >
            <span className="mt-1.5 size-2.5 flex-none rounded-full bg-sage" />
            <span className="flex flex-col gap-1">
              <span className="font-semibold text-ivory">Thank you.</span>
              <span className="text-sm leading-[1.55] text-mist-soft">
                We'll share updates at {email} as Solvira Care develops.
              </span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="bg-teal text-[#ede9df]">
      <div className="gutter mx-auto flex max-w-[1320px] flex-wrap items-end gap-[clamp(48px,6vw,96px)] py-[clamp(96px,12vw,176px)]">
        <Reveal className="flex min-w-0 basis-[460px] flex-[1.4] flex-col gap-7">
          <h2
            id="cta-title"
            className="font-serif text-[clamp(48px,6.6vw,104px)] font-light leading-[0.98] tracking-[-0.025em] text-ivory text-balance"
          >
            Let's make burn care feel more <em className="italic text-clay-light">human.</em>
          </h2>
          <p className="max-w-[32em] text-lg leading-[1.65] text-mist-soft">
            Explore Solvira's approach to burn care, patient education, and the next generation of supportive
            healthcare experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to={CARE.path} variant="light">
              Discover the Vision <Arrow />
            </ButtonLink>
            <ButtonLink to={CONTACT.path} variant="ghost-light">
              Contact Solvira
            </ButtonLink>
          </div>
        </Reveal>
        <InterestForm />
      </div>
    </section>
  );
}
