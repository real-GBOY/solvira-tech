import { Arrow } from "@/components/Arrow";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { CONTACT, NAV_PAGES } from "@/config/pages";
import { cn } from "@/lib/cn";
import { usePath } from "@/lib/navigation";
import { Link } from "@/lib/router";

export function Header() {
  const path = usePath();
  const [scrolled, setScrolled] = useState(false);
  // The menu is open only for the page it was opened on, so any page change closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const menuOpen = openOn === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ivory transition-colors duration-300",
        scrolled ? "border-rule-soft" : "border-transparent",
      )}
    >
      <div className="gutter mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6">
        <Link to="/" aria-label="Solvira home" className="text-teal no-underline">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[clamp(18px,2.2vw,34px)] nav:flex">
          {NAV_PAGES.map((p) => {
            const active = path === p.path;
            return (
              <Link
                key={p.path}
                to={p.path}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap border-b-2 py-2 text-[15px] no-underline hover:text-clay-ink",
                  active ? "border-clay text-teal" : "border-transparent text-charcoal",
                )}
              >
                {p.label}
              </Link>
            );
          })}
          <ButtonLink to={CONTACT.path} compact className="whitespace-nowrap">
            {CONTACT.label}
          </ButtonLink>
        </nav>

        <button
          onClick={() => setOpenOn(menuOpen ? null : path)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex min-h-11 items-center gap-2.5 rounded-full border border-teal bg-transparent px-4 text-sm font-medium text-teal nav:hidden"
        >
          {menuOpen ? <X aria-hidden="true" size={16} /> : <Menu aria-hidden="true" size={16} />}
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <AnimatePresence>
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
              {NAV_PAGES.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  aria-current={path === p.path ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between border-b border-rule-soft py-3 font-serif text-[28px] no-underline",
                    path === p.path ? "text-clay-ink" : "text-teal",
                  )}
                >
                  <span>{p.label}</span>
                  <Arrow className="text-muted" />
                </Link>
              ))}
              <ButtonLink to={CONTACT.path} className="mt-6 w-full">
                {CONTACT.label}
              </ButtonLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
