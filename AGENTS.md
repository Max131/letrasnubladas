# Agent Instructions for Letras Nubladas

## Project Overview

**Letras Nubladas** is a personal literary blog built with Astro, featuring poems, short stories, and reflections. The site contains 85+ markdown-based posts dating from 2014 to present.

## Technology Stack

- **Framework**: Astro 5.15+ (Static Site Generator)
- **Language**: TypeScript
- **Content**: Markdown files with frontmatter (Astro Content Collections)
- **Styling**: CSS with custom variables, CSS layers
- **Fonts**: 
  - Playfair Display Variable (serif, headings)
  - Lora Variable (sans-serif, body)
- **Package Manager**: pnpm
- **Linting**: ESLint with Astro plugin
- **Formatting**: Prettier with Astro plugin

## Project Structure

```
/
├── public/               # Static assets (favicon.svg)
├── src/
│   ├── data/
│   │   └── blog/        # 85+ markdown posts (YYYY-MM-DD-title.md)
│   ├── pages/
│   │   └── index.astro  # Homepage
│   ├── styles/
│   │   └── global.css   # Global styles with CSS variables
│   └── content.config.ts # Content collection schema
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
└── pnpm-lock.yaml       # Lock file
```

## Content Management

### Blog Post Format

All posts are in `src/data/blog/` with naming convention: `YYYY-MM-DD-title.md`

**Frontmatter Schema** (defined in `src/content.config.ts`):

```yaml
---
title: string (required)        # Post title
author: string (optional)       # Array of author names
excerpt: string (optional)      # Brief description
category: string (optional)     # poema, cuento, reflexión, etc.
image: string (optional)        # Image filename (no path, just filename.jpg)
---
```

**Important**: Images should only contain the filename (e.g., `moon.jpg`), not paths like `/assets/post-images/moon.jpg`

### Content Categories

Common categories used:
- `poema` - Poetry
- `cuento` - Short story
- `micro cuento` - Micro story
- `carta` Letter
- `reflexión` - Reflection/essay

### Content Collection

Content is loaded via Astro's Content Collections using the glob loader:
- Loader pattern: `**/*.md` from `./src/data/blog`
- Access via: `getCollection("blog")`
- Schema validation: Zod schema in `content.config.ts`

## Styling System

### CSS Variables (in `src/styles/global.css`)

```css
:root {
  --font-sans: "Lora Variable", sans-serif;
  --font-serif: "Playfair Display Variable", serif;
  --text-color: #4a2d00;      /* Warm brown */
  --bg-color: #fdf8f0;        /* Warm off-white */
  --button-bg-color: #e5d7c2; /* Beige */
}
```

### Design System

- **Layout**: Container with max-width 60rem, centered
- **Typography**: 
  - Body: 1.125rem (18px) with 1.625 line-height
  - Headings: Playfair Display with font-weight 700
  - H1: 2.5rem
- **Colors**: Warm, literary theme (browns and creams)
- **Architecture**: CSS layers (`@layer base`, `@layer components`)

## Development Commands

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server (localhost:4321)
pnpm build     # Build for production (outputs to ./dist/)
pnpm preview   # Preview production build
```

## Key Configuration Files

### `astro.config.mjs`
Basic Astro configuration (currently minimal, using defaults)

### `content.config.ts`
Defines content collections schema with Zod validation

### `tsconfig.json`
TypeScript configuration for the project

## Common Tasks

### Adding a New Blog Post

1. Create file in `src/data/blog/` with format: `YYYY-MM-DD-title.md`
2. Add required frontmatter (at minimum `title`)
3. Write content in Markdown below frontmatter
4. Build or run dev server to see changes

### Modifying Styles

1. Edit CSS variables in `src/styles/global.css` for theme changes
2. Add component styles in `@layer components`
3. Add base styles in `@layer base`

### Content Operations

When working with blog posts:
- Always preserve frontmatter structure
- Use proper YAML syntax in frontmatter
- Image paths should be filename only (no directories)
- Dates in filenames should follow `YYYY-MM-DD` format
- Content can include standard Markdown (links, emphasis, lists, etc.)

## Best Practices

1. **Content**: Keep literary focus - poems, stories, reflections
2. **Frontmatter**: Always include `title`, `excerpt`, and `category`
3. **Naming**: Use descriptive, lowercase, hyphenated filenames
4. **Images**: Store image references as filenames only in frontmatter
5. **Commits**: Make atomic commits with clear messages
6. **Testing**: Run `pnpm build` to verify no build errors
7. **Styling**: Use CSS variables for consistency

## Current State

- **Posts**: 85+ literary pieces (2014-2024)
- **Status**: Active development
- **Homepage**: Lists all posts from collection
- **Features**: 
  - Content Collections with type safety
  - Variable fonts for better typography
  - Responsive design
  - Literary/warm color scheme

## Notes for AI Agents

- This is a personal literary blog with creative content
- Preserve the existing literary and aesthetic style
- Content is in Spanish
- When modifying posts, maintain original voice and meaning
- Dates in filenames are publication dates
- The author field is typically "Mario"
- Focus on content integrity over technical changes
- Respect the minimalist, literary design philosophy
