# Pendientes y mejoras futuras

> Generado el 2026-07-22 tras análisis del proyecto.

## 1. Licencia inconsistente

El footer dice **CC BY-NC-ND 4.0**, pero los meta tags en `src/layouts/Default.astro` apuntan a **CC BY-NC-SA 4.0**. Decidir cuál es la correcta y unificar.

**Archivos:**
- `src/layouts/Default.astro` (meta tag)
- `src/components/Footer.astro` (texto)
- `src/pages/about.astro` (menciona la licencia)

---

## 2. Scripts de verificación ausentes

ESLint, Stylelint y Prettier están configurados pero no hay scripts en `package.json` para ejecutarlos. Tampoco hay `typecheck` a pesar de tener TypeScript.

Añadir a `package.json`:
```json
"scripts": {
  "lint": "eslint .",
  "lint:css": "stylelint 'src/**/*.css'",
  "format": "prettier --check .",
  "typecheck": "astro check"
}
```

---

## 3. strictNullChecks desactivado

`tsconfig.json` tiene `strict: true` pero `strictNullChecks: false`. Esto permite errores silenciosos de null/undefined. Migrar progresivamente.

---

## 4. Estilos inline en páginas

`src/pages/[...page].astro` y `src/pages/[...slug].astro` tienen bloques `<style>` con estilos que duplican lógica y dificultan el mantenimiento. Mover a `global.css` o a componentes dedicados.

---

## 5. Import no utilizado en content.config.ts

`file` se importa de `astro/loaders` pero no se usa. Solo se necesita `glob`.

```diff
- import { glob, file } from "astro/loaders";
+ import { glob } from "astro/loaders";
```

---

## 6. typecheck en rss.xml.js

El feed RSS itera sobre `collection.data` sin tipado estricto. Considerar tipar con la colección de Content Collections.

---

## 7. Build check en CI

No hay integración continua. Considerar añadir un workflow de GitHub Actions que ejecute `pnpm build` en cada push/PR.

---

## 8. (Opcional) PWA / offline support

Como sitio 100% estático, sería trivial añadir un Service Worker con Workbox para permitir navegación offline.

---

> Añadido el 2026-08-21 tras segundo análisis del proyecto.

## 9. Bug en `twitter:domain`

`src/layouts/Default.astro:52` pasa `content={Astro.site}` (URL completa) cuando la propiedad espera solo el dominio (`letrasnubladas.com`).

---

## 10. `og:type` fijo a "website"

`src/layouts/Default.astro:48` siempre emite `og:type="website"`. En posts individuales debería ser `article`, con `article:published_time` (extraíble del filename) y `article:author`.

---

## 11. Sin JSON-LD (datos estructurados)

No hay ningún schema.org en el sitio. Añadir `BlogPosting` por post (título, autor, fecha, imagen) y `WebSite`/`Person` global en `src/layouts/Default.astro` mejoraría los rich results.

---

## 12. `og:image` genérica para todos los posts

Todos comparten `/og.jpg`. Usar la imagen del frontmatter cuando exista y añadir `og:image:width/height/alt`.

---

## 13. Meta description vacía por defecto

Si no se pasa `description` se emite `<meta name="description" content="">` (`Default.astro:16,26`). La 404 (`src/pages/404.astro`) no pasa descripción. Definir fallback con la descripción del sitio o `noindex` en 404.

---

## 14. Datos de categoría sucios

- `src/data/blog/2017-05-19-antes-de.md`: `category: poema ` (con espacio final).
- Existe la categoría `micro cuento` (1 post) que podría unificarse con `cuento`.

Endurecer el schema en `src/content.config.ts` con `z.enum([...]).transform(s => s.trim())`.

---

## 15. README desactualizado sobre frontmatter

`README.md` documenta `authors` como array; el schema real es `author` string singular (igual que AGENTS.md ya aclara).

---

## 16. Falta skip-link

Añadir "Saltar al contenido" en `src/layouts/Default.astro` — patrón WCAG básico; hoy hay que tabular por todo el header antes del contenido.

---

## 17. `transition:name` con títulos arbitrarios

En `src/pages/[...page].astro:57` y `[...slug].astro:28` se usan títulos con espacios/signos (`¿Quién soy?`) que no son identificadores CSS válidos; Astro emite warnings y las view transitions pueden fallar. Normalizar con `normalizeString()` (ya existe en `src/utils/index.ts`).

---

## 18. Accesibilidad en navegación y paginación

- `<nav>` sin `aria-label` (`Header.astro`, paginación de `[...page].astro`). El `id="mobile-menu"` del header es engañoso (no existe menú móvil).
- Iconos de paginación con semántica invertida: `ChevronFirst` apunta a la última página y `ChevronLast` a la primera.
- `:focus-visible` solo cubre enlaces (`global.css:57-61`); añadir para botones.

---

## 19. No hay dark mode

Solo tema claro hardcodeado en `src/styles/global.css`. Un bloque `@media (prefers-color-scheme: dark)` con variables alternativas es barato y útil para lectura nocturna.

---

## 20. Categorías no navegables

Existe el campo `category` pero sin rutas `/categoria/[cat]` ni filtros visibles. Es la mejora de descubrimiento más obvia para un blog literario.

---

## 21. Sin archivo por fechas ni búsqueda

90 posts (2014–2025) navegables solo por 15 páginas de 6. Considerar página `/archivo` agrupada por año y/o búsqueda cliente ligera (p. ej. pagefind).

---

## 22. UX menor en post individual

- Botón "Regresar" usa `history.back()` (`[...slug].astro:170-172`): sin efecto si el post se abre directo desde RSS/búsqueda. Fallback a `/`.
- Fallback de compartir usa `alert()` (`[...slug].astro:188`): sustituir por feedback inline o toast.
- Paginación sin números intermedios ("X de Y" con 15 páginas).

---

## 23. Imágenes sin srcset real

`src/components/PostImage.astro` tiene `sizes` pero sin imágenes responsivas de Astro 5 (`layout="constrained"`) genera una sola URL y `sizes` no tiene efecto. Además el aspect ratio default 400×200 (2:1) no coincide con las fotos reales.

---

## 24. Fuentes: importar subset latin-only

Las fuentes fontsource cargan todos los subsets/pesos variables (`Default.astro:6-7`). Importar solo latin reduce bytes iniciales y CLS.

---

## 25. Infraestructura menor

- Sin security headers (`_headers` o config del hosting): CSP básica, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`.
- Favicon SVG sin apple-touch-icon ni ICO (Safari/iOS lo ignoran).
- RSS mejorable: `pubDate` como string (mejor `new Date(...)`), faltan `<category>` y contenido completo; `customData` dice `es-MX` mientras el sitio declara `lang="es"`.
