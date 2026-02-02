"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Signal, Globe, Server, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Integration Engineer",
    company: "Ericsson",
    period: "Jul. 2025 - Present",
    description:
      "Leading integration and verification of ENM system. Troubleshooting CORE and RAN issues in production environment.",
    tags: ["Automation", "Linux", "Python", "AI"],
    icon: Signal,
    logo: "/assets/ericsson.png",
  },
  {
    role: "Senior Engineer",
    company: "AU Optronics Corp.",
    period: "Jul. 2024 - Apr. 2025",
    description: "Developed a system for IoT monitoring and version control.",
    tags: ["React", "MySQL", "Docker", "Full-Stack"],
    icon: Globe,
    logo: "/assets/auo.png",
  },
  {
    role: "Software Engineer Intern",
    company: "TKSpring",
    period: "Aug. 2022 - Mar. 2023",
    description:
      "Analyzed and researched smart contracts, proposing solutions to optimize performance and reduce gas fees.",
    tags: ["Blockchain", "Solidity", "TpyeScript", "Node.js"],
    icon: Server,
    logo: "/assets/tkspring.png",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            A timeline of my professional journey and key achievements in the
            industry.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border-l-2 md:border-none border-cyan-500/20"
            >
              <div className="hidden md:block absolute left-[50%] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 -translate-x-[1px]" />
              <div
                className={`md:flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] ring-4 ring-background/50 backdrop-blur-sm z-10" />

                <div
                  className={`md:w-[45%] mb-8 md:mb-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <div
                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group relative overflow-hidden`}
                  >
                    <div
                      className={`flex gap-4 mb-4 ${index % 2 === 0 ? "flex-row text-left" : "md:flex-row-reverse md:text-right flex-row text-left"}`}
                    >
                      {/* Company Logo */}
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-black/50 border border-white/10 overflow-hidden relative shadow-lg">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Title & Date */}
                      <div
                        className={`flex flex-col flex-grow ${index % 2 === 0 ? "items-start" : "md:items-end items-start"}`}
                      >
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-lg font-medium text-zinc-400">
                          {exp.company}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-cyan-400 font-bold mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`text-zinc-400 text-sm mb-4 ${index % 2 === 0 ? "text-left" : "md:text-right text-left"}`}
                    >
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-cyan-500/30 px-2.5 py-0.5 text-xs font-semibold bg-cyan-950/30 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-[45%]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
