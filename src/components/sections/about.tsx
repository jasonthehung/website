"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Smartphone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-[800px] mx-auto"
          >
            <p className="text-zinc-400 md:text-lg/relaxed">
              I am a results-driven Integration Engineer with a strong
              background in Telecommunications and Cloud Infrastructure. My
              expertise lies in orchestrating complex systems, ensuring seamless
              CI/CD pipelines, and optimizing network performance.
            </p>
            <p className="text-zinc-400 md:text-lg/relaxed">
              With deep knowledge of 5G Core, Packet Core, and Virtualization
              technologies, I bridge the gap between development and operations
              to deliver robust, scalable solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 group">
            <Server className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <h3 className="text-sm font-bold tracking-wide text-white">
              Telecom Core
            </h3>
            <p className="text-xs text-zinc-400 text-center">ENM, ENIQ</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 group">
            <Database className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <h3 className="text-sm font-bold tracking-wide text-white">
              Cloud Infra
            </h3>
            <p className="text-xs text-zinc-400 text-center">OpenStack, K8s</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 group">
            <Code className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <h3 className="text-sm font-bold tracking-wide text-white">
              Automation
            </h3>
            <p className="text-xs text-zinc-400 text-center">
              Python, Bash, Ansible
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-xl transition-all hover:bg-white/10 hover:border-cyan-500/30 group">
            <Smartphone className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <h3 className="text-sm font-bold tracking-wide text-white">
              Testing
            </h3>
            <p className="text-xs text-zinc-400 text-center">
              E2E, Integration
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
