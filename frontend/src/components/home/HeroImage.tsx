"use client"

import React from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"

export function HeroImage({ props, mouseX, mouseY }: { props?: any, mouseX?: any, mouseY?: any }) {
  const image = props?.image;
  const imageAlt = props?.imageAlt;

  // Fallback motion values if props don't provide them
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const mX = mouseX || fallbackX;
  const mY = mouseY || fallbackY;

  // Parallax calculations for main image
  const imgX = useTransform(mX, [-1, 1], [15, -15]);
  const imgY = useTransform(mY, [-1, 1], [15, -15]);

  return (
    <div
      className="relative lg:h-[620px] w-full max-w-[380px] sm:max-w-[450px] md:max-w-none mx-auto flex items-center justify-center mt-8 md:mt-0 perspective-[1000px]"
    >
      {/* ── Soft bottom glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-36 bg-primary/20 blur-[75px] rounded-full z-0 pointer-events-none" />

      {/* ── Person image with Parallax and Mask Reveal ── */}
      <motion.div 
        style={{ x: imgX, y: imgY }}
        initial={{ clipPath: "circle(0% at 50% 100%)", opacity: 0 }}
        animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[580px] lg:h-[620px] z-10 scale-100 sm:scale-110 lg:scale-[1.4] origin-bottom translate-y-0 sm:translate-y-4 md:translate-y-8"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-primary/20 blur-[85px] rounded-full z-0 pointer-events-none" />
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-bottom z-10 drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  )
}
