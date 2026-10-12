import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { CareScreen } from "./content";

/** Phone mock that swaps its conversation as the active Solvira Care step changes. */
export function CarePhone({ screen, stepKey }: { screen: CareScreen; stepKey: number }) {
  return (
    <div
      aria-live="polite"
      className="w-[min(330px,100%)] rounded-[40px] bg-night p-2.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
    >
      <div className="flex h-[600px] flex-col overflow-hidden rounded-[31px] bg-[#efebe2] text-charcoal">
        <div className="flex items-center gap-3 border-b border-rule-soft bg-ivory px-5 pb-3.5 pt-[22px]">
          <span className="flex size-[34px] items-center justify-center rounded-full bg-teal">
            <span className="size-2 rounded-full bg-clay" />
          </span>
          <span className="flex flex-col">
            <span className="text-[15px] font-semibold text-teal">Solvira Care</span>
            <span className="text-xs text-muted">{screen.sub}</span>
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepKey}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2.5 px-4 py-[18px]"
            >
              <div className="self-center pb-1 font-mono text-[10px] tracking-[0.1em] text-muted">{screen.stamp}</div>
              {screen.msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.12 }}
                  className={cn(
                    "max-w-[84%] whitespace-pre-line rounded-[14px] px-3.5 py-[11px] text-sm leading-normal shadow-[0_1px_0_rgba(0,0,0,0.04)]",
                    m.from === "care" ? "self-start bg-white" : "self-end bg-[#d9e3d6]",
                  )}
                >
                  {m.text}
                </motion.div>
              ))}
              <div className="mt-1 flex flex-col gap-[7px]">
                {screen.chips.map((c) => (
                  <span
                    key={c}
                    className="self-start rounded-full border border-teal bg-ivory px-[13px] py-[7px] text-[13px] text-teal"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="border-t border-rule-soft bg-ivory px-4 pb-[18px] pt-3 text-center text-[11px] text-muted">
          General information only · Not a medical assessment
        </div>
      </div>
    </div>
  );
}
