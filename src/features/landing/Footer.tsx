import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/config/nav";
import { scrollToSection } from "@/lib/scroll";

export type Direction = "ltr" | "rtl";

const RESOURCE_LINKS = ["Burn prevention", "First-aid basics", "For parents & caregivers", "When to seek care"];
const SOCIALS = ["Instagram", "LinkedIn", "Facebook"];
const LEGAL = ["Privacy policy", "Terms of use", "Medical disclaimer"];

const columnTitle = "font-mono text-[11px] tracking-[0.12em] text-[#8e9893]";
const footLink = "text-[15px] text-[#e4e7e3] no-underline hover:text-clay-light";

export function Footer({ dir, onToggleDir }: { dir: Direction; onToggleDir: () => void }) {
  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer id="contact" className="bg-footer text-[#c9cfcb]">
      <div className="gutter mx-auto max-w-[1320px] pb-10 pt-[clamp(64px,8vw,104px)]">
        <div className="flex flex-wrap gap-x-[clamp(32px,5vw,80px)] gap-y-12">
          <div className="flex min-w-0 basis-[300px] flex-[1.4] flex-col gap-5">
            <Logo className="text-[#f4f1e9]" textClassName="text-2xl" />
            <p className="max-w-[22em] font-serif text-xl leading-[1.45] text-[#e4e7e3]">
              Solvira is exploring a more connected, human-centered approach to burn care, education, and patient
              support.
            </p>
          </div>

          <div className="flex basis-[150px] flex-1 flex-col gap-3">
            <span className={columnTitle}>SOLVIRA</span>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={go(l.id)} className={footLink}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex basis-[170px] flex-1 flex-col gap-3">
            <span className={columnTitle}>RESOURCES</span>
            {RESOURCE_LINKS.map((r) => (
              <a key={r} href="#education" onClick={go("education")} className={footLink}>
                {r}
              </a>
            ))}
          </div>

          <div className="flex basis-[200px] flex-1 flex-col gap-3">
            <span className={columnTitle}>CONTACT</span>
            <span className="text-[15px] text-[#e4e7e3]">hello@solvira.example</span>
            <span className="text-[15px] text-[#e4e7e3]">+20 0 000 000 0000</span>
            <span className="text-[15px] text-[#e4e7e3]">Cairo, Egypt</span>
            <span className="text-xs text-[#8e9893]">Placeholder details</span>
            <div className="mt-1.5 flex gap-4 text-sm">
              {SOCIALS.map((s) => (
                <a key={s} href="#contact" onClick={go("contact")} className="text-[#c9cfcb] hover:text-clay-light">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,6vw,80px)] flex flex-wrap gap-4 rounded-card border border-[#39413e] px-6 py-[22px]">
          <span className="pt-[3px] font-mono text-[11px] tracking-[0.12em] text-clay-light">MEDICAL INFORMATION</span>
          <p className="min-w-0 basis-[400px] flex-1 text-sm leading-[1.65] text-[#c9cfcb]">
            Content on this site is for general educational purposes and is not a substitute for professional medical
            advice, diagnosis or treatment. If you are concerned about a burn, speak to a pharmacist or doctor. In an
            emergency, call 123. Solvira Care and the features described here are proposed concepts and are not yet
            available.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-4 text-[13px] text-[#8e9893]">
          <span>© 2026 Solvira. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            {LEGAL.map((l) => (
              <a key={l} href="#contact" onClick={go("contact")} className="text-[#c9cfcb] hover:text-clay-light">
                {l}
              </a>
            ))}
            <button
              onClick={onToggleDir}
              aria-label={dir === "ltr" ? "Switch to Arabic, right-to-left layout" : "Switch to English, left-to-right layout"}
              className="bg-transparent text-[#c9cfcb] hover:text-clay-light"
            >
              <span className={dir === "ltr" ? "font-semibold text-[#e4e7e3]" : undefined}>English</span> ·{" "}
              <span className={dir === "rtl" ? "font-semibold text-[#e4e7e3]" : undefined}>العربية</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
