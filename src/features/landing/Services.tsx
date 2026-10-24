import { Arrow } from "@/components/Arrow";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Link } from "@/lib/router";
import { AppMockup } from "./AppMockup";
import { PHARMA, SERVICES } from "./content";

export function Services({ h1 }: { h1?: boolean }) {
  const Heading = h1 ? "h1" : "h2";
  return (
    <section id="services" aria-labelledby="services-title" className="gutter section-y mx-auto max-w-[1320px]">
      <SectionLabel className="mb-7">
        WHAT WE DO
      </SectionLabel>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <Heading id="services-title" className="h-display max-w-[11em] text-[clamp(44px,5.4vw,80px)] leading-none">
          With the patient, <em className="italic text-clay-ink">start to finish.</em>
        </Heading>
        <p className="max-w-[24em] text-[17px] leading-[1.6] text-body">
          Medicine and the support around it, built together.
        </p>
      </Reveal>

      <Reveal className="mt-[clamp(48px,6vw,88px)] flex flex-wrap items-stretch gap-[clamp(24px,3vw,48px)]">
        <div className="placeholder-stripes relative aspect-[3/2] min-w-0 basis-[320px] flex-[2] overflow-hidden rounded-card">
          <ImageSlot src={PHARMA.image} alt={PHARMA.alt} placeholder={PHARMA.placeholder} />
        </div>
        <div className="flex min-w-0 basis-[240px] flex-1 flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-clay-ink">
              <PHARMA.Icon aria-hidden="true" size={15} />
              {PHARMA.kind}
            </span>
            <span className="rounded-full border border-outline px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] text-muted">
              {PHARMA.status}
            </span>
          </div>
          <h3 className="font-serif text-[clamp(32px,3.2vw,46px)] font-light leading-[1.05] text-teal">{PHARMA.title}</h3>
          <p className="max-w-[22em] text-base leading-[1.6] text-body">{PHARMA.body}</p>
          <ol className="mt-auto border-t border-rule">
            {PHARMA.items?.map((t, i) => (
              <li key={t} className="flex gap-4 border-b border-rule py-3.5 font-serif text-xl text-teal">
                <span className="pt-1.5 font-mono text-[11px] text-clay-ink">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <ul className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(20px,2.4vw,32px)]">
        {SERVICES.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.1} className="flex h-full flex-col gap-5">
              <div className="placeholder-stripes relative aspect-[4/3] overflow-hidden rounded-card">
                {s.mockup === "app" ? <AppMockup /> : <ImageSlot src={s.image} alt={s.alt} placeholder={s.placeholder} />}
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-clay-ink">
                  <s.Icon aria-hidden="true" size={15} />
                  {s.kind}
                </span>
                <span className="rounded-full border border-outline px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] text-muted">
                  {s.status}
                </span>
              </div>
              <h3 className="font-serif text-[clamp(28px,2.6vw,36px)] font-light leading-[1.1] text-teal">{s.title}</h3>
              <p className="max-w-[24em] text-base leading-[1.6] text-body">{s.body}</p>
              {s.link && (
                <Link to={s.link.to} className="mt-auto pt-1 text-sm font-medium text-teal no-underline hover:text-clay-ink">
                  {s.link.label} <Arrow className="ms-1" />
                </Link>
              )}
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
