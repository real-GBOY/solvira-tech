import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import { CONNECTED_NODES } from "./content";

export function Connected() {
  return (
    <section aria-labelledby="connect-title" className="bg-cream">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <SectionLabel className="mb-7">
          A BETTER CONNECTED EXPERIENCE
        </SectionLabel>
        <h2 id="connect-title" className="h-display max-w-[13em] text-[clamp(44px,5.4vw,80px)] leading-none">
          Connecting people to the guidance they need.
        </h2>
        <ol className="mt-[clamp(48px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-0 gap-y-10">
          {CONNECTED_NODES.map((n, i) => {
            const highlighted = i === 1;
            const last = i === CONNECTED_NODES.length - 1;
            return (
              <motion.li
                key={n.title}
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
                      highlighted ? "bg-teal text-ivory" : "bg-transparent text-teal",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("h-px flex-1 bg-teal", last ? "opacity-0" : "opacity-35")} />
                </div>
                <h3 className="mt-2 font-serif text-2xl font-normal leading-[1.15] text-teal">{n.title}</h3>
                <p className="max-w-[18em] text-[15px] leading-[1.55] text-body">{n.body}</p>
                <span className="font-mono text-[10.5px] tracking-[0.1em] text-clay-ink">{n.tag}</span>
              </motion.li>
            );
          })}
        </ol>
        <p className="mt-[clamp(40px,5vw,64px)] max-w-[46em] border-t border-rule-strong pt-5 text-sm leading-[1.6] text-muted">
          This shows a proposed service model. It does not represent existing hospital partnerships, system
          integrations, or a live healthcare network. WhatsApp access would be optional.
        </p>
      </div>
    </section>
  );
}
