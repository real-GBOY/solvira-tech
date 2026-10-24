import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { INSIGHT_ITEMS } from "./content";

export function Insight({ h1 }: { h1?: boolean }) {
  const Heading = h1 ? "h1" : "h2";
  return (
    <section id="about" aria-labelledby="insight-title" className="bg-cream">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <SectionLabel className="mb-[clamp(40px,5vw,72px)]">
          THE HUMAN INSIGHT
        </SectionLabel>
        <div className="flex flex-wrap items-start gap-[clamp(40px,7vw,120px)]">
          <Reveal className="flex min-w-0 basis-[380px] flex-1 flex-col gap-7">
            <Heading id="insight-title" className="h-display text-[clamp(44px,5.4vw,80px)] leading-none">
              A burn is more than a moment.
            </Heading>
            <p className="max-w-[30em] text-pretty text-[clamp(17px,1.35vw,19px)] leading-[1.65] text-body">
              It can leave patients and families with questions about what to do next, how to manage everyday concerns,
              and when to seek professional help. Finding clear, trustworthy guidance should not be another challenge.
            </p>
            <ol className="mt-4 border-t border-rule-strong">
              {INSIGHT_ITEMS.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 border-b border-rule-strong py-[18px]">
                  <span className="font-mono text-xs text-clay-ink">{String.fromCharCode(97 + i)}</span>
                  <span className="font-serif text-2xl text-teal">{item}</span>
                </li>
              ))}
            </ol>
            <p className="max-w-[30em] text-sm leading-[1.55] text-muted">
              Every experience is different. These are some of the questions people tell pharmacists and doctors they
              have.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="min-w-0 basis-[440px] flex-[1.3]">
            <figure className="m-0 flex flex-col gap-3.5">
              <div className="placeholder-stripes relative aspect-[4/5] max-h-[760px] w-full overflow-hidden rounded-card">
                <ImageSlot src="/products/spray-patch.jpg" alt="Solvira Pharma burn care spray and patch" placeholder="" />
              </div>
              <figcaption className="font-mono text-[11px] tracking-[0.08em] text-muted">
                FIG. 01 — BURN CARE, MADE SIMPLE
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
