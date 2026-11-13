/**
 * Shared constants for JSON-LD structured data (schema.org).
 */

export const AUTHOR_NAME = "Mario Flores Abreu";

export const LICENSE = "https://creativecommons.org/licenses/by-nc-sa/4.0/";

export const SITE_LANGUAGE = "es";

export const SITE_NAME = "Letras Nubladas";

export const SITE_DESCRIPTION =
  "Letras Nubladas es un espacio dedicado a la poesía, cuentos y reflexiones. Explora nuestras publicaciones y déjate llevar por las palabras.";

export const authorNode = (site: URL) => ({
  "@type": "Person",
  name: AUTHOR_NAME,
  url: new URL("/about/", site).toString(),
});
