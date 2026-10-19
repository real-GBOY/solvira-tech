import { useEffect } from "react";
import { Logo } from "@/components/Logo";
import { CURRENT_YEAR, SITE } from "@/config/site";
import { setPageMeta } from "@/lib/seo";
import { LEGAL_DOCS, type LegalDoc } from "./content";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  useEffect(() => {
    setPageMeta({ title: `${doc.title} — Solvira`, description: doc.description, path: doc.path, index: true });
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <header className="border-b border-rule">
        <div className="gutter mx-auto flex h-[72px] max-w-[1320px] items-center justify-between">
          <a href="/" aria-label="Solvira home" className="text-teal no-underline">
            <Logo />
          </a>
          <a href="/" className="text-[15px]">
            ← Back to site
          </a>
        </div>
      </header>

      <main className="gutter mx-auto max-w-[800px] py-[clamp(56px,8vw,112px)]">
        <h1 className="h-display text-[clamp(40px,5.4vw,72px)] leading-[1.02]">{doc.title}</h1>
        <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted">
          LAST UPDATED {SITE.legalUpdated.toUpperCase()}
        </p>
        <p className="mt-8 text-lg leading-[1.65] text-body">{doc.intro}</p>

        {doc.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-serif text-[28px] font-normal leading-tight text-teal">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 text-[17px] leading-[1.7] text-body">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 list-disc space-y-2 ps-6 text-[17px] leading-[1.7] text-body marker:text-clay">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>

      <footer className="border-t border-rule">
        <div className="gutter mx-auto flex max-w-[1320px] flex-wrap justify-between gap-4 py-8 text-[13px] text-muted">
          <span>© {CURRENT_YEAR} Solvira. All rights reserved.</span>
          <nav aria-label="Legal" className="flex flex-wrap gap-6">
            {LEGAL_DOCS.map((d) => (
              <a key={d.path} href={d.path}>
                {d.title}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
