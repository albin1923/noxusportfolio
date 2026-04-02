import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECT_IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Noxus Studio",
  description: "See how we've turned ideas into reality. Dive into the stories of successful product designs.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f7]">
      <section className="px-8 md:px-14 pt-40 pb-14 max-w-[1400px] mx-auto w-full">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1a1a1a] mb-4">
            Designing Success
          </h1>
          <p className="text-xl text-[#888] max-w-xl leading-relaxed">
            See how we&apos;ve turned ideas into reality.{" "}
            <span className="text-[#bbb]">Dive into the stories of successful product designs that make a difference.</span>
          </p>
        </AnimatedSection>
      </section>

      <section className="px-8 md:px-14 pb-32 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard title="The Lumina" subtitle="The Lumina - Conversion Page" link="/work/lumina" imageSrc={PROJECT_IMAGES.lumina} priority />
          <ProjectCard title="Honda" subtitle="OmniVault-inventory Manager" link="/work/fintech-dashboard" imageSrc={PROJECT_IMAGES.omniVault} priority />
          <ProjectCard title="Aura Botanicals" subtitle="Aura - High Conversion Page" link="/work/aura-botanicals" imageSrc={PROJECT_IMAGES.auraBotanicals} />
          <ProjectCard title="Noxus Aura" subtitle="High Conversion Page - Aura" link="/work/appplugin" imageSrc={PROJECT_IMAGES.noxusAura} />
        </div>
      </section>
    </div>
  );
}
