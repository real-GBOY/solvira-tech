import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/config/nav";
import { cn } from "@/lib/cn";
import { scrollToSection } from "@/lib/scroll";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu links wait for the menu to finish collapsing before scrolling: its height shifts the
  // layout, which would otherwise misplace (or cancel) a smooth scroll computed while it was open.
  const pendingId = useRef<string | null>(null);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (menuOpen) {
      pendingId.current = id;
      setMenuOpen(false);
    } else {
      scrollToSection(id);
    }
  };

  const onMenuClosed = () => {
    if (!pendingId.current) return;
    scrollToSection(pendingId.current);
    pendingId.current = null;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ivory transition-colors duration-300",
        scrolled ? "border-rule-soft" : "border-transparent",
      )}
    >
      <div className="gutter mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6">
        <a href="#top" onClick={go("top")} aria-label="Solvira home" className="text-teal no-underline">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-[clamp(18px,2.2vw,34px)] nav:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              className="whitespace-nowrap py-2 text-[15px] text-charcoal no-underline hover:text-clay-ink"
            >
              {l.label}
            </a>
          ))}
          <Button compact onClick={() => scrollToSection("care")} className="whitespace-nowrap">
            Explore Solvira Care
          </Button>
        </nav>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex min-h-11 items-center gap-2.5 rounded-full border border-teal bg-transparent px-4 text-sm font-medium text-teal nav:hidden"
        >
          <span className="flex flex-col gap-1">
            <span className="h-[1.5px] w-3.5 bg-teal" />
            <span className="h-[1.5px] w-3.5 bg-teal" />
          </span>
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence onExitComplete={onMenuClosed}>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="gutter overflow-hidden border-t border-rule-soft bg-ivory nav:hidden"
          >
            <div className="flex flex-col pb-7 pt-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  className="flex justify-between border-b border-rule-soft py-3 font-serif text-[28px] text-teal no-underline"
                >
                  <span>{l.label}</span>
                  <span className="self-center font-mono text-xs text-muted">{l.n}</span>
                </a>
              ))}
              <Button onClick={go("care")} className="mt-6 w-full">
                Explore Solvira Care
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
