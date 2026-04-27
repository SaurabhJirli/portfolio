import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

export type CollectionName = "posts" | "projects" | "store" | "work" | "authors";

export type ContentEntry<T = Record<string, unknown>> = {
  slug: string;
  data: T;
  body: string;
  html: string;
  readingTime: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

async function renderMarkdown(markdown: string) {
  const file = await remark().use(remarkHtml).process(markdown);
  return String(file);
}

export async function getCollection<T = Record<string, unknown>>(
  name: CollectionName
): Promise<ContentEntry<T>[]> {
  const dir = path.join(CONTENT_ROOT, name);
  const files = await fs.readdir(dir);
  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const parsed = matter(raw);
        const html = await renderMarkdown(parsed.content);
        return {
          slug,
          data: parsed.data as T,
          body: parsed.content,
          html,
          readingTime: readingTime(parsed.content).text,
        };
      })
  );

  return entries;
}

export async function getEntryBySlug<T = Record<string, unknown>>(
  name: CollectionName,
  slug: string
): Promise<ContentEntry<T> | null> {
  const entries = await getCollection<T>(name);
  return entries.find((entry) => entry.slug === slug) ?? null;
}

export function sortByDateDesc<T extends { data: { pubDate?: string } }>(
  entries: T[]
) {
  return [...entries].sort((a, b) => {
    const aDate = a.data.pubDate ? new Date(a.data.pubDate).getTime() : 0;
    const bDate = b.data.pubDate ? new Date(b.data.pubDate).getTime() : 0;
    return bDate - aDate;
  });
}
