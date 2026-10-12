# Solvira

Landing page for Solvira, a proposed human-centered burn-care and patient-support initiative.

**Live:** https://solvira-tech.vercel.app

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
`src` is passed to `ImageSlot`. The interest form validates the address but does not send it anywhere yet.

## Deploy

Vercel builds from `main` with `vercel.json` (SPA rewrite, security headers, immutable asset caching).
