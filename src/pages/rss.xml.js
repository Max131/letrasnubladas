import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
const posts = await getCollection("blog");

export function GET(context) {
  return rss({
    title: "Letras Nubladas",
    description:
      "Letras Nubladas es un espacio dedicado a la poesía, cuentos y reflexiones. Explora nuestras publicaciones y déjate llevar por las palabras.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.id.match(/\d{4}-\d{2}-\d{2}/)[0],
      description: post.data.excerpt,
      link: `/${post.id.match(/[a-zA-Z].+/)[0]}/`,
    })),
    customData: `<language>es-MX</language>`,
  });
}
