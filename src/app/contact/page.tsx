import { AnimatedSection } from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Noxus Studio",
  description: "Get in touch with Noxus Studio to build something unique together.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f0f7]">
      <section className="px-8 md:px-14 pt-44 pb-32 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

          {/* Left */}
          <div className="lg:flex-1">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1a1a1a] leading-[1.05] mb-6">
                Get in touch
              </h1>
              <p className="text-lg text-[#888] max-w-sm leading-relaxed">
                Get in touch to learn more about our automation platform and how we can help you achieve your business goals.
              </p>
            </AnimatedSection>
          </div>

          {/* Right */}
          <div className="lg:flex-1 flex flex-col gap-12">
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-3">Email</p>
              <a
                href="mailto:hello@noxusdynamics.tech"
                className="text-2xl font-semibold text-[#1a1a1a] hover:opacity-60 transition-opacity"
              >
                hello@noxusdynamics.tech
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-3">Phone</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">+91 8590173610</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-3">Address</p>
              <p className="text-lg text-[#888] leading-relaxed max-w-xs">
                Cabin 4, SB204, Saintgits College of Engineering.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p className="text-xs font-semibold text-[#aaa] uppercase tracking-widest mb-5">Social</p>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "Dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-5 py-3 border border-zinc-300 rounded-full text-sm text-[#1a1a1a] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
