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
  const site = "https://yourdomain.com";
  const posts = sortByDateDesc(await getCollection("posts"));

  const itemsXml = posts
    .map((post) => {
      const title = escapeXml(String(post.data.title ?? ""));
      const description = escapeXml(String(post.data.description ?? ""));
      const pubDate = post.data.pubDate ? new Date(post.data.pubDate).toUTCString() : "";
      const link = `${site}/blog/posts/${post.slug}`;
      return `\n      <item>\n        <title>${title}</title>\n        <link>${link}</link>\n        <guid>${link}</guid>\n        <pubDate>${pubDate}</pubDate>\n        <description>${description}</description>\n      </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Lexington Themes</title>
    <description>Free and premium multipage themes and UI Kits For freelancers, developers, businesses, and personal use. Beautifully crafted with Astro.js, and Tailwind CSS - Simple & easy to customise.</description>
    <link>${site}</link>${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
