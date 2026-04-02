import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECT_IMAGES } from "@/lib/images";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f0f0f7] min-h-screen">

      {/* ─── Hero ─── */}
      <section className="px-8 md:px-14 pt-32 pb-16 max-w-[1400px] mx-auto w-full mt-10">
        <AnimatedSection>
          <p className="text-[#1a1a1a] text-[13px] font-medium mb-6">
            Branding · Product Design · DNA
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] leading-[1.05] font-medium tracking-tight max-w-[1200px]">
            <span className="text-[#1a1a1a]">Discover the essence of Noxus. </span>
            <span className="text-[#999999]">Where technology and creativity meet...</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* ─── Featured Project: The Lumina ─── */}
      <section className="px-8 md:px-14 pb-6 max-w-[1400px] mx-auto w-full">
        <AnimatedSection delay={0.14}>
          <Link href="/work/lumina" className="block group">
            <div className="overflow-hidden rounded-3xl relative w-full bg-zinc-900 mb-4" style={{ aspectRatio: "16/7" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROJECT_IMAGES.lumina}
                alt="The Lumina – Conversion Page"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-5 left-5 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" className="text-white group-hover:text-black transition-colors">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      </section>

      {/* ─── Secondary Projects Grid ─── */}
      <section className="px-8 md:px-14 py-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Honda"
            subtitle="OmniVault-inventory Manager"
            link="/work/fintech-dashboard"
            imageSrc={PROJECT_IMAGES.omniVault}
          />
          <ProjectCard
            title="Noxus Aura"
            subtitle="High Conversion Page - Aura"
            link="/work/appplugin"
            imageSrc={PROJECT_IMAGES.noxusAura}
          />
        </div>
      </section>

      {/* ─── Designing Success + Our Story ─── */}
      <section className="bg-white w-full py-24 px-8 md:px-14">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-24">
          <div className="flex-1">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-5 leading-tight">
                Designing Success
              </h2>
              <p className="text-lg text-[#888] leading-relaxed mb-8 max-w-sm">
                See how we&apos;ve turned ideas into reality.{" "}
                <span className="text-[#bbb]">Dive into the stories of successful product designs that make a difference.</span>
              </p>
              <Link href="/work" className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold text-base hover:opacity-60 transition-opacity">
                Our Work <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
          <div className="flex-1">
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-5 leading-tight">
                Our Story
              </h2>
              <p className="text-lg text-[#888] leading-relaxed mb-8 max-w-sm">
                Explore our journey and learn what sets us apart in crafting impactful digital experiences.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold text-base hover:opacity-60 transition-opacity">
                About Us <span>→</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Aura Botanicals ─── */}
      <section className="px-8 md:px-14 py-16 max-w-[1400px] mx-auto w-full">
        <ProjectCard
          title="Aura Botanicals"
          subtitle="Aura - High Conversion Page"
          link="/work/aura-botanicals"
          imageSrc={PROJECT_IMAGES.auraBotanicals}
          className="w-full"
        />
      </section>

    </div>
  );
}
