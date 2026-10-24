import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import { JOURNEY_STAGES } from "./content";

export function Journey() {
  const [stage, setStage] = useState(0);
  const count = JOURNEY_STAGES.length;
  const s = JOURNEY_STAGES[stage];

  return (
    <section aria-labelledby="journey-title" className="gutter section-y mx-auto max-w-[1320px]">
      <SectionLabel className="mb-7">
        THE PATIENT JOURNEY
      </SectionLabel>
      <Reveal className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <h2 id="journey-title" className="h-display max-w-[12em] text-[clamp(44px,5.4vw,80px)] leading-none">
          Here for the moments in between.
        </h2>
        <p className="max-w-[26em] text-[17px] leading-[1.6] text-body">
          Needs change over time. Solvira Care is being designed around three stages, each with its own focus.
        </p>
      </Reveal>

      <div role="tablist" aria-label="Journey stages" className="grid grid-cols-3 border-t border-rule">
        {JOURNEY_STAGES.map((j, i) => {
          const active = stage === i;
          return (
            <button
              key={j.key}
              role="tab"
              aria-selected={active}
              onClick={() => setStage(i)}
              className={cn(
                "-mt-px flex flex-col gap-1.5 border-t-2 bg-transparent py-[18px] pe-3 text-start transition-colors",
                active ? "border-teal" : "border-transparent hover:opacity-85",
              )}
            >
              <span className={cn("font-mono text-[11px] tracking-[0.12em]", active ? "text-clay-ink" : "text-muted")}>
                STAGE {j.key} · {j.theme.toUpperCase()}
              </span>
              <span className={cn("font-serif text-[clamp(18px,2vw,26px)] leading-[1.15]", active ? "text-teal" : "text-muted")}>
                {j.name}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.key}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="mt-[clamp(32px,4vw,56px)] flex flex-wrap items-stretch gap-[clamp(40px,6vw,96px)]"
        >
          <div className="placeholder-stripes relative min-h-[clamp(360px,40vw,560px)] min-w-0 basis-[440px] flex-[1.25] overflow-hidden rounded-card">
            <ImageSlot src={s.image} alt={s.imageAlt} placeholder={s.placeholder} />
            {s.showCard && (
              <div className="absolute end-5 top-5 flex w-[min(250px,calc(100%-40px))] flex-col gap-2.5 rounded-card bg-ivory p-4 shadow-[0_18px_40px_-20px_rgba(23,61,59,0.4)]">
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted">TONIGHT · OPTIONAL</span>
                <span className="font-serif text-lg leading-tight text-teal">
                  A bedtime story for Layla, and two tips for you.
                </span>
                <span className="text-xs text-muted">7 min read-aloud · Caregiver notes</span>
              </div>
            )}
          </div>

          <div className="flex min-w-0 basis-[340px] flex-1 flex-col justify-center gap-6">
            <div className="font-serif text-[clamp(64px,8vw,120px)] font-light italic leading-[0.9] tracking-[-0.02em] text-sage">
              {s.theme}
            </div>
            <p className="max-w-[28em] text-pretty text-lg leading-[1.6] text-body">{s.body}</p>
            <ul className="border-t border-rule">
              {s.items.map((it) => (
                <li key={it} className="flex items-baseline gap-3.5 border-b border-rule py-[13px] text-base">
                  <span className="size-1.5 flex-none -translate-y-0.5 rounded-full bg-clay" />
                  {it}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5">
              {[
                { label: "Previous stage", Icon: ArrowLeft, next: (stage + count - 1) % count },
                { label: "Next stage", Icon: ArrowRight, next: (stage + 1) % count },
              ].map((b) => (
                <button
                  key={b.label}
                  aria-label={b.label}
                  onClick={() => setStage(b.next)}
                  className="size-11 rounded-full border border-teal bg-transparent text-teal transition-colors hover:bg-teal hover:text-ivory rtl:-scale-x-100"
                >
                  <b.Icon aria-hidden="true" size={18} className="mx-auto rtl:-scale-x-100" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
