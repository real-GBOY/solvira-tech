import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { CarePhone } from "./CarePhone";
import { CARE_STEPS } from "./content";

export function Care() {
  const [step, setStep] = useState(0);

  return (
    <section id="care" aria-labelledby="care-title" className="bg-teal text-[#ede9df]">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-mist">
            <span>02</span>
            <span className="h-px w-7 bg-current" />
            <span>INTRODUCING SOLVIRA CARE</span>
          </div>
          <span className="rounded-full border border-teal-line px-3 py-[5px] font-mono text-[11px] tracking-[0.1em] text-mist">
            PROPOSED SERVICE · IN DEVELOPMENT
          </span>
        </div>

        {/* Stacked (phone): heading, intro, phone mock, steps, note. From lg: steps column left, sticky phone right. */}
        <div className="grid items-start gap-x-[clamp(48px,6vw,96px)] gap-y-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="max-lg:contents lg:flex lg:min-w-0 lg:flex-col lg:gap-7">
            <h2
              id="care-title"
              className="font-serif text-[clamp(44px,5.4vw,80px)] font-light leading-none tracking-[-0.02em] text-ivory text-balance"
            >
              Support, one step <em className="italic text-clay-light">at a time.</em>
            </h2>
            <p className="max-w-[32em] text-[clamp(17px,1.35vw,19px)] leading-[1.65] text-mist-soft">
              A connected experience designed to make useful information and supportive resources easier to access
              throughout the burn-care journey.
            </p>

            <div
              role="tablist"
              aria-label="Solvira Care steps"
              className="flex flex-col border-t border-teal-rule max-lg:order-4 lg:mt-5"
            >
              {CARE_STEPS.map((s, i) => {
                const active = step === i;
                return (
                  <button
                    key={s.title}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setStep(i)}
                    className={cn(
                      "grid grid-cols-[48px_1fr] items-baseline gap-4 border-b border-teal-rule px-1 py-[22px] text-start text-[#ede9df] transition-colors duration-200",
                      active ? "bg-teal-soft" : "bg-transparent hover:bg-teal-soft",
                    )}
                  >
                    <span className={cn("font-mono text-[13px]", active ? "text-clay-light" : "text-[#8fa7a2]")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col gap-1.5">
                      <span
                        className={cn(
                          "font-serif text-[clamp(24px,2.2vw,30px)]",
                          active ? "text-ivory" : "text-[#c7d4d0]",
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="max-w-[34em] text-[15px] leading-[1.55] text-mist">{s.body}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex max-w-[36em] items-start gap-3.5 rounded-card border border-teal-rule px-5 py-[18px] max-lg:order-5">
              <span className="mt-[7px] size-2 flex-none rounded-full bg-clay" />
              <p className="text-sm leading-[1.6] text-mist-soft">
                <strong className="font-semibold text-ivory">Education, not diagnosis.</strong> Solvira Care would share
                general information and help you recognize when to contact a professional. It would not assess burns or
                recommend treatment.
              </p>
            </div>
          </Reveal>

          <div className="flex min-w-0 justify-center max-lg:order-3 lg:sticky lg:top-24 lg:col-start-2 lg:row-start-1">
            <CarePhone screen={CARE_STEPS[step].screen} stepKey={step} />
          </div>
        </div>
      </div>
    </section>
  );
}
