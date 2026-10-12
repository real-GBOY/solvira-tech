export const PRINCIPLES = [
  { n: "I.", title: "The person first.", body: "We start from what patients and caregivers need to know, and when." },
  { n: "II.", title: "Information you can trust.", body: "Clear, reviewed guidance in Arabic and English." },
  { n: "III.", title: "Connected, not alone.", body: "A bridge to pharmacists and professionals when it matters." },
];

export const INSIGHT_ITEMS = [
  "Knowing what to do",
  "Helping a child feel supported",
  "Finding reliable information",
  "Navigating the recovery experience",
];

export interface ChatMessage {
  text: string;
  from: "care" | "user";
}
export interface CareScreen {
  sub: string;
  stamp: string;
  msgs: ChatMessage[];
  chips: string[];
}
export interface CareStep {
  title: string;
  body: string;
  screen: CareScreen;
}

const C = (text: string): ChatMessage => ({ text, from: "care" });
const U = (text: string): ChatMessage => ({ text, from: "user" });

export const CARE_STEPS: CareStep[] = [
  {
    title: "Discover",
    body: "Scan the QR code on a Solvira pack to open the experience in your browser, or optionally on WhatsApp.",
    screen: {
      sub: "Welcome",
      stamp: "TODAY · 18:05",
      msgs: [
        C("Welcome. You scanned the code on your Solvira pack."),
        C("This space offers general burn-care information. Which language would you prefer?"),
      ],
      chips: ["English", "العربية"],
    },
  },
  {
    title: "Understand",
    body: "Explore clear, clinician-reviewed educational resources in Arabic or English.",
    screen: {
      sub: "Resources",
      stamp: "TODAY · 18:07",
      msgs: [U("English"), C("Here are a few guides that may help. Each one is reviewed by a qualified professional.")],
      chips: [
        "First minutes: general first aid · 3 min",
        "Caring for a minor burn at home · 5 min",
        "When to contact a professional · 2 min",
      ],
    },
  },
  {
    title: "Stay Connected",
    body: "Choose optional check-ins and supportive content. Pause or stop at any time.",
    screen: {
      sub: "Check-ins",
      stamp: "TODAY · 18:12",
      msgs: [
        C("Would you like an optional check-in tomorrow evening?"),
        U("Yes, at 8 pm please"),
        C("Done. You can change or stop check-ins at any time."),
      ],
      chips: ["Change time", "Stop check-ins"],
    },
  },
  {
    title: "Find the Next Step",
    body: "Receive general guidance on when to contact a pharmacist or healthcare professional.",
    screen: {
      sub: "Next steps",
      stamp: "DAY 3 · 20:00",
      msgs: [
        C(
          "Some signs mean it's best to speak to a professional:\n• Pain or redness that is getting worse\n• A burn larger than the person's hand\n• Feeling unwell or feverish",
        ),
        C("This isn't a diagnosis. If you're unsure, ask a pharmacist or doctor. In an emergency, call 123."),
      ],
      chips: ["Find a pharmacist", "Read: when to seek care"],
    },
  },
];

export interface JourneyStage {
  key: string;
  name: string;
  theme: string;
  body: string;
  items: string[];
  placeholder: string;
  showCard?: boolean;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    key: "A",
    name: "The First Moments",
    theme: "Clarity",
    body: "In the first minutes after a burn, accessible first-aid information and clear emergency guidance can help people understand the appropriate next step.",
    items: [
      "Basic first-aid education",
      "Burn-prevention resources",
      "Recognizing warning signs",
      "Direction toward appropriate professional care",
    ],
    placeholder: "Instructional still life — kitchen sink, running water, folded clean towel. Daylight. No injury shown.",
  },
  {
    key: "B",
    name: "The Everyday Journey",
    theme: "Support",
    body: "In the days that follow, optional check-ins, educational content and practical routines could make everyday care feel more manageable for patients and caregivers.",
    items: [
      "Parent and caregiver resources",
      "Age-appropriate educational stories",
      "Optional symptom and well-being check-ins",
      "Bedtime comfort resources",
      "Pharmacist follow-up, where available",
    ],
    placeholder: "Parent and child reading on a sofa, late-afternoon light, relaxed and close.",
    showCard: true,
  },
  {
    key: "C",
    name: "Returning to Everyday Life",
    theme: "Confidence",
    body: "Going back to school, work and daily activities can bring its own questions. These resources focus on the person, not only the skin.",
    items: [
      "Scar-care education reviewed by qualified professionals",
      "Supportive communication guides",
      "Confidence-oriented resources",
      "Personal reflection and storytelling",
    ],
    placeholder: "Young adult stepping out of a front door with a bag, morning light, an ordinary street.",
  },
];

