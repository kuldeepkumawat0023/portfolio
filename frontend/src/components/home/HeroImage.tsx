"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroImage({ props }: { props?: any }) {
  const image = props?.image;
  const imageAlt = props?.imageAlt;
  
  // Default fallback badges if none provided, but typically props.badges will be used
  const badges = props?.badges || [];

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
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-bottom z-10 drop-shadow-2xl"
          priority
        />
      </div>

      {/* Floating badges */}
      {badges.map((badge: any, index: number) => (
        <motion.div
          key={index}
          animate={{ y: badge.animateY }}
          transition={{ repeat: Infinity, duration: badge.duration, ease: "easeInOut", delay: badge.delay }}
          className={`absolute ${badge.positionClass} w-24 h-24 bg-card px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            {badge.icon}
          </div>
          <span className="text-[10px] font-bold text-foreground mt-1">{badge.label}</span>
        </motion.div>
      ))}

    </motion.div>
  )
}
