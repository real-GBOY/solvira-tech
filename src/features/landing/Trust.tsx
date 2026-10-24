import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TRUST_POINTS } from "./content";

export function Trust() {
  return (
    <section id="approach" aria-labelledby="trust-title" className="gutter section-y mx-auto max-w-[1320px]">
      <div className="flex flex-wrap gap-[clamp(40px,6vw,96px)]">
        <Reveal className="flex min-w-0 basis-[380px] flex-1 flex-col gap-7">
          <SectionLabel>TRUST, PRIVACY &amp; RESPONSIBLE CARE</SectionLabel>
          <h2 id="trust-title" className="h-display text-[clamp(40px,4.6vw,68px)] leading-[1.04]">
            Care should feel clear. <em className="italic">Your choices should stay yours.</em>
          </h2>
          <p className="max-w-[28em] text-lg leading-[1.65] text-body">
            Patient support must be built around clear information, responsible guidance, and respect for personal
            privacy.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex min-w-0 basis-[460px] flex-[1.3] flex-col border-t border-teal">
          {TRUST_POINTS.map((p, i) => (
            <div
              key={p.title}
              className="grid grid-cols-[clamp(56px,7vw,96px)_1fr] gap-4 border-b border-rule py-8"
            >
              <span className="font-serif text-[clamp(40px,4vw,56px)] font-light leading-[0.9] text-sage">{i + 1}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-[28px] font-normal text-teal">{p.title}</h3>
                <p className="max-w-[30em] text-base leading-[1.6] text-body">{p.body}</p>
              </div>
            </div>
          ))}
          <p className="mt-6 max-w-[40em] text-sm leading-[1.6] text-muted">
            In an emergency, or if a burn is large, deep, or on the face, hands, feet or genitals, seek medical help
            straight away. In Egypt, call 123 for an ambulance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
