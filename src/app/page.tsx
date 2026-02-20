import Hero from "@/components/landing/Hero";
import ProjectsPreview from "@/components/landing/ProjectsPreview";
import BlogPreview from "@/components/landing/BlogPreview";
import StackPeview from "@/components/landing/StackPeview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <BlogPreview />
      <StackPeview />
    </>
  );
}
