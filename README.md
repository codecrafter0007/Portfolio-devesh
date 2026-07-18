# Devesh Mungali — Portfolio

A Next.js + Tailwind portfolio site built from your resume and portfolio PDF, with an added section for Framer/headless work and AI-assisted tooling.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

To build a production bundle and test it locally:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx      → fonts + page metadata
    page.tsx         → assembles all sections
    globals.css      → color tokens, fonts, animations
  components/
    Navbar.tsx
    Hero.tsx
    LiquidBackground.tsx
    Marquee.tsx
    About.tsx
    Experience.tsx
    Skills.tsx
    Projects.tsx     → tabbed: Shopify stores / apps / Framer & headless / AI tooling / WooCommerce
    Contact.tsx
  lib/
    data.ts          → ALL editable content lives here (experience, skills, project links, etc.)
public/
  Devesh-Mungali-Resume.pdf  → linked from the "Résumé" button in the nav
```

**To edit any content** (add a project, change job bullet points, update stats), edit `src/lib/data.ts` — the components just render whatever is in there.

## Things to double check before you publish

- **`src/lib/data.ts` → `framerHeadless` and `aiTools`**: filled in based on your Nashi Foods Framer component work and the ItzNot schema-markup/content tooling. Since your resume and portfolio PDF didn't have specifics for these two areas, swap in the real project names, links, and any metrics you want to highlight.
- Swap `public/Devesh-Mungali-Resume.pdf` for an updated resume whenever it changes — the filename can stay the same so the nav link keeps working.
- The store links in `data.ts` (`shopifyStores`, `newShopifyStores`, `wooStores`) link out to `https://<domain>` directly — confirm none of those client relationships have changed since the portfolio PDF was written.

## Deploying to Vercel (when you're ready)

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. Click **Deploy** — done. Vercel will give you a live URL, and you can attach a custom domain afterward from the project's Domains settings.

Alternatively, from the CLI:

```bash
npm install -g vercel
vercel
```
