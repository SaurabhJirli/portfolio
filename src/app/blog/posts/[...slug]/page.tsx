import { notFound } from "next/navigation";
import BlogLayout from "@/layouts/BlogLayout";
import { getCollection, sortByDateDesc } from "@/lib/content";

export async function generateStaticParams() {
  const entries = await getCollection("posts");
  return entries.map((entry) => ({ slug: [entry.slug] }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");
  const allPosts = sortByDateDesc(await getCollection("posts"));
  const entry = allPosts.find((post) => post.slug === slug);

  if (!entry) {
    notFound();
  }

  const index = allPosts.findIndex((post) => post.slug === slug);
  const previous = index < allPosts.length - 1 ? allPosts[index + 1] : null;
  const next = index > 0 ? allPosts[index - 1] : null;

  return (
    <BlogLayout
      frontmatter={entry.data}
      readingTime={entry.readingTime}
      previous={previous}
      next={next}
      allPosts={allPosts}
    >
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    </BlogLayout>
  );
}
