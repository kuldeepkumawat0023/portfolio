"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from "framer-motion"

// 3D Tilt Badge Component
function TiltBadge({ badge, index, badgeX, badgeY }: { badge: any, index: number, badgeX: MotionValue<number>, badgeY: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate rotation based on cursor position relative to center
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15; // Max 15deg tilt
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    
    x.set(rotateY);
    y.set(rotateX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Combine Parallax transforms with continuous floating animation
  return (
    <motion.div
      ref={ref}
      style={{ 
        x: badgeX, 
        y: badgeY,
        rotateX: springY,
        rotateY: springX,
        perspective: 1000
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
      className={`absolute ${badge.positionClass} z-20 scale-[0.6] sm:scale-75 md:scale-100 origin-center`}
    >
      <motion.div
        animate={{ y: badge.animateY }}
        transition={{ repeat: Infinity, duration: badge.duration, ease: "easeInOut", delay: badge.delay }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-24 h-24 bg-card/80 backdrop-blur-md px-2 py-3 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-2xl dark:shadow-none border border-border cursor-pointer hover:shadow-primary/20 hover:border-primary/50 transition-colors"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="w-10 h-10 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
          {badge.icon}
        </div>
        <span className="text-[10px] font-bold text-foreground mt-1" style={{ transform: "translateZ(20px)" }}>
          {badge.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function HeroImage({ props, mouseX, mouseY }: { props?: any, mouseX?: any, mouseY?: any }) {
  const image = props?.image;
  const imageAlt = props?.imageAlt;
  const badges = props?.badges || [];

  // Fallback motion values if props don't provide them
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const mX = mouseX || fallbackX;
  const mY = mouseY || fallbackY;

  // Parallax calculations
  // Main image moves slightly opposite to mouse
  const imgX = useTransform(mX, [-1, 1], [15, -15]);
  const imgY = useTransform(mY, [-1, 1], [15, -15]);

  // Badges move more to create depth
  const badgeX = useTransform(mX, [-1, 1], [-35, 35]);
  const badgeY = useTransform(mY, [-1, 1], [-35, 35]);

  return (
    <div
      className="relative lg:h-[620px] w-full max-w-[380px] sm:max-w-[450px] md:max-w-none mx-auto flex items-center justify-center mt-8 md:mt-0 perspective-[1000px]"
    >
      {/* ── Animated orange accent dots with parallax ── */}
      <motion.div
        style={{ x: badgeX, y: badgeY }}
        className="absolute bottom-[28%] left-[27%] z-10 pointer-events-none flex flex-col gap-1"
      >
        <motion.div animate={{ scale: [1, 1.25, 1], rotate: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}>
            <div className="w-5 h-5 rounded-full bg-primary/70" />
            <div className="w-3 h-3 rounded-full bg-primary/40 self-end" />
        </motion.div>
      </motion.div>

      {/* ── Soft bottom glow ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-32 bg-primary/12 blur-[65px] rounded-full z-0 pointer-events-none" />

      {/* ── Person image with Parallax and Glitch/Mask Reveal ── */}
      <motion.div 
        style={{ x: imgX, y: imgY }}
        initial={{ clipPath: "circle(0% at 50% 100%)", opacity: 0 }}
        animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[580px] lg:h-[620px] z-10 scale-100 sm:scale-110 lg:scale-[1.4] origin-bottom translate-y-0 sm:translate-y-4 md:translate-y-8"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-primary/15 blur-[80px] rounded-full z-0 pointer-events-none" />
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain object-bottom z-10 drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Floating 3D Tilt badges with Parallax */}
      {badges.map((badge: any, index: number) => (
        <TiltBadge 
          key={index} 
          badge={badge} 
          index={index} 
          badgeX={badgeX} 
          badgeY={badgeY} 
        />
      ))}

    </div>
  )
}
