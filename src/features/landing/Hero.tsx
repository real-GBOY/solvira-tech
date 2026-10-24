import { Arrow } from "@/components/Arrow";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { ImageSlot } from "@/components/ImageSlot";
import { CARE, LEARN } from "@/config/pages";
import { PRINCIPLES } from "./content";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const MOODS = ["Settled", "A little unsure", "Skip today"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="gutter mx-auto max-w-[1320px] pb-[clamp(72px,9vw,128px)] pt-[clamp(40px,6vw,88px)]"
    >
      <div className="flex flex-wrap items-end gap-[clamp(40px,6vw,96px)]">
        <div className="flex min-w-0 basis-[440px] flex-1 flex-col gap-8 pb-[clamp(0px,2vw,24px)]">
          <motion.div
            {...rise(0)}
            className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted"
          >
            <span className="h-px w-7 bg-clay" />
            BURN CARE, WITH PEOPLE AT THE CENTER
          </motion.div>
          <motion.h1
            {...rise(0.1)}
            id="hero-title"
            className="h-display text-[clamp(52px,7.4vw,108px)] leading-[0.96] tracking-[-0.025em]"
          >
            Care that goes <em className="italic text-clay-ink">beyond</em> the burn.
          </motion.h1>
          <motion.p
            {...rise(0.2)}
            className="max-w-[34em] text-pretty text-[clamp(17px,1.4vw,20px)] leading-relaxed text-body"
          >
            Solvira brings burn-care information, practical guidance, and thoughtful support closer to the people who
            need them — helping patients and caregivers navigate the journey with greater confidence.
          </motion.p>
          <motion.div {...rise(0.3)} className="flex flex-wrap gap-3">
            <ButtonLink to={CARE.path}>
              Discover Solvira Care <Arrow />
            </ButtonLink>
            <ButtonLink to={LEARN.path} variant="outline">
              Explore Burn Care Resources
            </ButtonLink>
          </motion.div>
          <motion.p {...rise(0.4)} className="flex max-w-[34em] items-baseline gap-2.5 text-[13px] leading-normal text-muted">
            <span className="whitespace-nowrap rounded-full border border-outline px-[9px] py-[3px] font-mono text-[11px] tracking-[0.1em]">
              CONCEPT
            </span>
            Solvira Care is a proposed patient-support service and is not yet available.
          </motion.p>
        </div>

        <motion.div {...rise(0.15)} className="relative min-w-0 basis-[420px] flex-1">
          <div className="placeholder-stripes relative h-[clamp(440px,52vw,700px)] overflow-hidden rounded-card">
            <ImageSlot src="/products/duo.jpg" alt="Solvira Pharma burn care ointment and spray" placeholder="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[clamp(12px,2vw,24px)] end-[clamp(12px,2vw,24px)] flex w-[min(300px,calc(100%-24px))] flex-col gap-3.5 rounded-card bg-ivory p-5 shadow-[0_1px_0_rgba(23,61,59,0.06),0_18px_40px_-18px_rgba(23,61,59,0.35)]"
          >
            <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-muted">
              <span>SOLVIRA CARE · DAY 4</span>
              <span className="size-[7px] rounded-full bg-sage" />
            </div>
            <div className="font-serif text-[21px] leading-tight text-teal">How is everyone doing this evening?</div>
            <div className="flex flex-wrap gap-1.5">
              {MOODS.map((m, i) => (
                <span
                  key={m}
                  className={
                    i === 0
                      ? "rounded-full bg-teal px-3 py-[7px] text-[13px] text-ivory"
                      : "rounded-full border border-[#cfcabd] px-3 py-[7px] text-[13px]"
                  }
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="border-t border-rule-soft pt-2.5 text-xs text-muted">
              Optional check-in · general guidance only
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-[clamp(56px,7vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] border-t border-rule">
        {PRINCIPLES.map((p) => (
          <div key={p.n} className="flex gap-4 pe-6 pt-[22px]">
            <span className="pt-1 font-mono text-xs text-clay-ink">{p.n}</span>
            <p className="text-[15px] leading-[1.55] text-body">
              <strong className="font-semibold text-teal">{p.title}</strong> {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
