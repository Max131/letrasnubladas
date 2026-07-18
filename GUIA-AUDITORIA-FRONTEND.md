# Guía de Auditoría Frontend — Prompts Reutilizables

Flujo de análisis para proyectos frontend. Ejecutar las fases en orden; las fases 3-6 pueden correr en paralelo.

---

## Fase 1 — Contexto general

```
Lee el README, package.json, y archivos de configuración raíz.
Describe qué es este proyecto, para qué sirve, y cuál es su stack técnico.
Identifica los entry points y la estructura de directorios principal.
```

## Fase 2 — Arquitectura frontend

```
Analiza la arquitectura del frontend:
- ¿Qué framework/librerías se usan? ¿Vanilla, React, Vue, etc.?
- ¿Cómo se organiza el CSS/estilos? (preprocesador, BEM, utility-first, etc.)
- ¿Cómo se cargan los módulos/scripts? (bundling, dynamic imports, lazy loading)
- ¿Hay un build pipeline? ¿Qué herramientas usa?
- ¿Los archivos viven en un solo lugar o están duplicados entre directorios?
```

## Fase 3 — Auditoría JS

```
Audita la calidad del JavaScript:
- Manejo de errores (try/catch, null checks, error boundaries)
- Patrones de estado (global, local, reactivo)
- Uso de eventos y listeners (duplicates, memory leaks, cleanup)
- Modularización (ES modules vs scripts globales, circular deps)
- Código muerto (archivos sin usar, variables sin referenciar, código comentado)
```

## Fase 4 — Auditoría CSS

```
Audita la calidad del CSS/estilos:
- Arquitectura y capas (¿está bien organizado? ¿hay separación clara?)
- Duplicación (patrones repetidos que deberían ser mixins/variables)
- Selectores problemáticos (!important excesivos, especificidad alta, nesting profundo)
- Variables/design tokens (¿existen? ¿se usan consistentemente?)
- Responsive design (breakpoints consistentes, estrategia mobile/desktop first)
```

## Fase 5 — Accesibilidad

```
Revisa la accesibilidad del frontend:
- Navegación por teclado (tab order, focus management, keyboard handlers)
- ARIA (roles, states, properties — ¿están correctos y completos?)
- Modales y overlays (focus trap, Escape, role="dialog")
- Contenido alternativo (alt text, aria-labels, screen reader only)
- Movimiento y animación (prefers-reduced-motion, pausa en carruseles)
```

## Fase 6 — Performance

```
Analiza el performance del frontend:
- Carga de recursos (¿se cargan condicionalmente o todo siempre?)
- Bundle splitting (¿hay lazy loading o es un bundle monolítico?)
- DOM queries costosas (selector en loops, reflow excesivo)
- Event listeners sin cleanup
- CDN imports bloqueantes
```

## Fase 7 — Resumen ejecutivo

```
Resume en 3 categorías:
1. Fortalezas (¿qué está bien hecho y por qué?)
2. Problemas reales (bugs, errores de accesibilidad, crashes potenciales)
3. Áreas de oportunidad (mejoras que no son urgentes pero suman)

Descarta errores tipográficos, decisiones de diseño del cliente,
y cosas que fueron intencionales por contexto del proyecto.
```

---

## Tips de uso

- **Empieza siempre por la Fase 1** — el contexto cambia completamente qué es "correcto" en un proyecto
- **Las fases 3-6 pueden correr en paralelo** si se usan subagentes
- **La Fase 7 es la más importante** — filtra lo que realmente importa vs ruido
- **Adapta al stack** — si es React/Vue, agregar preguntas sobre hooks, state management, rendering patterns
- **Si el proyecto tiene backend propio**, agregar fase sobre API design, data fetching patterns, caching
