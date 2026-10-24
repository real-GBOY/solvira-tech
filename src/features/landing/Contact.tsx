import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/config/site";
import { SOCIALS, type ContactItem } from "./company";

const CHANNELS: (ContactItem & { Icon: LucideIcon })[] = [
  { label: "EMAIL", value: SITE.email, href: `mailto:${SITE.email}`, Icon: Mail },
  { label: "PHONE", value: "+20 000 000 0000", Icon: Phone },
  { label: "WHATSAPP", value: "+20 000 000 0000", Icon: MessageCircle },
  { label: "ADDRESS", value: "Street, City, Egypt", Icon: MapPin },
];

function Item({ item }: { item: ContactItem & { Icon: LucideIcon } }) {
  const body = (
    <>
      <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.1em] text-clay-ink">
        <item.Icon aria-hidden="true" size={14} />
        {item.label}
      </span>
      <span className="break-words font-serif text-[clamp(20px,1.8vw,24px)] text-teal">{item.value}</span>
      {!item.href && <span className="text-[13px] text-muted">Coming soon</span>}
    </>
  );
  const cls = "flex min-w-0 flex-col gap-1.5 border-b border-rule-strong py-5";
  return item.href ? (
    <a href={item.href} className={`${cls} no-underline hover:text-clay-ink`}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

export function Contact({ h1 }: { h1?: boolean }) {
  const Heading = h1 ? "h1" : "h2";
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-cream">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <SectionLabel className="mb-7">
          CONTACT
        </SectionLabel>
        <div className="flex flex-wrap gap-x-[clamp(40px,7vw,120px)] gap-y-10">
          <Reveal className="flex min-w-0 basis-[320px] flex-1 flex-col gap-6">
            <Heading id="contact-title" className="h-display text-[clamp(44px,5.4vw,80px)] leading-none">
              Get in <em className="italic text-clay-ink">touch.</em>
            </Heading>
            <p className="max-w-[24em] text-[17px] leading-[1.6] text-body">
              Patients, pharmacists, partners or future teammates, we'd like to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0 basis-[420px] flex-[1.3]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 border-t border-rule-strong">
              {CHANNELS.map((c) => (
                <Item key={c.label} item={c} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {SOCIALS.map((s) => (
                <span key={s.label} className="font-mono text-[11px] tracking-[0.12em] text-muted">
                  {s.label.toUpperCase()}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
