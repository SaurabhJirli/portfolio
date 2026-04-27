import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard2 from "@/components/projects/ProjectCard2";
import { getCollection } from "@/lib/content";

export default async function ProjectsIndexPage() {
  const allProjects = await getCollection("projects");

  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="max-w-2xl">
          <Text tag="h1" variant="displayXL" className="text-base-900 dark:text-white tracking-tight">
            Things I've{" "}
            <span className="italic font-display text-base-500 dark:text-base-400">
              built
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 text-base-500 dark:text-base-400 leading-relaxed">
            Side projects and work projects where I got to solve interesting problems
            and learn new tools along the way.
          </Text>
        </div>
        <div className="flex flex-col mt-12 gap-4">
          {allProjects.map((post) => (
            <ProjectCard2 key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
