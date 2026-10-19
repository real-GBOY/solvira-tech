import { SITE } from "@/config/site";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  path: string;
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

const contactSection: LegalSection = {
  heading: "Contact",
  paragraphs: [`Questions about this page can be sent to ${SITE.email}.`],
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    path: "/privacy",
    title: "Privacy policy",
    description: "How Solvira collects, uses and protects personal information on solvirapharma.com.",
    intro:
      "This policy explains what personal information Solvira collects through this website, why, and the choices you have. We keep collection to the minimum needed to run the site and to send updates to people who ask for them.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          'Solvira ("we", "us") operates solvirapharma.com, a website describing a proposed human-centered burn-care and patient-support initiative. We are the controller of the personal information described below.',
        ],
      },
      {
        heading: "Information we collect",
        list: [
          "Your email address, only if you enter it in the “Register interest” form.",
          "Standard technical data (IP address, browser type, pages requested, date and time) that our hosting provider records in server logs when you visit.",
        ],
        paragraphs: [
          "We do not ask for health information, and we ask that you do not send any through this site. We do not use advertising trackers, and the site currently sets no analytics or advertising cookies.",
        ],
      },
      {
        heading: "How we use it",
        list: [
          "To send occasional updates about Solvira Care's development to people who registered their interest.",
          "To operate, secure and troubleshoot the website.",
          "To respond if you contact us.",
        ],
        paragraphs: ["We do not sell your information and we do not use it for automated decision-making."],
      },
      {
        heading: "Legal basis",
        paragraphs: [
          "We process your email address on the basis of your consent, which you give by submitting the form and can withdraw at any time. We process technical logs on the basis of our legitimate interest in keeping the site secure and working.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: ["We use a small number of service providers that process information on our behalf:"],
        list: [
          "Vercel Inc., which hosts the website and records server logs.",
          "An email delivery provider, which delivers form submissions to our team inbox.",
          "Google Fonts, which serves the typefaces used on the site; your browser requests them directly, so Google receives your IP address.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "These providers may process information outside Egypt, including in the United States and the European Union. Where required, we rely on appropriate safeguards such as contractual protections.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep your email address until you ask us to remove it or we stop sending updates about the initiative. Server logs are kept by our hosting provider for a short period under its own retention rules.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under Egypt's Personal Data Protection Law (Law No. 151 of 2020) and, where it applies to you, the GDPR, you may ask to access, correct, delete or restrict the use of your personal information, object to its use, or withdraw consent. To exercise a right or to unsubscribe, email us and we will respond promptly. You may also complain to your local data protection authority.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "This site is intended for adults, including parents and caregivers. It is not directed at children, and we do not knowingly collect their information.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "The site is served over HTTPS and we limit access to submitted information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: ["We may update this policy. The date at the top of this page shows when it last changed."],
      },
      contactSection,
    ],
  },
  {
    path: "/terms",
    title: "Terms of use",
    description: "The terms that apply when you use the Solvira website.",
    intro: "By using this website you agree to these terms. If you do not agree, please do not use the site.",
    sections: [
      {
        heading: "About this site",
        paragraphs: [
          "This website presents Solvira's approach to burn care, patient education and patient support. Solvira Care and the other features described here are proposed concepts. They are not yet available, and nothing on the site is an offer to supply a product or service.",
        ],
      },
      {
        heading: "Information only",
        paragraphs: [
          "Content is for general educational purposes. It is not medical advice, diagnosis or treatment. Please read our medical disclaimer.",
        ],
      },
      {
        heading: "Acceptable use",
        list: [
          "Do not attempt to disrupt, probe or gain unauthorised access to the site or its infrastructure.",
          "Do not use automated means to submit the interest form at volume.",
          "Do not submit anyone else's personal information without their permission.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The Solvira name, logo, text, design and other content on this site belong to Solvira or its licensors. You may view and share the site, but you may not copy, modify or reuse its content for commercial purposes without our written permission.",
        ],
      },
      {
        heading: "No warranties",
        paragraphs: [
          "The site is provided “as is” and “as available”. We aim to keep the information accurate and current but do not warrant that it is complete, error-free or uninterrupted.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, Solvira is not liable for any loss or damage arising from your use of, or reliance on, this site. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
      {
        heading: "Third-party links",
        paragraphs: [
          "Any links to other websites are provided for convenience. We do not control and are not responsible for their content.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by the laws of the Arab Republic of Egypt, and the Egyptian courts have jurisdiction over any dispute.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these terms from time to time. Continued use of the site after a change means you accept the updated terms.",
        ],
      },
      contactSection,
    ],
  },
  {
    path: "/medical-disclaimer",
    title: "Medical disclaimer",
    description: "Solvira's website is for general education and is not medical advice.",
    intro: "Please read this before relying on anything you see on this website.",
    sections: [
      {
        heading: "Not medical advice",
        paragraphs: [
          "Content on this site is for general educational purposes only. It is not a substitute for professional medical advice, diagnosis or treatment, and it does not create a doctor–patient or any other care relationship between you and Solvira.",
        ],
      },
      {
        heading: "If you are concerned about a burn",
        paragraphs: [
          "Speak to a pharmacist or doctor. Always seek the advice of a qualified health professional about a medical condition, and never delay or disregard professional advice because of something you read here.",
        ],
      },
      {
        heading: "In an emergency",
        paragraphs: [
          "Call 123 (Egypt ambulance service) or your local emergency number immediately. Do not use this website to seek emergency help.",
        ],
      },
      {
        heading: "Proposed concepts",
        paragraphs: [
          "Solvira Care and the features described on this site are proposed concepts and are not yet available. Descriptions of them may change and should not be relied on as a statement of what a future product will do.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "Medical knowledge and guidance change. We try to keep content accurate, but we make no guarantee that it is complete or current. Guidance for your situation may differ from general information.",
        ],
      },
      contactSection,
    ],
  },
];

export const findLegalDoc = (path: string) => LEGAL_DOCS.find((d) => d.path === path);
