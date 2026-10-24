import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { FOUNDERS, TEAM_AREAS, TEAM_SIZE } from "./company";

export function Team({ h1 }: { h1?: boolean }) {
  const Heading = h1 ? "h1" : "h2";
  return (
    <section id="team" aria-labelledby="team-title" className="bg-cream">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <SectionLabel className="mb-7">
          THE TEAM
        </SectionLabel>
        <Reveal className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <Heading id="team-title" className="h-display max-w-[11em] text-[clamp(44px,5.4vw,80px)] leading-none">
            The people <em className="italic text-clay-ink">behind it.</em>
          </Heading>
          <div className="flex items-baseline gap-3.5">
            <span className="font-serif text-[clamp(56px,6vw,80px)] font-light leading-[0.9] text-teal">{TEAM_SIZE}</span>
            <span className="text-sm leading-[1.45] text-body">
              people working
              <br />
              on Solvira today
            </span>
          </div>
        </Reveal>

        <ul className="mt-[clamp(48px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(20px,2.4vw,32px)]">
          {FOUNDERS.map((p, i) => (
            <li key={i}>
              <Reveal delay={i * 0.1} className="flex flex-col gap-4">
                <div className="placeholder-stripes relative aspect-[4/5] overflow-hidden rounded-card">
                  <ImageSlot src={p.photo} alt={p.photo ? p.name : ""} placeholder="Portrait of a founder, natural light." />
                </div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-clay-ink">FOUNDER</span>
                <h3 className="font-serif text-[clamp(26px,2.4vw,32px)] font-light leading-[1.1] text-teal">{p.name}</h3>
                <p className="text-sm font-medium text-body">{p.role}</p>
                <p className="max-w-[24em] text-[15px] leading-[1.6] text-body">{p.bio}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <ul className="mt-[clamp(40px,5vw,64px)] flex flex-wrap gap-2.5 border-t border-rule-strong pt-6">
          {TEAM_AREAS.map((a) => (
            <li key={a} className="rounded-full border border-outline px-4 py-1.5 text-sm text-body">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
