import { AnimatedSection } from "@/components/AnimatedSection";
import { PROJECT_IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmniVault | Noxus Studio",
  description: "Revolutionizing Banking: Enhancing User Experience with the Dello Fintech Banking",
};

export default function FintechDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f7]">
      <section className="px-8 md:px-14 pt-44 pb-16 max-w-[1400px] mx-auto w-full">
        <AnimatedSection>
          <p className="text-[#888] text-sm font-medium mb-6">Honda</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a] leading-[1.1] mb-8 max-w-3xl">
            Revolutionizing Banking: Enhancing User Experience with the Dello Fintech Banking
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed mb-10">
            Focuses on seamless digital experiences and intuitive, efficient, user-centric banking interactions.
          </p>
          <a href="#" className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
            View Live
          </a>
        </AnimatedSection>
      </section>
      <section className="px-8 md:px-14 pb-32 max-w-[1400px] mx-auto w-full">
        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl overflow-hidden w-full bg-[#0B1226]" style={{ aspectRatio: "16/9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROJECT_IMAGES.omniVault} alt="OmniVault Project" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
