import Lenis from "lenis";

const HEADER_HEIGHT = 72;

let lenis: Lenis | null = null;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Start inertia scrolling for wheel/trackpad input. Skipped for reduced-motion users, and touch keeps the
 * browser's native momentum (Lenis only smooths wheel input by default). Returns a cleanup function.
 */
export function startSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => {};
  lenis = new Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1 });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

/** Jump to the top instantly, for page changes. */
export function scrollToTop(): void {
  lenis?.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

/** Scroll to a section id, offset for the sticky header; eased via Lenis, native smooth, or instant per motion preference. */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  if (id === "top") {
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    return;
  }
  if (lenis) {
    lenis.scrollTo(el, { offset: -HEADER_HEIGHT, duration: 1.2 });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}
