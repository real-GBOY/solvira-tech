import { useEffect } from "react";
import { Logo } from "@/components/Logo";
import { setPageMeta } from "@/lib/seo";

export function NotFound() {
  useEffect(() => {
    setPageMeta({
      title: "Page not found — Solvira",
      description: "The page you were looking for could not be found.",
      path: window.location.pathname,
      index: false,
    });
  }, []);

  return (
    <main className="gutter grid min-h-screen place-items-center bg-ivory text-center text-charcoal">
      <div className="flex flex-col items-center gap-6">
        <a href="/" aria-label="Solvira home" className="text-teal no-underline">
          <Logo />
        </a>
        <h1 className="h-display text-[clamp(40px,6vw,72px)] leading-none">Page not found</h1>
        <p className="max-w-[28em] text-lg leading-[1.6] text-body">
          The page you were looking for doesn't exist or has moved.
        </p>
        <a href="/" className="text-[17px]">
          Return to the Solvira home page
        </a>
      </div>
    </main>
  );
}
