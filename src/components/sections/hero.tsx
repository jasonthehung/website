"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Satellite } from "lucide-react" // Added Satellite
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden">
      
      {/* Animated Star Field Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-1 w-1 bg-white rounded-full top-10 left-20 animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute h-1.5 w-1.5 bg-cyan-200 rounded-full top-1/4 right-1/3 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute h-1 w-1 bg-white rounded-full bottom-1/3 left-10 animate-pulse" style={{ animationDuration: '2s' }}></div>
        <div className="absolute h-2 w-2 bg-blue-300 rounded-full top-1/2 right-10 animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute h-0.5 w-0.5 bg-white rounded-full bottom-10 left-1/2 animate-pulse" style={{ animationDuration: '3s' }}></div>
        {/* Add more 'stars' as needed or use a background image for better performance if complex */}
      </div>

      {/* Floating Satellite */}
      <motion.div 
        className="absolute top-20 right-10 md:right-20 opacity-20 md:opacity-40 z-0"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Satellite className="w-24 h-24 md:w-32 md:h-32 text-cyan-500" />
      </motion.div>

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-heading bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Integration <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">Engineer</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-2xl/relaxed">
              Specializing in Telecom, 5G Core, and Cloud Infrastructure. Building diverse and robust systems for the future of connectivity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center"
          >
            <Button size="lg" className="h-12 px-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/40 hover:scale-105 transition-all text-white border-0" asChild>
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-100" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
