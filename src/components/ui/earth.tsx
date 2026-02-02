"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated data streams with random spacing
function DataStream({
  delay,
  top,
  active,
}: {
  delay: number;
  top: string;
  active: boolean;
}) {
  const chars = "0123456789ABCDEF";
  const [data, setData] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) return;

    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, delay * 1000);

    return () => clearTimeout(showTimeout);
  }, [active, delay]);

  useEffect(() => {
    if (!visible) return;

    const generateData = () => {
      let str = "";
      for (let i = 0; i < 80; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
        if (Math.random() > 0.7) {
          const spaces = Math.floor(Math.random() * 5) + 1;
          str += " ".repeat(spaces);
        }
      }
      return str;
    };

    setData(generateData());
    const interval = setInterval(() => {
      setData(generateData());
    }, 300);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="absolute left-0 right-0 font-mono text-xs text-cyan-400/30 whitespace-nowrap overflow-hidden"
      style={{ top }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {data}
    </motion.div>
  );
}

// Terminal-style typing text - Matrix style
function TerminalText({ onComplete }: { onComplete: () => void }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lines = [
    { text: "> ⚙️ INITIALIZING NETWORK PROTOCOLS...", delay: 0 },
    { text: "> 🔐 ESTABLISHING SECURE CONNECTION...", delay: 2 },
    { text: "> 📡 LOADING 6G RAN CONFIGURATION...", delay: 4 },
    { text: "> ✅ SYSTEM READY.", delay: 6 },
  ];

  // Trigger close animation after last line finishes
  useEffect(() => {
    const lastLineDelay = 6;
    const lastLineLength = "> ✅ SYSTEM READY.".length;
    const typingTime = lastLineLength * 0.05;
    const totalTime = (lastLineDelay + typingTime + 1) * 1000;

    const closeTimeout = setTimeout(() => {
      setIsClosing(true);
    }, totalTime);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, totalTime + 800);

    return () => {
      clearTimeout(closeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20"
      style={{ marginLeft: "-30%" }}
    >
      <motion.div
        className="font-mono text-lg md:text-xl space-y-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isClosing
            ? { scale: 0, opacity: 0, y: -50 }
            : { scale: 1, opacity: 1 }
        }
        transition={
          isClosing
            ? { duration: 0.6, ease: "easeIn" }
            : { duration: 0.5, ease: "easeOut" }
        }
      >
        <div className="bg-black/80 backdrop-blur-md rounded-lg px-6 py-5 border border-green-500/40 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-500/20">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-green-500/60 text-sm">
              system.terminal
            </span>
          </div>

          {/* Terminal content */}
          {lines.map((line, i) => (
            <motion.div
              key={i}
              className="text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: line.delay, duration: 0.3 }}
            >
              <TypewriterText text={line.text} delay={line.delay} />
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-3 h-6 bg-green-400 mt-2 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Typewriter effect for individual lines
function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
}

// Network topology visualization
function NetworkTopology() {
  const nodes = [
    { x: 70, y: 25, size: 0.8 },
    { x: 50, y: 40, size: 0.6 },
    { x: 85, y: 45, size: 0.5 },
    { x: 60, y: 60, size: 0.5 },
    { x: 80, y: 70, size: 0.4 },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 4],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connection lines with data flow */}
      {connections.map(([from, to], i) => (
        <g key={`conn-${i}`}>
          <motion.line
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(34,211,238,0.3)"
            strokeWidth="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.2, duration: 1 }}
          />
          {/* Animated data packet */}
          <motion.circle
            r="0.4"
            fill="#22d3ee"
            animate={{
              cx: [nodes[from].x, nodes[to].x],
              cy: [nodes[from].y, nodes[to].y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3 + 1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        </g>
      ))}

      {/* Nodes - simple dots only */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.size}
          fill="#22d3ee"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0.6, 1, 0.6] }}
          transition={{
            scale: { delay: i * 0.2, type: "spring" },
            opacity: { duration: 2, delay: i * 0.2, repeat: Infinity },
          }}
        />
      ))}
    </svg>
  );
}

// Stats display
function StatsDisplay() {
  const [stats, setStats] = useState({
    bandwidth: 0,
    latency: 0,
    nodes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        bandwidth: Math.floor(Math.random() * 500 + 9500),
        latency: Math.floor(Math.random() * 5 + 1),
        nodes: Math.floor(Math.random() * 10 + 240),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-[15%] right-[5%] font-mono text-xs space-y-3 z-10"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="text-cyan-400/50">
        <span className="text-cyan-400/30">BANDWIDTH:</span>{" "}
        <span className="text-cyan-400">{stats.bandwidth}</span>{" "}
        <span className="text-cyan-400/30">Gbps</span>
      </div>
      <div className="text-cyan-400/50">
        <span className="text-cyan-400/30">LATENCY:</span>{" "}
        <span className="text-cyan-400">{stats.latency}</span>{" "}
        <span className="text-cyan-400/30">ms</span>
      </div>
      <div className="text-cyan-400/50">
        <span className="text-cyan-400/30">ACTIVE NODES:</span>{" "}
        <span className="text-cyan-400">{stats.nodes}</span>
      </div>
    </motion.div>
  );
}

// Grid background
function GridBackground() {
  return (
    <div className="absolute inset-0">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern
            id="smallGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(34,211,238,0.5)"
              strokeWidth="0.3"
            />
          </pattern>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="rgba(34,211,238,0.8)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

// Hexagon decorations
function HexDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: 40 + i * 10,
            height: 40 + i * 10,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: 1,
            rotate: [0, 60, 0],
          }}
          transition={{
            opacity: { duration: 4, delay: i * 0.5, repeat: Infinity },
            scale: { delay: i * 0.3 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="rgba(34,211,238,0.5)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function EarthCanvas() {
  const [systemReady, setSystemReady] = useState(false);

  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden bg-[#030712]">
      <GridBackground />
      <HexDecorations />
      <NetworkTopology />
      <TerminalText onComplete={() => setSystemReady(true)} />
      <StatsDisplay />

      {/* Data streams - only appear after system ready */}
      {[...Array(5)].map((_, i) => (
        <DataStream
          key={i}
          delay={i * 0.3}
          top={`${10 + i * 18}%`}
          active={systemReady}
        />
      ))}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.8) 100%)",
        }}
      />
    </div>
  );
}
