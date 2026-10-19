# Solvira

Landing page for Solvira, a proposed human-centered burn-care and patient-support initiative.

**Live:** https://solvirapharma.com · **Repo:** https://github.com/real-GBOY/solvira-tech

## Stack

React 19 · Vite · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · Lenis (smooth scrolling)

## Develop

```bash
npm install
npm run dev        # http://localhost:4800
npm run typecheck
npm run build
```

## Structure

```
src/
  app/                 App shell (direction toggle, smooth scroll, motion config)
  components/          Shared UI: Button, Logo, SectionLabel, ImageSlot, Reveal
  features/landing/    One file per page section, plus content.ts (all copy and data)
  config/              Navigation links
  lib/                 Scroll helper, class-name helper
  styles/index.css     Design tokens (@theme) and base styles
```

Design tokens live once in `src/styles/index.css`. Photo slots render their art-direction brief until a
`src` is passed to `ImageSlot` (empty slots show a decorative brand panel; the brief stays in code only).
Legal pages (`/privacy`, `/terms`, `/medical-disclaimer`) live in `src/features/legal/content.ts`; unknown paths show a noindex 404.

## Deploy

Vercel builds from `main` with `vercel.json` (SPA rewrite, security headers, immutable asset caching).

### Interest form

`POST /api/interest` (`api/interest.ts`) emails each submission via Resend. Set `RESEND_API_KEY` (and optionally
`INTEREST_TO_EMAIL`, `INTEREST_FROM_EMAIL`; see `.env.example`) in Vercel. The sender domain must be verified in Resend.
Without the key the endpoint returns 503 and the form shows an email fallback.

### Share card and icons

`public/og-image.png` (1200x630) is the link-preview image; favicons and app icons are in `public/`. After changing
the card, refresh the cache in the Facebook Sharing Debugger and LinkedIn Post Inspector.
