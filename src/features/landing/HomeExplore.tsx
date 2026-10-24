import { Arrow } from "@/components/Arrow";
import { ImageSlot } from "@/components/ImageSlot";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ABOUT, CARE, LEARN, SERVICES as SERVICES_PAGE } from "@/config/pages";
import { Link } from "@/lib/router";
import { AppMockup } from "./AppMockup";
import { PHARMA } from "./content";

const TILES = [
  { page: ABOUT, line: "How we began, and what we believe.", image: "/products/duo.jpg", placeholder: "Founders together, warm light." },
  { page: SERVICES_PAGE, line: "Medicines, an app and care devices.", image: PHARMA.image, placeholder: "Product range on a clean surface." },
  { page: CARE, line: "Support on your phone, step by step.", mockup: true, placeholder: "Solvira Care app on a phone." },
  { page: LEARN, line: "Clear guides for patients and families.", image: "/products/spray-patch.jpg", placeholder: "Calm everyday home detail." },
];

export function HomeExplore() {
  return (
    <section aria-labelledby="explore-title" className="bg-cream">
      <div className="gutter section-y mx-auto max-w-[1320px]">
        <SectionLabel className="mb-7">EXPLORE SOLVIRA</SectionLabel>
        <Reveal>
          <h2 id="explore-title" className="h-display max-w-[12em] text-[clamp(40px,4.8vw,68px)] leading-none">
            Where would you like to <em className="italic text-clay-ink">start?</em>
          </h2>
        </Reveal>

        <ul className="mt-[clamp(40px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(16px,2vw,28px)]">
          {TILES.map((t, i) => (
            <li key={t.page.path}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link to={t.page.path} className="group flex h-full flex-col gap-4 text-charcoal no-underline">
                  <div className="placeholder-stripes relative aspect-[4/3] overflow-hidden rounded-card">
                    {t.mockup ? (
                      <AppMockup />
                    ) : (
                      <ImageSlot src={t.image} alt={t.image ? t.page.label : ""} placeholder={t.placeholder} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-[clamp(26px,2.4vw,32px)] font-light leading-[1.1] text-teal group-hover:text-clay-ink">
                      {t.page.label}
                    </span>
                    <Arrow className="text-teal transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  <p className="max-w-[20em] text-[15px] leading-[1.55] text-body">{t.line}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeProducts() {
  return (
    <section aria-labelledby="products-title" className="gutter section-y mx-auto max-w-[1320px]">
      <Reveal className="flex flex-wrap items-center gap-[clamp(32px,5vw,72px)]">
        <div className="placeholder-stripes relative aspect-[3/2] min-w-0 basis-[360px] flex-[1.6] overflow-hidden rounded-card">
          <ImageSlot src={PHARMA.image} alt={PHARMA.alt} placeholder={PHARMA.placeholder} />
        </div>
        <div className="flex min-w-0 basis-[260px] flex-1 flex-col gap-5">
          <span className="font-mono text-[11px] tracking-[0.12em] text-clay-ink">OUR FIRST PRODUCTS</span>
          <h2 id="products-title" className="h-display text-[clamp(36px,4vw,56px)] leading-[1.04]">
            Burn care, <em className="italic text-clay-ink">made simple.</em>
          </h2>
          <ul className="border-t border-rule">
            {PHARMA.items?.map((t) => (
              <li key={t} className="border-b border-rule py-3 font-serif text-xl text-teal">
                {t}
              </li>
            ))}
          </ul>
          <Link to={SERVICES_PAGE.path} className="text-[15px] font-medium text-teal no-underline hover:text-clay-ink">
            See our services <Arrow className="ms-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
