"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EarthCanvas } from "@/components/ui/earth";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center py-12 md:py-24 lg:py-32 overflow-hidden bg-black"
    >
      {/* 3D Earth Background */}
      <div className="absolute inset-0 z-0 translate-x-[20%] md:translate-x-[25%] opacity-60 md:opacity-100 transition-opacity">
        <EarthCanvas />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4 md:px-6 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-auto max-w-2xl">
          {/* Text Content - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-start text-left space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-cyan-400">
                Hi, I'm
              </h2>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none font-heading bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Jason Wang
              </h1>
              <div className="text-xl md:text-3xl text-zinc-300 font-light">
                Integration Engineer at{" "}
                <span className="font-semibold text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                  Ericsson
                </span>
              </div>
            </div>

            <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed italic border-l-4 border-cyan-500/50 pl-6 py-2">
              “Life is like riding a bicycle. To keep your balance, you must
              keep moving.” - Albert Einstein
            </p>

            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-8">
              {/* <Button size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all text-white border-0 text-lg" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button> */}
              {/* <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-100 text-lg backdrop-blur-sm bg-black/30" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </a>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
