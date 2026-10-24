/** Company-story, team, careers and contact content. Entries marked as placeholders are waiting on real details. */

export interface Milestone {
  when: string;
  title: string;
  body: string;
}

export const MILESTONES: Milestone[] = [
  { when: "DATE TBC", title: "The idea", body: "Where Solvira started, and the problem we saw." },
  { when: "DATE TBC", title: "The team forms", body: "The founders come together." },
  { when: "DATE TBC", title: "First products", body: "Ointment, spray and patch take shape." },
  { when: "DATE TBC", title: "Solvira Care", body: "The patient app moves into development." },
  { when: "NEXT", title: "What's next", body: "Our next milestone." },
];

export interface Person {
  name: string;
  role: string;
  bio: string;
  /** Path under /public, e.g. "/team/name.jpg". */
  photo?: string;
}

export const TEAM_SIZE = "00";
export const TEAM_AREAS = ["R&D", "Product & Engineering", "Medical & Regulatory", "Operations"];

const FOUNDER: Person = {
  name: "Founder name",
  role: "Co-founder & role",
  bio: "A short line about their background and what they lead at Solvira.",
};
export const FOUNDERS: Person[] = [FOUNDER, FOUNDER, FOUNDER];

export interface CareersTeam {
  name: string;
  lead: string;
  focus: string;
  update: string;
  roles: string[];
}

const TEAM_PLACEHOLDER = {
  lead: "Team lead name",
  focus: "What the team is working on right now.",
  update: "Latest update from the team.",
  roles: [] as string[],
};

export const CAREERS_TEAMS: CareersTeam[] = [
  { name: "R&D", ...TEAM_PLACEHOLDER },
  { name: "Product & Engineering", ...TEAM_PLACEHOLDER },
  { name: "Medical & Regulatory", ...TEAM_PLACEHOLDER },
];

export interface ContactItem {
  label: string;
  value: string;
  /** Omitted until the real detail exists; the card then renders as "coming soon". */
  href?: string;
}

export const SOCIALS: ContactItem[] = [
  { label: "LinkedIn", value: "Solvira Pharma" },
  { label: "Instagram", value: "@solvira" },
  { label: "Facebook", value: "Solvira Pharma" },
];
