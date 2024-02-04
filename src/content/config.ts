import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    draft: z.boolean(),
    image: z.string().optional(),
    height: z.number().optional(),
    width: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
