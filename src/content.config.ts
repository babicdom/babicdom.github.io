import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    github: z.string().url().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};
