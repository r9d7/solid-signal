import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { getCollection } from "astro:content";

import { SITE_DESCRIPTION, SITE_TITLE } from "~/constants";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  return rss({
    site: context.site!,
    customData: `<language>en-uk</language>`,

    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    items: posts.map((post) => ({ ...post.data, link: `/blog/${post.slug}/` })),
  });
}
