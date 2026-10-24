import type { ReactNode } from "react";
import { ABOUT, CAREERS, CARE, CONTACT, HOME, LEARN, SERVICES, TEAM, type PageDef } from "@/config/pages";
import { CallToAction } from "@/features/landing/CallToAction";
import { Careers } from "@/features/landing/Careers";
import { Care } from "@/features/landing/Care";
import { Connected } from "@/features/landing/Connected";
import { Contact } from "@/features/landing/Contact";
import { Education } from "@/features/landing/Education";
import { Hero } from "@/features/landing/Hero";
import { HomeExplore, HomeProducts } from "@/features/landing/HomeExplore";
import { Insight } from "@/features/landing/Insight";
import { Journey } from "@/features/landing/Journey";
import { Services } from "@/features/landing/Services";
import { Story } from "@/features/landing/Story";
import { Team } from "@/features/landing/Team";
import { Trust } from "@/features/landing/Trust";
import { findLegalDoc } from "@/features/legal/content";
import { LegalPage } from "@/features/legal/LegalPage";
import { NotFound } from "@/features/legal/NotFound";
import { usePath } from "@/lib/navigation";
import { PageShell } from "./PageShell";

const ROUTES: { page: PageDef; content: ReactNode }[] = [
  {
    page: HOME,
    content: (
      <>
        <Hero />
        <HomeExplore />
        <HomeProducts />
        <CallToAction />
      </>
    ),
  },
  {
    page: ABOUT,
    content: (
      <>
        <Insight h1 />
        <Story />
        <Trust />
      </>
    ),
  },
  {
    page: SERVICES,
    content: (
      <>
        <Services h1 />
        <Connected />
      </>
    ),
  },
  {
    page: CARE,
    content: (
      <>
        <Care h1 />
        <Journey />
      </>
    ),
  },
  { page: LEARN, content: <Education h1 /> },
  { page: TEAM, content: <Team h1 /> },
  { page: CAREERS, content: <Careers h1 /> },
  {
    page: CONTACT,
    content: (
      <>
        <Contact h1 />
        <CallToAction />
      </>
    ),
  },
];

export function App() {
  const path = usePath();
  const route = ROUTES.find((r) => r.page.path === path);
  if (route) return <PageShell page={route.page}>{route.content}</PageShell>;
  const doc = findLegalDoc(path);
  return doc ? <LegalPage doc={doc} /> : <NotFound />;
}
