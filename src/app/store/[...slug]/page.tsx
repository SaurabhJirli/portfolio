import { notFound } from "next/navigation";
import StoreLayout from "@/layouts/StoreLayout";
import { getCollection } from "@/lib/content";

export async function generateStaticParams() {
  const entries = await getCollection("store");
  return entries.map((entry) => ({ slug: [entry.slug] }));
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const allProducts = await getCollection("store");
  const entry = allProducts.find((product) => product.slug === slug);

  if (!entry) {
    notFound();
  }

  const index = allProducts.findIndex((product) => product.slug === slug);
  const previous = allProducts[index - 1] || null;
  const next = allProducts[index + 1] || null;

  return (
    <StoreLayout frontmatter={entry.data} previous={previous} next={next}>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    </StoreLayout>
  );
}
