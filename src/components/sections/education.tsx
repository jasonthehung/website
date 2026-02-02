"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Cpu, Library } from "lucide-react";

const educationList = [
  {
    degree: "Master of Computer Science",
    school: "Uppsala University",
    year: "Jul. 2023 - Oct. 2024",
    description:
      "Vice President of Taiwanese in Uppsala Alumni Student Association",
    icon: Library,
    logo: "/assets/uu.png",
  },
  {
    degree: "Master of Computer Science",
    school: "Nation Taiwan Normal University",
    year: "Aug. 2021 - Jun. 2024",
    description: "Teaching Assistant • GPA: 3.97 / 4.3",
    icon: Cpu,
    logo: "/assets/ntnu.png",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-12 md:py-24 lg:py-32 bg-white/5 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Education
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-lg/relaxed">
            Academic background and qualifications.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 group"
            >
              <div className="mb-4 rounded-full bg-cyan-500/10 w-16 h-16 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors overflow-hidden border border-cyan-500/20 relative">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {edu.school}
              </h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-cyan-300">
                  {edu.degree}
                </span>
                <span className="text-xs text-zinc-500 font-mono border border-white/10 px-2 py-0.5 rounded-full">
                  {edu.year}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
