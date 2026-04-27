import type { MetadataRoute } from "next";
import { getCollection } from "@/lib/content";

const site = "https://saurabhjirli.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getCollection("posts");
  const projects = await getCollection("projects");
  const work = await getCollection("work");
  const store = await getCollection("store");

  const staticRoutes = [
    "",
    "/now",
    "/stack",
    "/studio",
    "/forms/contact",
    "/forms/signin",
    "/forms/signup",
    "/forms/reset",
    "/system/colors",
    "/system/buttons",
    "/system/link",
    "/system/typography",
    "/system/overview",
    "/blog",
    "/blog/tags",
    "/projects",
    "/work",
    "/store",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${site}/blog/posts/${post.slug}`,
      lastModified: post.data.pubDate ? new Date(String(post.data.pubDate)) : new Date(),
    })),
    ...projects.map((project) => ({
      url: `${site}/projects/${project.slug}`,
      lastModified: project.data.pubDate ? new Date(String(project.data.pubDate)) : new Date(),
    })),
    ...work.map((entry) => ({
      url: `${site}/work/${entry.slug}`,
      lastModified: entry.data.pubDate ? new Date(String(entry.data.pubDate)) : new Date(),
    })),
    ...store.map((product) => ({
      url: `${site}/store/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
