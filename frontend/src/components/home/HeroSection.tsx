"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Download, PlayCircle, CheckCircle2 } from "lucide-react"
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

export function HeroSection({ props }: { props: any }) {
  return (
    <section
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
                {props.badgeText}
                <span className="text-lg animate-wave">{props.badgeIcon}</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[3.2rem] sm:text-[4.2rem] lg:text-[4.8rem] font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
            >
              {props.headingPart1}{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400">
                {props.headingPart2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-8"
            >
              {props.description}
            </motion.p>

            {/* Bullets (for Contact page) */}
            {props.bullets?.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-8">
                {props.bullets.map((bullet: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-foreground font-medium">{bullet}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Buttons */}
            {props.buttons?.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {props.buttons.map((btn: any, i: number) => {
                  const isPrimary = btn.variant === "gradient" || i === 0;
                  return (
                    <Button
                      key={i}
                      variant={btn.variant || "outline"}
                      className={
                        isPrimary
                          ? "rounded-full px-8 py-7 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all flex items-center gap-2 group"
                          : "rounded-full px-6 py-6 text-base font-bold border-2 border-primary/30 dark:border-primary/40 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all flex items-center gap-3 group"
                      }
                      asChild={!!btn.href}
                    >
                      {btn.href ? (
                        <a href={btn.href}>
                          {btn.text}
                          {btn.icon && (
                            <span className={isPrimary ? "group-hover:translate-y-0.5 transition-transform" : "flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all"}>
                              {btn.icon}
                            </span>
                          )}
                        </a>
                      ) : (
                        <>
                          {btn.text}
                          {btn.icon && (
                            <span className={isPrimary ? "group-hover:translate-y-0.5 transition-transform" : "flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all"}>
                              {btn.icon}
                            </span>
                          )}
                        </>
                      )}
                    </Button>
                  );
                })}
              </motion.div>
            )}

            {/* Social Icons */}
            {props.socialLinks?.length > 0 && (
              <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em]">
                  {props.socialText || "Find Me On"}
                </span>
                <div className="flex gap-2">
                  {props.socialLinks.map((social: any, i: number) => (
                    <a key={i} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          <div>
            {/* ─── Image Column ─── */}
            <HeroImage props={props} />
          </div>

        </div>
      </div>
    </section>
  )
}
