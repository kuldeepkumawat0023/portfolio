"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Download, PlayCircle } from "lucide-react"
import { Button } from "@/components/common/Button"
import { HeroImage } from "./HeroImage"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-y-0 right-0 w-[25%] dark:hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-l-full"
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #FFF8F4 35%, #FFF1EA 70%, #FFE8DD 100%)",
          }}
        />
      </div>

      {/* ── Dark Mode: deep navy / orange-tint right side ── */}
      <div className="absolute inset-y-0 right-0 w-[25%] hidden dark:block pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-l-full"
          style={{ background: "linear-gradient(135deg, rgba(251,115,0,0.08) 0%, rgba(251,115,0,0.04) 60%, transparent 100%)" }}
        />
      </div>

      {/* ── Glow orb top-right (light) ── */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-orange-100/60 dark:bg-primary/5 blur-[100px] pointer-events-none z-0" />

      {/* ── Animated floating particles (light & dark) ── */}
      <motion.div
        animate={{ y: [-12, 12, -12], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-24 left-[10%] w-3 h-3 rounded-full bg-primary/40 dark:bg-primary/60 pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.4, 0.9, 0.4] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 left-[18%] w-2 h-2 rounded-full bg-orange-300/60 dark:bg-orange-400/40 pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [-8, 14, -8], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-[8%] w-4 h-4 rounded-full bg-primary/20 dark:bg-primary/30 pointer-events-none z-0"
      />

      {/* ── Bottom-right rotated diamond ── */}
      <div className="absolute -bottom-14 -right-14 md:-bottom-20 md:-right-20 w-[180px] md:w-[240px] h-[180px] md:h-[240px] bg-gradient-to-br from-primary/80 to-orange-400 dark:from-primary/60 dark:to-orange-500 rounded-[40px] rotate-45 pointer-events-none z-0 opacity-90" />

      {/* ── Container ── */}
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* ─── Text Column ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col relative z-20"
          >
            {/* Hello badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full border border-primary/20">
                Hello, I&apos;m
                <span className="text-lg animate-wave">👋</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[3.2rem] sm:text-[4.2rem] lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
            >
              Full Stack{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400">
                Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-8"
            >
              I build modern, responsive and scalable web applications using{" "}
              <span className="text-primary font-semibold">MERN Stack</span> & more.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button
                variant="gradient"
                className="rounded-full px-8 py-7 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all flex items-center gap-2 group"
              >
                Download CV
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 text-base font-bold border-2 border-primary/30 dark:border-primary/40 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all flex items-center gap-3 group"
              >
                View My Work
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <PlayCircle size={17} />
                </span>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">
                Find Me On
              </span>
              <div className="flex gap-2">
                {/* GitHub */}
                <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                {/* Twitter */}
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div>
            {/* ─── Image Column ─── */}
            <HeroImage />
          </div>


        </div>
      </div>
    </section>
  )
}
