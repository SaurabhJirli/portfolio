import { getCollection, sortByDateDesc } from "@/lib/content";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const site = "https://saurabhjirli.dev";
  const posts = sortByDateDesc(await getCollection("posts"));

  const itemsXml = posts
    .map((post) => {
      const title = escapeXml(String(post.data.title ?? ""));
      const description = escapeXml(String(post.data.description ?? ""));
      const pubDate = post.data.pubDate ? new Date(String(post.data.pubDate)).toUTCString() : "";
      const link = `${site}/blog/posts/${post.slug}`;
      return `\n      <item>\n        <title>${title}</title>\n        <link>${link}</link>\n        <guid>${link}</guid>\n        <pubDate>${pubDate}</pubDate>\n        <description>${description}</description>\n      </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Saurabh Jirli — Blog</title>
    <description>Blog posts by Saurabh Jirli on software engineering, backend development, and things I'm learning.</description>
    <link>${site}</link>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
