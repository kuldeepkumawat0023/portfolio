"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative lg:h-[620px] w-full max-w-[380px] sm:max-w-[450px] md:max-w-none mx-auto flex items-center justify-center mt-8 md:mt-0"
    >

      {/* ── Animated orange accent dots (lower-left of person) ── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute bottom-[28%] left-[27%] z-10 pointer-events-none flex flex-col gap-1"
      >
        <div className="w-5 h-5 rounded-full bg-primary/70" />
        <div className="w-3 h-3 rounded-full bg-primary/40 self-end" />
      </motion.div>

      {/* ── Soft bottom glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-32 bg-primary/12 blur-[65px] rounded-full z-0 pointer-events-none" />

      {/* ── Person image - full size ── */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[580px] lg:h-[620px] z-10 scale-100 sm:scale-110 lg:scale-[1.4] origin-bottom translate-y-0 sm:translate-y-4 md:translate-y-8">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-primary/15 blur-[80px] rounded-full z-0" />
        <Image
          src="/images/home/user.png"
          alt="Full Stack Developer"
          fill
          className="object-contain object-bottom z-10 drop-shadow-2xl"
          priority
        />
      </div>

      {/* Floating badges */}

      {/* React Badge - Top Left */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-[10%] sm:top-[15%] left-[0%] sm:left-[2%] lg:left-[2%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center text-[#61DAFB]">
          <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
        </div>
        <span className="text-[10px] font-bold text-foreground">React</span>
      </motion.div>

      {/* Node.js Badge - Middle Left */}
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute top-[42%] sm:top-[45%] left-[-8%] sm:left-[-5%] lg:left-[-5%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center text-[#339933]">
          <svg viewBox="0 0 128 128" width="36" height="36"><path fill="currentColor" d="M109.8 45.4c0-2.8-1.5-5.3-4-6.7L67.6 16.5c-2.3-1.3-5-1.3-7.2 0L22.2 38.7c-2.4 1.4-4 4-4 6.7v42.5c0 2.8 1.5 5.3 4 6.7l38.2 22.2c2.3 1.3 5 1.3 7.2 0l38.2-22.2c2.4-1.4 4-4 4-6.7V45.4zM66.4 100l-28.7-16.6V50.3l28.7-16.6 28.7 16.6v33.1L66.4 100z" /></svg>
        </div>
        <span className="text-[10px] font-bold text-foreground">Node.js</span>
      </motion.div>

      {/* MongoDB Badge - Bottom Left */}
      <motion.div
        animate={{ y: [-8, 12, -8] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[10%] sm:bottom-[15%] left-[0%] sm:left-[2%] lg:left-[2%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          {/* MongoDB leaf icon */}
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
            <path d="M12 2C12 2 6 8.5 6 13.5C6 16.985 8.686 19.82 12 19.98C15.314 19.82 18 16.985 18 13.5C18 8.5 12 2 12 2Z" fill="#47A248" />
            <path d="M12 20V22" stroke="#47A248" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-[10px] font-bold text-foreground">MongoDB</span>
      </motion.div>

      {/* Next.js Badge - Top Right */}
      <motion.div
        animate={{ y: [-12, 8, -12] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[10%] sm:top-[15%] right-[0%] sm:right-[2%] lg:right-[2%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="128" className="fill-foreground" />
            <path d="M213.32 195.12L109.914 76.8H85.3333V179.2H103.587V99.7891L200.72 208.682C205.109 204.595 209.5 200.509 213.32 195.12Z" className="fill-card" />
            <path d="M170.667 76.8H152.413V179.2H170.667V76.8Z" className="fill-card" />
          </svg>
        </div>
        <span className="text-[10px] font-bold text-foreground">Next.js</span>
      </motion.div>

      {/* Express.js Badge - Middle Right */}
      <motion.div
        animate={{ y: [8, -12, 8] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[42%] sm:top-[45%] right-[-8%] sm:right-[-5%] lg:right-[-5%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center text-foreground font-light text-[26px] tracking-tighter">
          ex
        </div>
        <span className="text-[10px] font-bold text-foreground mt-1">Express.js</span>
      </motion.div>

      {/* JavaScript Badge - Bottom Right */}
      <motion.div
        animate={{ y: [-15, 5, -15] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] sm:bottom-[15%] right-[0%] sm:right-[2%] lg:right-[2%] w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <div className="w-9 h-9 bg-[#F7DF1E] flex items-end justify-end p-1 rounded-sm">
            <span className="text-black font-bold text-[16px] leading-none">JS</span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-foreground">JavaScript</span>
      </motion.div>

    </motion.div>
  )
}
