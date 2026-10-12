export interface NavLink {
  label: string;
  id: string;
  n: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about", n: "01" },
  { label: "Burn Care & Education", id: "education", n: "02" },
  { label: "Solvira Care", id: "care", n: "03" },
  { label: "Our Approach", id: "approach", n: "04" },
  { label: "Contact", id: "contact", n: "05" },
];
