# Claude-Specific Context for Letras Nubladas

This file provides Claude AI with specific context and guidelines for working with this project.

## Project Identity

**Letras Nubladas** (Clouded Letters) is a personal Spanish-language literary blog featuring:
- Poetry (poemas)
- Short stories (cuentos)  
- Philosophical reflections (reflexiones)

The blog has 85+ posts spanning 2014-2024, showcasing creative writing with a warm, literary aesthetic.

## Tech Context for Claude

### Framework: Astro
- **Version**: 5.15+
- **Type**: Static Site Generator optimized for content
- **Key Feature**: Content Collections for type-safe markdown
- **Rendering**: Static HTML generation (no client-side JS needed)

### Content Collections Pattern
```typescript
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});
```

### Accessing Content
```astro
---
import { getCollection } from "astro:content";
const posts = await getCollection("blog");
---
```

## File Organization

```
src/
├── data/blog/           # Markdown content (85+ files)
│   └── YYYY-MM-DD-*.md # Date-prefixed markdown files
├── pages/
│   └── index.astro      # Homepage (lists all posts)
├── styles/
│   └── global.css       # CSS with layers and variables
└── content.config.ts    # Collection schema
```

## Content Guidelines

### Frontmatter Structure
Every blog post uses this frontmatter:

```yaml
---
title: "Post Title"                    # Required
author: "Mario"                        # Optional, usually Mario
excerpt: "Brief description"           # Optional but recommended
category: poema|cuento|reflexión       # Optional
image: filename.jpg                    # Optional, filename only!
---
```

**Critical**: Image field should contain ONLY the filename, not a path:
- ✅ Correct: `image: moon.jpg`
- ❌ Wrong: `image: /assets/post-images/moon.jpg`

### File Naming
Posts follow strict naming: `YYYY-MM-DD-title-slug.md`

Examples:
- `2018-09-05-pincelada.md`
- `2021-02-17-te-busco.md`
- `2022-05-25-frente-a-mi.md`

### Content Language
All content is in **Spanish**. When working with content:
- Preserve Spanish text and meaning
- Maintain poetic/literary style
- Respect accents and special characters (á, é, í, ó, ú, ñ, ¿, ¡)

## Styling Architecture

### CSS Variables Theme
```css
:root {
  --font-sans: "Lora Variable", sans-serif;
  --font-serif: "Playfair Display Variable", serif;
  --text-color: #4a2d00;      /* Warm brown */
  --bg-color: #fdf8f0;        /* Cream/parchment */
  --button-bg-color: #e5d7c2; /* Beige */
}
```

The design evokes:
- Old paper/parchment (warm cream background)
- Ink on paper (brown text)
- Literary/classic aesthetic (serif typography)
- Minimal, content-focused layout

### CSS Layers
Uses `@layer` directive for organization:
```css
@layer base { /* Typography, body styles */ }
@layer components { /* .container, reusable classes */ }
```

## Development Workflow

### Commands
```bash
pnpm install   # First time setup
pnpm dev       # Development (http://localhost:4321)
pnpm build     # Production build → ./dist/
pnpm preview   # Test production build
```

### Making Changes

**Adding a post**:
1. Create `src/data/blog/YYYY-MM-DD-title.md`
2. Add frontmatter (minimum: `title`)
3. Write markdown content

**Editing existing posts**:
- Preserve frontmatter structure
- Keep filename dates unchanged
- Maintain Spanish language and style

**Styling changes**:
- Modify CSS variables in `src/styles/global.css`
- Use existing layers (`@layer base` or `@layer components`)

## Common Operations

### Batch Frontmatter Updates
When updating multiple posts (e.g., fixing image paths):
1. Read the post file
2. Use `str_replace` with exact frontmatter matching
3. Preserve all other frontmatter fields
4. Process files in parallel when possible

### Content Analysis
When asked about content:
1. Use `getCollection("blog")` in Astro context
2. Parse frontmatter for metadata
3. Respect Spanish content
4. Consider literary/creative nature

### Build Verification
After changes:
```bash
pnpm build  # Verify no errors
```

Astro will catch:
- Invalid frontmatter (Zod validation)
- Missing imports
- TypeScript errors
- Build-time issues

## AI Agent Guidelines

### DO:
✅ Preserve Spanish language and meaning  
✅ Maintain literary style and voice  
✅ Use batch operations (parallel tool calls)  
✅ Verify builds after changes  
✅ Keep frontmatter consistent  
✅ Use image filenames without paths  
✅ Follow date-based naming convention  
✅ Respect the minimalist design  

### DON'T:
❌ Translate Spanish content to English  
❌ Change literary style or voice  
❌ Modify post dates in filenames  
❌ Add complex JavaScript (it's static content)  
❌ Break Zod schema validation  
❌ Include paths in image frontmatter  
❌ Over-engineer simple content changes  

## Project Philosophy

This is a **content-first** project:
- Technology serves the writing, not vice versa
- Design is minimal and literary
- Performance through static generation
- Type safety via Content Collections
- No client-side JavaScript needed

The goal is to present creative writing beautifully and simply.

## Troubleshooting

### Build Errors
```bash
pnpm build
```
- Check Zod schema validation in frontmatter
- Verify all imports exist
- Check TypeScript types

### Content Not Appearing
- Verify file is in `src/data/blog/`
- Check frontmatter has required `title` field
- Ensure YAML frontmatter syntax is valid

### Styling Issues
- Check CSS variable names match usage
- Verify CSS layer syntax
- Clear dev server cache (restart dev)

## Current Implementation Status

**Completed**:
- ✅ Content Collections setup
- ✅ 85+ blog posts migrated
- ✅ Global styling with variables
- ✅ Typography system (Playfair + Lora)
- ✅ Homepage with post listing
- ✅ Image path cleanup

**Needs Work**:
- Individual post pages/routes
- Categories/tags filtering
- Search functionality
- RSS feed
- SEO meta tags
- Images integration

## Quick Reference

| Task | Location | Tool |
|------|----------|------|
| Add post | `src/data/blog/` | Create markdown file |
| Edit styles | `src/styles/global.css` | Edit CSS variables |
| Schema | `src/content.config.ts` | Modify Zod schema |
| Homepage | `src/pages/index.astro` | Edit Astro component |
| Config | `astro.config.mjs` | Astro configuration |

---

**Remember**: This is a personal creative project. Treat the content with respect, maintain Spanish language integrity, and preserve the author's voice and style.
