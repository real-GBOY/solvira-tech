import { Arrow } from "@/components/Arrow";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { SITE } from "@/config/site";
import { CAREERS_TEAMS } from "./company";

const applyHref = (team: string) => `mailto:${SITE.email}?subject=${encodeURIComponent(`Application: ${team}`)}`;

const dt = "font-mono text-[10.5px] tracking-[0.1em] text-clay-ink";

export function Careers({ h1 }: { h1?: boolean }) {
  const Heading = h1 ? "h1" : "h2";
  return (
    <section id="careers" aria-labelledby="careers-title" className="gutter section-y mx-auto max-w-[1320px]">
      <SectionLabel className="mb-7">
        CAREERS
      </SectionLabel>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <Heading id="careers-title" className="h-display max-w-[11em] text-[clamp(44px,5.4vw,80px)] leading-none">
          Build it <em className="italic text-clay-ink">with us.</em>
        </Heading>
        <p className="max-w-[24em] text-[17px] leading-[1.6] text-body">
          Meet each team, see what they're working on, and apply when a role opens.
        </p>
      </Reveal>

      <ul className="mt-[clamp(48px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[clamp(20px,2.4vw,32px)]">
        {CAREERS_TEAMS.map((t, i) => (
          <li key={t.name}>
            <Reveal
              delay={i * 0.1}
              className="flex h-full flex-col gap-5 rounded-card border border-rule-strong p-[clamp(24px,2.4vw,32px)]"
            >
              <h3 className="font-serif text-[clamp(26px,2.4vw,32px)] font-light leading-[1.1] text-teal">{t.name}</h3>
              <dl className="flex flex-col gap-4 text-[15px] leading-[1.55]">
                <div>
                  <dt className={dt}>LED BY</dt>
                  <dd className="text-body">{t.lead}</dd>
                </div>
                <div>
                  <dt className={dt}>WORKING ON</dt>
                  <dd className="text-body">{t.focus}</dd>
                </div>
                <div>
                  <dt className={dt}>LATEST</dt>
                  <dd className="text-body">{t.update}</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-col gap-3 border-t border-rule pt-4">
                <span className="font-mono text-[10.5px] tracking-[0.1em] text-muted">
                  {t.roles.length ? `${t.roles.length} OPEN ROLES` : "NO OPEN ROLES RIGHT NOW"}
                </span>
                {t.roles.map((r) => (
                  <a key={r} href={applyHref(`${t.name}: ${r}`)} className="font-serif text-lg text-teal no-underline hover:text-clay-ink">
                    {r} <Arrow />
                  </a>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-[clamp(32px,4vw,56px)] flex flex-wrap items-center justify-between gap-6 rounded-card bg-cream p-[clamp(24px,3vw,40px)]">
        <p className="max-w-[28em] font-serif text-[clamp(22px,2vw,28px)] leading-[1.25] text-teal">
          Don't see your role? Tell us how you'd like to help.
        </p>
        <a
          href={applyHref("General")}
          className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-teal px-[26px] text-base font-medium text-ivory no-underline transition-colors duration-200 hover:bg-teal-deep"
        >
          Send an application
        </a>
      </Reveal>
    </section>
  );
}
