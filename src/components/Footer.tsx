import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main CTA block */}
      <div className="px-8 md:px-14 py-24 max-w-[1400px] mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-10">
            Let&apos;s start creating together
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-zinc-100 transition-colors duration-200"
          >
            Let&apos;s talk
            <span className="transform transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-lg">↗</span>
          </Link>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mx-8 md:mx-14" />

      {/* Bottom nav */}
      <div className="px-8 md:px-14 py-8 max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#666]">
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
