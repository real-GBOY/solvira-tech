import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { Care } from "@/features/landing/Care";
import { CallToAction } from "@/features/landing/CallToAction";
import { Connected } from "@/features/landing/Connected";
import { Education } from "@/features/landing/Education";
import { Footer, type Direction } from "@/features/landing/Footer";
import { Header } from "@/features/landing/Header";
import { Hero } from "@/features/landing/Hero";
import { Insight } from "@/features/landing/Insight";
import { Journey } from "@/features/landing/Journey";
import { Trust } from "@/features/landing/Trust";
import { startSmoothScroll } from "@/lib/scroll";

export function App() {
  const [dir, setDir] = useState<Direction>("ltr");

  useEffect(() => startSmoothScroll(), []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === "rtl" ? "ar" : "en";
  }, [dir]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-ivory text-charcoal">
        <Header />
        <main id="top">
          <Hero />
          <Insight />
          <Care />
          <Journey />
          <Education />
          <Connected />
          <Trust />
          <CallToAction />
        </main>
        <Footer dir={dir} onToggleDir={() => setDir((d) => (d === "ltr" ? "rtl" : "ltr"))} />
      </div>
    </MotionConfig>
  );
}
