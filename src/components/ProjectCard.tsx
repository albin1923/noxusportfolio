"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  link: string;
  imageSrc: string;
  imageAlt?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  link,
  imageSrc,
  imageAlt,
  priority = false,
  className = "",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      <Link href={link} className="block group cursor-pointer">
        {/* Image container with hover zoom */}
        <div className="overflow-hidden rounded-2xl relative aspect-[16/9] w-full bg-zinc-900 mb-5">
          <Image
            src={imageSrc}
            alt={imageAlt || subtitle}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          {/* Arrow button bottom-left */}
          <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-100 group-hover:bg-white group-hover:border-white transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-black transition-colors">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Card text */}
        <div>
          <p className="text-[#888] text-sm mb-1 font-normal">{title}</p>
          <h3 className="text-[#1a1a1a] text-lg font-semibold tracking-tight group-hover:opacity-70 transition-opacity">{subtitle}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
