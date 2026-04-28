import Hero from "@/components/landing/Hero";
import ProjectsPreview from "@/components/landing/ProjectsPreview";
import NowSection from "@/components/landing/NowSection";
import WorkSection from "@/components/landing/WorkSection";
import StackPeview from "@/components/landing/StackPeview";
import ContactCta from "@/components/global/ContactCta";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <NowSection />
      <WorkSection />
      <StackPeview />
      <section className="bg-surface-inset">
        <Wrapper variant="standard" className="py-24 lg:py-36">
          <RevealWrapper stagger={0.06}>
            <ContactCta />
          </RevealWrapper>
        </Wrapper>
      </section>
    </>
  );
}
