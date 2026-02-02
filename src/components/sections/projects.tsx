"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "5G Core Deployer",
    description: "Automated deployment pipeline for 5G Core Network Functions using Python and Helm. Reduced deployment time by 70%.",
    tags: ["Python", "Helm", "Kubernetes", "Jenkins"],
    github: "#",
  },
  {
    title: "Network Log Analyzer",
    description: "A tool to parse and analyze SIP/Diameter logs for error patterns. Integrated with ELK stack for visualization.",
    tags: ["Elasticsearch", "Logstash", "Bash", "Regex"],
    github: "#",
  },
  {
    title: "IMS Health Check Bot",
    description: "Chatbot integration for Slack to perform real-time health checks on IMS nodes and report status.",
    tags: ["Node.js", "Slack API", "REST", "IMS"],
    github: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
            Featured Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg/relaxed">
            Real-world solutions built to solve complex telecom integration challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 text-card-foreground shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 flex flex-col backdrop-blur-sm"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-zinc-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