export const RESOURCE_FILTERS = ["All", "First aid", "Prevention", "Caregivers", "When to seek care"] as const;
export type ResourceFilter = (typeof RESOURCE_FILTERS)[number];

export interface Resource {
  cat: Exclude<ResourceFilter, "All">;
  type: string;
  title: string;
  time: string;
  dek: string;
}

export const RESOURCES: Resource[] = [
  { cat: "First aid", type: "Guide", title: "The first minutes after a minor burn: what general first-aid guidance says", time: "3 min read", dek: "A plain-language walkthrough of commonly recommended first steps, and the signs that mean it is time to get help." },
  { cat: "Prevention", type: "Article", title: "Kitchen safety with young children at home", time: "4 min read", dek: "Simple changes around the stove, kettle and table that families can make in an afternoon." },
  { cat: "Caregivers", type: "Article", title: "Talking to your child about their burn", time: "6 min read", dek: "Ways to explain what happened in words a child can understand, without adding worry." },
  { cat: "When to seek care", type: "Guide", title: "Signs it is time to contact a healthcare professional", time: "3 min read", dek: "What to look out for in the days after a burn, and who to contact." },
  { cat: "Prevention", type: "Download · PDF", title: "Hot drinks, bath water and other everyday risks: a home checklist", time: "2 pages", dek: "A printable room-by-room checklist for the home." },
  { cat: "First aid", type: "Article", title: "Common first-aid myths, and what to do instead", time: "4 min read", dek: "Butter, ice and toothpaste: why some familiar remedies are not recommended." },
  { cat: "Caregivers", type: "Guide", title: "Helping a child feel supported during recovery", time: "5 min read", dek: "Practical routines and small comforts for the weeks that follow." },
  { cat: "When to seek care", type: "Article", title: "Questions people often ask their pharmacist about minor burns", time: "4 min read", dek: "Answers to everyday questions, and when a pharmacist will suggest seeing a doctor." },
];

export const WARNING_SIGNS = [
  "Large or deep burns",
  "Burns on the face, hands, feet, genitals or a major joint",
  "Chemical or electrical burns",
  "Burns affecting a baby or young child",
  "Pain, redness or swelling that is getting worse",
  "Fever, or the area looks infected",
];

export const FAQS = [
  { q: "Is Solvira Care available now?", a: "Not yet. Solvira Care is a proposed patient-support service in development. This page describes the intended experience so we can share the idea and gather interest." },
  { q: "Can Solvira Care tell me how serious my burn is?", a: "No. It is designed to offer general education and help you recognize when to contact a professional. It would not assess, diagnose or recommend treatment for a burn." },
  { q: "Who reviews the educational content?", a: "All health and first-aid content is intended to be reviewed by qualified healthcare professionals before publication. Reviewer details would be listed alongside each resource." },
  { q: "What information would Solvira Care collect?", a: "Only what is needed for the features you choose to use. You would be told what is collected, why, and how to delete it. Optional sharing would always be off by default." },
  { q: "Will it be available in Arabic?", a: "Arabic and English are being planned from the start, including right-to-left layouts." },
  { q: "When should I seek urgent medical help?", a: "Seek medical help straight away for burns that are large or deep, on the face, hands, feet, genitals or a major joint, caused by chemicals or electricity, or affecting a baby or young child. If you are unsure, contact a pharmacist or doctor. In an emergency in Egypt, call 123." },
];

export const CONNECTED_NODES = [
  { title: "Pack & QR code", body: "Each Solvira pack could carry a code that opens Solvira Care.", tag: "PROPOSED" },
  { title: "Solvira Care", body: "Accessed in the browser or, if the patient prefers, through WhatsApp.", tag: "PROPOSED · OPTIONAL" },
  { title: "Educational resources", body: "Clinician-reviewed guides for patients and caregivers, in Arabic and English.", tag: "PLANNED" },
  { title: "Pharmacist follow-up", body: "Offered by participating pharmacies, where available.", tag: "WHERE AVAILABLE" },
  { title: "Professional care", body: "Clear guidance on when and where to seek medical assessment.", tag: "REFERRAL GUIDANCE" },
];

export const TRUST_POINTS = [
  { title: "Clinically Reviewed Information", body: "Health education and first-aid content should be reviewed by qualified professionals." },
  { title: "Privacy by Design", body: "Patients should understand what information is collected, why it is needed, and how they can control optional sharing." },
  { title: "Appropriate Professional Care", body: "Digital resources should help patients find appropriate care, not replace medical assessment." },
];
