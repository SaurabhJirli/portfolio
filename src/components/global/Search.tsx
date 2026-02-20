import { getCollection } from "@/lib/content";
import SearchClient from "@/components/global/SearchClient";

export default async function Search() {
  const posts = (await getCollection("posts")).map((post) => ({
    title: String(post.data.title ?? ""),
    description: String(post.data.description ?? ""),
    slug: post.slug,
  }));

  return <SearchClient posts={posts} />;
}
