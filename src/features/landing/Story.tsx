import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { VideoSlot } from "@/components/VideoSlot";
import { cn } from "@/lib/cn";
import { MILESTONES } from "./company";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="gutter section-y mx-auto max-w-[1320px]">
      <SectionLabel className="mb-7">
        OUR STORY
      </SectionLabel>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <h2 id="story-title" className="h-display max-w-[11em] text-[clamp(44px,5.4vw,80px)] leading-none">
          How Solvira <em className="italic text-clay-ink">began.</em>
        </h2>
        <p className="max-w-[24em] text-[17px] leading-[1.6] text-body">From an idea to our first products.</p>
      </Reveal>

      <ol className="mt-[clamp(48px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-y-10">
        {MILESTONES.map((m, i) => {
          const last = i === MILESTONES.length - 1;
          return (
            <motion.li
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3.5 pe-6"
            >
              <div className="flex items-center">
                <span
                  className={cn(
                    "flex size-11 flex-none items-center justify-center rounded-full border border-teal font-mono text-xs",
                    last ? "bg-teal text-ivory" : "text-teal",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("h-px flex-1 bg-teal", last ? "opacity-0" : "opacity-35")} />
              </div>
              <span className="mt-2 font-mono text-[10.5px] tracking-[0.1em] text-clay-ink">{m.when}</span>
              <h3 className="font-serif text-2xl font-normal leading-[1.15] text-teal">{m.title}</h3>
              <p className="max-w-[18em] text-[15px] leading-[1.55] text-body">{m.body}</p>
            </motion.li>
          );
        })}
      </ol>

      <Reveal className="mt-[clamp(48px,6vw,88px)]">
        <div className="placeholder-stripes relative aspect-video overflow-hidden rounded-card">
          <VideoSlot title="The Solvira story" poster="/products/pharma-range.jpeg" />
        </div>
      </Reveal>
    </section>
  );
}
