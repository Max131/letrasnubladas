import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/blog",
  }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
