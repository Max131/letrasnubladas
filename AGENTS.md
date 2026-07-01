# AGENTS.md

Personal Spanish-language literary blog (poetry, short stories, reflections) built with Astro. Content is the priority — technology serves the writing.

## Commands

```sh
pnpm dev       # HTTPS dev server at https://localhost:4321 (basic SSL plugin)
pnpm build     # Production build → dist/
pnpm preview   # Preview production build
pnpm astro     # Astro CLI passthrough
```

No test, lint, or format scripts in package.json. Build is the only verification step.

## Content architecture

**Location:** `src/data/blog/` — 90 markdown posts (2014–2025).

**Filename:** `YYYY-MM-DD-title-slug.md`

**Frontmatter schema** (`src/content.config.ts`):

| Field      | Type   | Required | Notes                    |
|------------|--------|----------|--------------------------|
| `title`    | string | yes      |                          |
| `author`   | string | no       | Typically "Mario"        |
| `excerpt`  | string | no       |                          |
| `category` | string | no       | poema, cuento, reflexión |
| `image`    | string | no       | Filename only (e.g. `luna.jpg`) |

Images are stored in `src/assets/images/` and loaded via `import.meta.glob` in `PostImage.astro` — requires filename match.

**Slug:** Extracted from filename via `/[a-zA-Z].+/` (everything after the date prefix).

**Date:** Extracted from filename via `/\d{4}-\d{2}-\d{2}/`.

**Category CSS class:** `normalizeString()` strips accents/diacritics (e.g. `reflexión` → `reflexion`).

## Routes

| Path           | File                    | Purpose                    |
|----------------|-------------------------|----------------------------|
| `/(:page)?`   | `[...page].astro`       | Paginated post list (6/page) |
| `/:slug`      | `[...slug].astro`       | Individual post            |
| `/about`      | `about.astro`           | About page                 |
| `/book`       | `book.astro`            | Book promo page            |
| `/rss.xml`    | `rss.xml.js`            | RSS feed (`@astrojs/rss`)  |
| `/404`        | `404.astro`             | Not found                  |

Sitemap auto-generated via `@astrojs/sitemap` at `/sitemap-index.xml`.

## Key conventions

- **TypeScript:** Strict mode with `strictNullChecks: false`. Path aliases: `@components/*`, `@layouts/*`, `@pages/*`, `@styles/*`, `@utils/*`, `@assets/*`.
- **Fonts:** Playfair Display Variable (headings, serif), Lora Variable (body, sans-serif). Imported via `@fontsource-variable/` packages.
- **Icons:** `@lucide/astro`
- **Styling:** `@layer base` / `@layer components` in `global.css`. Container width: 80ch. Warm brown-on-cream theme via CSS custom properties.
- **View transitions:** Astro `ClientRouter` with loading spinner on navigation.
- **License inconsistency:** Footer says CC BY-NC-ND 4.0; meta tags say CC BY-NC-SA 4.0.

## Content operations

- Preserve frontmatter structure and YAML syntax.
- `author` is a **singular string**, not an array (despite what README shows).
- All content is in Spanish — preserve accents and special characters.
- Filename dates are publication dates; never change them.
- Image paths in frontmatter are filename only (no directories).
- After changes: `pnpm build` to verify (catches Zod validation, TS errors, missing imports).
