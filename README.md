# ☁️ Letras Nubladas

Blog personal donde comparto poemas, cuentos y reflexiones literarias.

## 🚀 Tecnologías

Este proyecto está construido con:

- **[Astro](https://astro.build)** - Framework web moderno para sitios basados en contenido
- **TypeScript** - Tipado estático para JavaScript
- **Content Collections** - Sistema de gestión de contenido de Astro
- **CSS Variables** - Estilos personalizados con variables CSS
- Fuentes: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) y [Lora](https://fonts.google.com/specimen/Lora)

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos (favicon, etc.)
├── src/
│   ├── data/
│   │   └── blog/       # Artículos del blog en formato Markdown
│   ├── pages/          # Páginas del sitio
│   ├── styles/         # Estilos globales CSS
│   └── content.config.ts  # Configuración de Content Collections
├── astro.config.mjs    # Configuración de Astro
├── tsconfig.json       # Configuración de TypeScript
└── package.json
```

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando        | Acción                                               |
| :------------- | :--------------------------------------------------- |
| `pnpm install` | Instala las dependencias                             |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Construye el sitio para producción en `./dist/`      |
| `pnpm preview` | Previsualiza la build localmente antes de desplegar  |

## 📝 Agregar Contenido

Para agregar un nuevo post al blog:

1. Crea un archivo Markdown en `src/data/blog/` con el formato `YYYY-MM-DD-titulo.md`
2. Agrega el frontmatter requerido:

```markdown
---
title: Título del post
authors: [Mario]
excerpt: Breve descripción
category: poema
---

Contenido del post aquí...
```

### Campos del Frontmatter

- `title` (requerido): Título del post
- `authors` (opcional): Array de autores
- `excerpt` (opcional): Extracto o descripción breve
- `category` (opcional): Categoría del contenido (poema, cuento, reflexión, etc.)
- `image` (opcional): Ruta de la imagen destacada

## 🎨 Personalización

Los colores y fuentes pueden personalizarse editando las variables CSS en `src/styles/global.css`:

```css
:root {
  --font-sans: "Lora Variable", sans-serif;
  --font-serif: "Playfair Display Variable", serif;
  --text-color: #4a2d00;
  --bg-color: #fdf8f0;
  --button-bg-color: #e5d7c2;
}
```

## 📄 Licencia

Este proyecto contiene contenido original creativo y código fuente.

---

Hecho con ❤️ y ☁️
