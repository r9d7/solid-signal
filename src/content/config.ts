import { defineCollection, z } from "astro:content";

const issues = defineCollection({
  type: "content",
  schema: z.object({
    publishDate: z.coerce.date(),
  }),
});

export const collections = { issues };
