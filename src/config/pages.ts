export interface PageDef {
  path: string;
  /** Short label used in the header and footer navigation. */
  label: string;
  title: string;
  description: string;
}

export const HOME: PageDef = {
  path: "/",
  label: "Home",
  title: "Solvira — Care that goes beyond the burn",
  description:
    "Solvira is building burn-care products and support for patients and caregivers, from the first moments to everyday life.",
};

export const ABOUT: PageDef = {
  path: "/about",
  label: "About",
  title: "About — Solvira",
  description: "How Solvira began, what we believe, and how we think about responsible burn care.",
};

export const SERVICES: PageDef = {
  path: "/services",
  label: "Services",
  title: "Services — Solvira",
  description: "Solvira Pharma burn-care products, the Solvira Care app and care devices, with the patient from start to finish.",
};

export const CARE: PageDef = {
  path: "/solvira-care",
  label: "Solvira Care",
  title: "Solvira Care — Solvira",
  description: "Solvira Care is a patient-support app in development: clear guidance, one step at a time.",
};

export const LEARN: PageDef = {
  path: "/learn",
  label: "Learn",
  title: "Burn care education — Solvira",
  description: "Plain-language guides on burn first aid, prevention and when to seek care, in Arabic and English.",
};

export const TEAM: PageDef = {
  path: "/team",
  label: "Team",
  title: "Team — Solvira",
  description: "Meet the founders and the team building Solvira.",
};

export const CAREERS: PageDef = {
  path: "/careers",
  label: "Careers",
  title: "Careers — Solvira",
  description: "See what each Solvira team is working on and apply when a role opens.",
};

export const CONTACT: PageDef = {
  path: "/contact",
  label: "Contact",
  title: "Contact — Solvira",
  description: "Get in touch with Solvira, or register your interest in Solvira Care.",
};

export const PAGES: PageDef[] = [HOME, ABOUT, SERVICES, CARE, LEARN, TEAM, CAREERS, CONTACT];

/** Header navigation. Contact is shown separately as a button. */
export const NAV_PAGES: PageDef[] = [ABOUT, SERVICES, CARE, LEARN, TEAM, CAREERS];
