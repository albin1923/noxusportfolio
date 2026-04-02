import { AnimatedSection } from "@/components/AnimatedSection";
import { PROJECT_IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Noxus Studio",
  description: "Watch your ideas come to reality with Noxus // Studio.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f7]">

      {/* Hero */}
      <section className="px-8 md:px-14 pt-40 pb-16 max-w-[1400px] mx-auto w-full">
        <AnimatedSection>
          <p className="text-[#888] text-sm font-medium mb-6">About Us</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-4xl">
            <span className="text-[#1a1a1a]">Watch your ideas come to reality with </span>
            <span className="text-[#aaaaaa]">Noxus // Studio</span>
          </h1>
          <p className="text-xl text-[#888] max-w-xl leading-relaxed">
            We redefine possibility by combining imagination with precision to shape extraordinary experiences.
          </p>
        </AnimatedSection>
      </section>

      {/* Illustrations */}
      <section className="px-8 md:px-14 py-4 max-w-[1400px] mx-auto w-full">
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden bg-[#e8e8f0]" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROJECT_IMAGES.aboutLeft} alt="Design illustration" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#e8e8f0]" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROJECT_IMAGES.aboutRight} alt="Design illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission */}
      <section className="bg-white w-full py-24 px-8 md:px-14 my-16">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-[#888] text-sm font-medium mb-6 uppercase tracking-widest">Our Mission</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] leading-[1.15] max-w-4xl tracking-tight">
              We believe technology should solve meaningful problems and expand what people can build.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-14 pb-24 max-w-[1400px] mx-auto w-full">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1a1a1a] mb-12">Services</h2>
        </AnimatedSection>
        <div className="flex flex-col divide-y divide-zinc-200">
          {[
            { title: "Branding", items: "Logo Design / Brand Guidelines / Collateral Design / Rebranding Services" },
            { title: "UX & UI Design", items: "User Research and Analysis / Wireframing and Prototyping / User Interface Design / User Experience Testing / Responsive Design Solutions" },
            { title: "AI & Intelligent Systems", items: "Computer Vision / Machine Learning Integration / Data Systems / Smart Automation Solutions" },
            { title: "Web & Digital Products", items: "High-Conversion Landing Pages / Business Websites / Web Applications / Performance Optimization" },
          ].map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.08} className="flex flex-col md:flex-row gap-4 md:gap-16 py-8">
              <h3 className="text-lg font-semibold text-[#1a1a1a] md:w-1/3 shrink-0">{service.title}</h3>
              <p className="text-base text-[#888] leading-relaxed flex-1">{service.items}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-black text-white w-full py-24 px-8 md:px-14">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">How We Work</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { num: "01", title: "Discover vision", desc: "Understanding brand, audience, and objectives." },
              { num: "02", title: "Design Experience", desc: "Blending aesthetics and functionality." },
              { num: "03", title: "Refine Feedback", desc: "Iterating based on feedback." },
              { num: "04", title: "Deliver Project", desc: "Delivering a polished, cohesive digital experience." },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="text-zinc-500 font-mono text-sm mb-5">{step.num}</div>
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
