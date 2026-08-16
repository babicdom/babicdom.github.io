import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    featured: z.boolean().optional(),
    type: z.enum(["tech", "personal"]).default("tech"),
    /** Optional preview image shown next to the entry in list views (path relative to the .md file) */
    image: image().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    featured: z.boolean().optional(),
    github: z.string().url().optional(),
    hasDetailPage: z.boolean().optional(),
    /** Optional preview image shown next to the entry in list views (path relative to the .md file) */
    image: image().optional(),
  }),
});

const tips = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/tips" }),
  schema: z.object({
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    category: z.enum(["Tech", "Running", "Research"]),
    summary: z.string(),
  }),
});

export const collections = {
  blog,
  projects,
  tips,
};
