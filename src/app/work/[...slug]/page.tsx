import React from "react";
import { notFound } from "next/navigation";
import WorkLayout from "@/layouts/WorkLayout";
import { getCollection } from "@/lib/content";

export async function generateStaticParams() {
  const entries = await getCollection("work");
  return entries.map((entry) => ({ slug: [entry.slug] }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const allWork = await getCollection("work");
  const entry = allWork.find((work) => work.slug === slug);

  if (!entry) {
    notFound();
  }

  const index = allWork.findIndex((work) => work.slug === slug);
  const previous = allWork[index - 1] || null;
  const next = allWork[index + 1] || null;

  return (
    <WorkLayout
      frontmatter={entry.data}
      previous={previous}
      next={next}
      children={React.createElement("div", { dangerouslySetInnerHTML: { __html: entry.html } })}
    />
  );
}
