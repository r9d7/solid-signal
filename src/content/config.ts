import { defineCollection, z } from "astro:content";

const issues = defineCollection({
  type: "data",
  schema: z.object({
    publishDate: z.coerce.date(),
    sections: z.array(
      z.object({
        type: z.union([
          z.literal("latest_from_solid"),
          z.literal("community_spotlights"),
          z.literal("upcoming_events"),
          z.literal("quick_tips"),
          z.literal("extensive_articles"),
        ]),
        content: z.array(
          z.discriminatedUnion("type", [
            z.object({
              type: z.literal("generic-link"),
              title: z.string(),
              url: z.string().optional(),
              summary: z.string().optional(),
              author: z.string().optional(),
              authorUrl: z.string().optional(),
              sponsorUrl: z.string().optional(),
            }),
            z.object({
              type: z.literal("video-link"),
              title: z.string(),
              url: z.string().optional(),
              summary: z.string().optional(),
              author: z.string().optional(),
              authorUrl: z.string().optional(),
              sponsorUrl: z.string().optional(),
            }),
          ]),
        ),
      }),
    ),
    sponsors: z
      .array(
        z.object({
          kind: z.literal(1),
          name: z.string(),
          url: z.string().optional(),
          customCopy: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { issues };
