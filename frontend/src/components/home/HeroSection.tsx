"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, PlayCircle } from "lucide-react"
import { Button } from "@/components/common/Button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-background">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-orange-50 via-orange-50/40 to-transparent dark:from-primary/5 dark:via-transparent pointer-events-none" />
      <div className="absolute top-20 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col relative z-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Hello, I'm</span>
              <span className="text-2xl animate-wave">👋</span>
            </div>

            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground mb-6">
              Full Stack <br />
              <span className="text-primary">Developer</span>
            </h1>

            <p className="text-lg text-foreground font-medium max-w-lg leading-relaxed mb-8">
              I build modern, responsive and scalable web applications using MERN Stack & more.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="gradient" className="rounded-full px-8 py-7 text-base font-bold shadow-lg shadow-primary/30 flex items-center gap-2">
                Download CV <Download size={20} />
              </Button>
              <Button variant="outline" className="rounded-full px-6 py-6 text-base font-bold border-outline-variant hover:bg-surface-container flex items-center gap-3">
                View My Work
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                  <PlayCircle size={18} />
                </span>
              </Button>
            </div>

            {/* Social Proof / Find me on */}
            <div className="mt-14 flex items-center gap-4">
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">Find Me On</span>
              <div className="flex gap-2">
                <a href="#" className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-container hover:bg-primary hover:text-white text-primary transition-all shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-container hover:bg-primary hover:text-white text-primary transition-all shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-container hover:bg-primary hover:text-white text-primary transition-all shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface-container hover:bg-primary hover:text-white text-primary transition-all shadow-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image & Floating Badges Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] w-full flex items-center justify-center"
          >

            {/* SVG Connecting dashed lines between badges */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 600 600" preserveAspectRatio="none">
              {/* Lines from left badges to center */}
              <line x1="120" y1="130" x2="260" y2="250" stroke="#ff7e1d" strokeWidth="1" strokeDasharray="6,5" opacity="0.4" />
              <line x1="80" y1="300" x2="230" y2="310" stroke="#ff7e1d" strokeWidth="1" strokeDasharray="6,5" opacity="0.4" />
              <line x1="140" y1="470" x2="260" y2="420" stroke="#ff7e1d" strokeWidth="1" strokeDasharray="6,5" opacity="0.4" />
              {/* Lines from right badges to center */}
              <line x1="490" y1="200" x2="360" y2="270" stroke="#ff7e1d" strokeWidth="1" strokeDasharray="6,5" opacity="0.4" />
              <line x1="490" y1="420" x2="380" y2="390" stroke="#ff7e1d" strokeWidth="1" strokeDasharray="6,5" opacity="0.4" />
              {/* Orange dot nodes */}
              <circle cx="230" cy="270" r="6" fill="#ff7e1d" opacity="0.8" />
              <circle cx="370" cy="270" r="6" fill="#ff7e1d" opacity="0.8" />
              <circle cx="120" cy="130" r="4" fill="#ff7e1d" opacity="0.6" />
              <circle cx="490" cy="200" r="4" fill="#ff7e1d" opacity="0.6" />
              <circle cx="80" cy="300" r="4" fill="#ff7e1d" opacity="0.6" />
              <circle cx="490" cy="420" r="4" fill="#ff7e1d" opacity="0.6" />
              <circle cx="140" cy="470" r="4" fill="#ff7e1d" opacity="0.6" />
            </svg>

            {/* Floating Code Editor - Top Right */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[2%] right-[2%] w-52 md:w-60 h-36 bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 z-30 overflow-hidden flex flex-col"
            >
              <div className="h-5 bg-[#2d2d2d] w-full flex items-center px-3 gap-1.5 border-b border-black/20">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              <div className="p-3 flex flex-col gap-2 opacity-90">
                <div className="flex gap-2"><div className="w-6 h-1.5 rounded bg-[#c586c0]" /><div className="w-16 h-1.5 rounded bg-[#4ec9b0]" /><div className="w-8 h-1.5 rounded bg-[#569cd6]" /></div>
                <div className="flex gap-2 pl-4"><div className="w-12 h-1.5 rounded bg-[#dcdcaa]" /><div className="w-10 h-1.5 rounded bg-[#ce9178]" /></div>
                <div className="flex gap-2 pl-4"><div className="w-8 h-1.5 rounded bg-[#4ec9b0]" /><div className="w-14 h-1.5 rounded bg-[#569cd6]" /></div>
                <div className="flex gap-2"><div className="w-6 h-1.5 rounded bg-[#c586c0]" /><div className="w-10 h-1.5 rounded bg-[#569cd6]" /></div>
                <div className="flex gap-2 pl-4"><div className="w-20 h-1.5 rounded bg-[#ce9178]" /></div>
              </div>
            </motion.div>

            {/* The person image wrapper */}
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-none lg:w-[380px] h-[380px] md:h-[500px] lg:h-[560px] z-10">
              {/* Soft orange glow below image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-primary/20 blur-3xl rounded-full z-0" />
              <Image
                src="/images/home/user.png"
                alt="Full Stack Developer"
                fill
                className="object-contain object-bottom z-10 [mix-blend-mode:multiply] dark:[mix-blend-mode:normal] drop-shadow-xl"
                priority
              />
            </div>

            {/* Floating badges */}

            {/* React Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[15%] lg:top-[20%] left-[5%] lg:-left-[5%] w-24 h-24 bg-white px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[#61DAFB]">
                <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-800">React</span>
            </motion.div>

            {/* Node.js Badge */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-[45%] left-0 lg:-left-[15%] w-24 h-24 bg-white px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[#339933]">
                <svg viewBox="0 0 128 128" width="36" height="36"><path fill="currentColor" d="M109.8 45.4c0-2.8-1.5-5.3-4-6.7L67.6 16.5c-2.3-1.3-5-1.3-7.2 0L22.2 38.7c-2.4 1.4-4 4-4 6.7v42.5c0 2.8 1.5 5.3 4 6.7l38.2 22.2c2.3 1.3 5 1.3 7.2 0l38.2-22.2c2.4-1.4 4-4 4-6.7V45.4zM66.4 100l-28.7-16.6V50.3l28.7-16.6 28.7 16.6v33.1L66.4 100z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-800">Node.js</span>
            </motion.div>

            {/* MongoDB Badge */}
            <motion.div
              animate={{ y: [-8, 12, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] left-[10%] lg:left-[5%] w-24 h-24 bg-white px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-10 h-10 flex items-center justify-center text-[#47A248] font-bold text-3xl">
                🌿
              </div>
              <span className="text-[10px] font-bold text-gray-800">MongoDB</span>
            </motion.div>

            {/* Express.js Badge */}
            <motion.div
              animate={{ y: [8, -12, 8] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[40%] right-0 lg:-right-[10%] w-24 h-24 bg-white px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-10 h-10 flex items-center justify-center text-black font-light text-[26px] tracking-tighter">
                ex
              </div>
              <span className="text-[10px] font-bold text-gray-800 mt-1">Express.js</span>
            </motion.div>

            {/* JavaScript Badge */}
            <motion.div
              animate={{ y: [-15, 5, -15] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] right-[5%] lg:right-[0%] w-24 h-24 bg-white px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl border border-gray-100 z-20"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-9 h-9 bg-[#F7DF1E] flex items-end justify-end p-1 rounded-sm">
                  <span className="text-black font-bold text-[16px] leading-none">JS</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-800">JavaScript</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
