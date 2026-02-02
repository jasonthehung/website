"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Telecom & Networks",
    skills: ["5G Core", "EPC", "IMS", "Voice over WiFi", "SIP/Diameter", "TCP/IP"],
  },
  {
    name: "Cloud & Virtualization",
    skills: ["Kubernetes", "Docker", "OpenStack", "VMware", "AWS", "Helm Charts"],
  },
  {
    name: "Scripting & Devops",
    skills: ["Python", "Bash", "Jenkins", "Git", "Ansible", "Terraform"],
  },
  {
    name: "Tools & Testing",
    skills: ["Wireshark", "Jira", "Prometheus", "Grafana", "Spirent", "Robot Framework"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Technical Skills
          </h2>
          <p className="max-w-[700px] text-zinc-400 md:text-lg/relaxed">
             A comprehensive toolkit developed through years of hands-on integration and troubleshooting.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 text-card-foreground shadow-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm font-medium transition-all bg-white/5 text-zinc-300 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
