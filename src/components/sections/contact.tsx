"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Check, Copy } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("wanghung07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-zinc-400 md:text-lg/relaxed">
            Interested in discussing a project or a new opportunity? Feel free
            to reach out.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            {/* Email Copy Button */}
            <div className="relative">
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 text-xl font-medium text-cyan-400 bg-white/5 px-8 py-4 rounded-full border border-cyan-500/30 transition-all hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95"
              >
                <Mail className="h-6 w-6" />
                wanghung07@gmail.com
                <span className="ml-2 text-zinc-500 group-hover:text-cyan-300/70 transition-colors">
                  {copied ? (
                    <Check className="h-5 w-5 text-green-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </span>
              </button>

              {/* Toast Notification */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                  >
                    Copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jaisonthehung/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 transition-all shadow-lg flex items-center justify-center h-[60px] w-[60px]"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/jasonthehung"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 transition-all shadow-lg flex items-center justify-center h-[60px] w-[60px]"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
