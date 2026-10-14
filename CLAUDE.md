# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Golden rule

**Do not run ANY git command (commit, add, push, status, diff, log, checkout, etc.) or `gh` command without the user's explicit permission or a direct request.** This also applies to sub-agents: tell them not to use git.

comentarios de maximo 1 linea
jamas subas nada que diga ia, agente, claude, codex, nada que hable de ia, esto es cuanto a lo hecho por ti, si ya lo que habla de ia es el contenido de la pagina te lo acepto, pero tu, no te pongas en comentarios, ni como ayudante, nada. cero  hablar de ia a menos que yo lo especifique

## Commands

- `npm start`: dev server on **http://localhost:4201**. The script sets the port, so it is not Angular's default 4200.
- `npm run build`: production build to `dist/portafolio`. It enforces budgets: initial bundle 500kB warning / 1MB error, and per-component styles 4kB warning / 8kB error.
- `npm run watch`: development build in watch mode.
- `npm test`: runs the Karma + Jasmine tests in Chrome.
- Run one spec file: `npx ng test --include src/app/app.component.spec.ts`. Add `--watch=false` for a single CI-style run.

No linter is configured: there is no ESLint and no `ng lint` target.

## Architecture

Angular 19 single-page portfolio (standalone components, signals, OnPush, strict TypeScript, and `strictTemplates`). The site is bilingual: Spanish (default) and English.

- **Routing is minimal on purpose.** `app.routes.ts` has one route (`''`) that renders `PortfolioPageComponent`. Section navigation uses anchors with language-neutral ids (`#profile`, `#experience`, `#project`, `#stack`, `#education`, `#contact`; the hero is `#top`).
- **Language.** `core/i18n/language.service.ts` holds a `lang` signal (`'es' | 'en'`), picks the initial value from `localStorage` (`portfolio.lang`) or `navigator.language`, and keeps `<html lang>` and the stored value in sync. `PortfolioPageComponent` updates `<title>` and the meta description when the language changes.
- **Content is separate from presentation.** All copy lives in `features/portfolio/models/portfolio-content.ts` as `PORTFOLIO_CONTENT: Record<Lang, PortfolioContent>`, typed by `portfolio-content.model.ts`. Components call `injectPortfolioContent()` (`features/portfolio/portfolio-content.ts`) and expose slices with `computed()`. To change copy, edit both languages in the content file, not the templates. To add a field, update the interface and both language objects.
- **Sections** (`features/portfolio/components/`), composed by `portfolio-page.component` in this order: navbar → hero (with `system-diagram`) → profile → experience → project → stack → education → contact → footer.
- **`system-diagram`** is the hero's hand-built SVG of a request flow (Angular → Spring Boot → RabbitMQ → consumer → PostgreSQL, plus Redis and a Docker boundary). Coordinates for the wide (≥40rem) and narrow layouts are in `system-diagram.layouts.ts`; each node's text comes from `diagram.nodes` in the content. The blue flow line animates once on load and is static under `prefers-reduced-motion`.
- **Styling: Tailwind v4 via PostCSS** (`.postcssrc.json`, `@import "tailwindcss"` in `src/styles.css`). Design tokens are CSS variables on `:root` (paper, ink, graphite, stroke, signal), redefined under `prefers-color-scheme: dark`, and exposed to Tailwind through `@theme inline` (`bg-paper`, `text-ink`, `text-graphite`, `border-stroke`, `text-signal`…). The only typeface is Archivo (Google Fonts, width and weight axes); `.type-display`, `.type-heading` and `.type-condensed` in `styles.css` set its widths. Use tokens, not raw hex values, in templates.
- **Icons** are inline SVGs in `shared/ui/icon/icon.component.ts` (`<app-icon name="download" />`). Add new icons to its `ICONS` map.
- **Static assets** are served from `public/`, which maps to the site root: `assets/CV_Gustavo_Gutierrez_2026.pdf`, `assets/gustavo.webp|jpg` (profile photo), `og-image.jpg` (share preview) and the favicons. Autogestion screenshots go in `public/assets/projects/` and are registered in `PROJECT_IMAGES` in the content file; the gallery only renders when that list has images.
- The canonical URL is `https://portafolio-gustavo-gutierrez.vercel.app/` (set in `src/index.html` with the Open Graph tags).

## Reference material

- `PLAN_IMPLEMENTACION.md`: the original implementation plan (single-page scrolling site, content separated from UI, no backend/CMS).
- `desig/`: the original mockups (`screen.png`, `image.png`), the source photo (`foto.jpeg`) and the CV text (`cv.md`) used for the portfolio content.
- `.agents/skills/` contains locally installed `angular-developer` and `frontend-design` skills (see `skills-lock.json`). The Angular skill's `references/` folder has guidance for Angular APIs.
