import { useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Footer, type Direction } from "@/features/landing/Footer";
import { Header } from "@/features/landing/Header";
import type { PageDef } from "@/config/pages";
import { usePath } from "@/lib/navigation";
import { scrollToTop, startSmoothScroll } from "@/lib/scroll";
import { setPageMeta } from "@/lib/seo";

/** Header, footer, per-page meta and scroll reset shared by every content page. */
export function PageShell({ page, children }: { page: PageDef; children: ReactNode }) {
  const path = usePath();
  const [dir, setDir] = useState<Direction>("ltr");

  useEffect(() => startSmoothScroll(), []);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  useEffect(() => {
    setPageMeta({ title: page.title, description: page.description, path: page.path, index: true });
    scrollToTop();
  }, [page, path]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-ivory text-charcoal">
        <a
          href="#main"
          className="absolute start-4 top-2 z-[60] -translate-y-24 rounded-full bg-teal px-4 py-2 text-sm text-ivory focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer dir={dir} onToggleDir={() => setDir((d) => (d === "ltr" ? "rtl" : "ltr"))} />
      </div>
    </MotionConfig>
  );
}
