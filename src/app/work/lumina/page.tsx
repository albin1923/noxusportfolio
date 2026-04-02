import { AnimatedSection } from "@/components/AnimatedSection";
import { PROJECT_IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lumina | Noxus Studio",
  description: "High Conversion Parallax Website And Brand Design by Noxus Studio",
};

export default function LuminaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f7]">
      <section className="px-8 md:px-14 pt-44 pb-16 max-w-[1400px] mx-auto w-full">
        <AnimatedSection>
          <p className="text-[#888] text-sm font-medium mb-6">The Lumina</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a] leading-[1.1] mb-8 max-w-3xl">
            High Conversion Parallax Website And Brand Design
          </h1>
          <p className="text-xl text-[#888] max-w-2xl leading-relaxed mb-10">
            We build and develop unique brand pages that are upto date with the latest of modern tech and designs.
          </p>
          <a href="#" className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
            Visit Website
          </a>
        </AnimatedSection>
      </section>
      <section className="px-8 md:px-14 pb-32 max-w-[1400px] mx-auto w-full">
        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl overflow-hidden w-full bg-zinc-900" style={{ aspectRatio: "16/9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROJECT_IMAGES.lumina} alt="The Lumina Project" className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
