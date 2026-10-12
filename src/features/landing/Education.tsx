import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import { FAQS, RESOURCES, RESOURCE_FILTERS, WARNING_SIGNS, type ResourceFilter } from "./content";

const pad = (n: number) => String(n).padStart(2, "0");
const noop = (e: React.MouseEvent) => e.preventDefault();

function Faq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="mt-[clamp(72px,9vw,128px)] flex flex-wrap gap-[clamp(32px,6vw,96px)]">
      <div className="flex min-w-0 basis-[280px] flex-1 flex-col gap-4">
        <h3 className="h-display text-[clamp(32px,3.4vw,48px)] leading-[1.05]">Frequently asked questions</h3>
        <p className="max-w-[22em] text-[15px] leading-[1.6] text-muted">
          General information. Not a substitute for advice from a pharmacist or doctor.
        </p>
      </div>
      <div className="min-w-0 basis-[480px] flex-[2] border-t border-rule">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-rule">
              <h4>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 bg-transparent py-[22px] text-start font-serif text-[clamp(20px,1.8vw,24px)] font-normal text-teal hover:text-clay-ink"
                >
                  <span>{f.q}</span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative size-8 flex-none rounded-full border border-outline"
                  >
                    {/* Two bars instead of a "+" glyph, so the mark (and its 45° "×" state) is geometrically centered. */}
                    <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                  </motion.span>
                </button>
              </h4>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[40em] pb-[26px] pe-14 text-base leading-[1.65] text-body">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Education() {
  const [filter, setFilter] = useState<ResourceFilter>("All");

  const resources = useMemo(
    () => RESOURCES.filter((r) => filter === "All" || r.cat === filter),
    [filter],
  );
  const [featured, ...rest] = resources;

  return (
    <section id="education" aria-labelledby="edu-title" className="gutter section-y mx-auto max-w-[1320px]">
      <SectionLabel n="04" className="mb-7">
        EDUCATION &amp; PREVENTION
      </SectionLabel>
      <Reveal className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
        <h2 id="edu-title" className="h-display max-w-[12em] text-[clamp(44px,5.4vw,80px)] leading-none">
          Better information starts with better access.
        </h2>
        <p className="max-w-[26em] text-[17px] leading-[1.6] text-body">
          Practical, plain-language guides for everyday safety, first aid and caregiving, planned in Arabic and English.
        </p>
      </Reveal>

      <div className="mt-[clamp(48px,6vw,88px)] flex flex-wrap items-start gap-[clamp(32px,5vw,72px)] border-t border-teal pt-7">
        <nav aria-label="Resource categories" className="flex min-w-0 max-w-[280px] basis-[220px] flex-1 flex-col gap-5">
          <span className="font-mono text-[11px] tracking-[0.12em] text-muted">INDEX</span>
          <div role="toolbar" aria-label="Filter resources" className="flex flex-col">
            {RESOURCE_FILTERS.map((f) => {
              const on = filter === f;
              const count = f === "All" ? RESOURCES.length : RESOURCES.filter((r) => r.cat === f).length;
              return (
                <button
                  key={f}
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "grid min-h-12 grid-cols-[14px_1fr_auto] items-center gap-3 border-b border-[#e2ddd1] bg-transparent text-start text-base transition-colors hover:text-teal",
                    on ? "font-semibold text-teal" : "text-body",
                  )}
                >
                  <span aria-hidden="true" className={cn("size-[7px] rounded-full", on ? "bg-clay" : "bg-transparent")} />
                  <span>{f}</span>
                  <span className="font-mono text-[11px] text-muted">{pad(count)}</span>
                </button>
              );
            })}
          </div>
          <p className="text-[13px] leading-[1.55] text-muted">
            Sample titles. Every guide will be reviewed by a qualified professional before publication, with reviewer
            details on each page.
          </p>
        </nav>

        <div className="flex min-w-0 basis-[520px] flex-[3] flex-col gap-[clamp(32px,4vw,48px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-[clamp(32px,4vw,48px)]"
            >
              {featured && (
                <a
                  href="#education"
                  onClick={noop}
                  className="group flex flex-wrap items-stretch gap-[clamp(24px,3vw,40px)] text-charcoal no-underline hover:text-clay-ink"
                >
                  <div className="placeholder-stripes relative aspect-[4/3] min-w-0 basis-[300px] flex-[1.1] overflow-hidden rounded-card">
                    <ImageSlot placeholder="Feature image — a calm, everyday home detail related to the guide (kitchen counter, bath time, a kettle). No injury shown." />
                  </div>
                  <div className="flex min-w-0 basis-[260px] flex-1 flex-col justify-between gap-[18px] py-1">
                    <div className="flex flex-col gap-[18px]">
                      <span className="font-mono text-[11px] tracking-[0.12em] text-clay-ink">
                        FEATURED · {featured.cat.toUpperCase()}
                      </span>
                      <span className="font-serif text-[clamp(30px,3vw,42px)] font-light leading-[1.08] tracking-[-0.01em] text-teal text-balance">
                        {featured.title}
                      </span>
                      <span className="max-w-[28em] text-base leading-[1.6] text-body">{featured.dek}</span>
                    </div>
                    <span className="flex items-center justify-between gap-4 border-t border-rule pt-4 text-sm text-muted">
                      <span>
                        {featured.type.toUpperCase()} · {featured.time}
                      </span>
                      <span className="font-medium text-teal">Read the guide →</span>
                    </span>
                  </div>
                </a>
              )}
              {rest.length > 0 && (
                <ol className="border-t border-rule">
                  {rest.map((r, i) => (
                    <li key={r.title} className="border-b border-rule">
                      <a
                        href="#education"
                        onClick={noop}
                        className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-x-5 gap-y-2 py-5 pe-2 text-charcoal no-underline transition-all duration-200 hover:bg-cream hover:ps-3"
                      >
                        <span className="font-mono text-xs text-clay-ink">{pad(i + 2)}</span>
                        <span className="flex min-w-0 flex-col gap-1.5">
                          <span className="font-serif text-[clamp(20px,1.8vw,24px)] leading-tight text-teal text-pretty">
                            {r.title}
                          </span>
                          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">
                            {r.cat.toUpperCase()} · {r.type.toUpperCase()}
                          </span>
                        </span>
                        <span className="whitespace-nowrap text-[13px] text-muted">{r.time} →</span>
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Reveal className="mt-[clamp(72px,9vw,128px)] flex flex-wrap gap-[clamp(32px,5vw,72px)] rounded-card bg-cream p-[clamp(28px,4vw,56px)]">
        <div className="flex min-w-0 basis-[260px] flex-1 flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.12em] text-clay-ink">WHEN TO SEEK CARE</span>
          <h3 className="h-display text-[clamp(30px,3vw,42px)] leading-[1.08]">
            Some burns need a professional straight away.
          </h3>
          <div className="mt-auto flex items-baseline gap-3.5 pt-4">
            <span className="font-serif text-[clamp(56px,6vw,80px)] font-light leading-[0.9] text-teal">123</span>
            <span className="text-sm leading-[1.45] text-body">
              Emergency ambulance
              <br />
              in Egypt
            </span>
          </div>
        </div>
        <ul className="grid min-w-0 basis-[340px] flex-[1.6] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-t border-rule-strong">
          {WARNING_SIGNS.map((t, i) => (
            <li key={t} className="flex gap-3.5 border-b border-rule-strong py-4 pe-4 text-base leading-[1.45]">
              <span className="pt-1 font-mono text-[11px] text-clay-ink">{pad(i + 1)}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="basis-full text-[13px] text-muted">
          General information only. If you are unsure, contact a pharmacist or doctor.
        </p>
      </Reveal>

      <Faq />
    </section>
  );
}
