import { notFound } from "next/navigation";
import ProjectsLayout from "@/layouts/ProjectsLayout";
import { getCollection, filterVisible } from "@/lib/content";

export async function generateStaticParams() {
  const entries = filterVisible(await getCollection("projects"));
  return entries.map((entry) => ({ slug: [entry.slug] }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join("/");
  const allProjects = filterVisible(await getCollection("projects"));
  const entry = allProjects.find((project) => project.slug === slug);

  if (!entry) {
    notFound();
  }

  const index = allProjects.findIndex((project) => project.slug === slug);
  const previous = allProjects[index - 1] || null;
  const next = allProjects[index + 1] || null;

  return (
    <ProjectsLayout frontmatter={entry.data} previous={previous} next={next}>
      <div dangerouslySetInnerHTML={{ __html: entry.html }} />
    </ProjectsLayout>
  );
}
