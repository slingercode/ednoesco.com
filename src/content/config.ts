import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      draft: z.boolean(),
      cover: image().optional(),
      height: z.number().optional(),
      width: z.number().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
