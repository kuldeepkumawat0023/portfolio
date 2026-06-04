"use client"

import React from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Home, AlertTriangle } from 'lucide-react'

// Magnetic Button Component (Reusable logic)
function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Magnetic pull strength
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden selection:bg-primary/30">
      
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
        
        {/* Giant Purple Nebula (Slow Float) */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[150px]"
        />
        {/* Giant Orange Nebula (Slow Float) */}
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-[120px]"
        />

        {/* 404 Background Watermark */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute text-[30vw] font-black text-foreground pointer-events-none select-none tracking-tighter"
        >
          404
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
        
        {/* Animated Icon */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mb-8 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
        >
          <AlertTriangle className="w-12 h-12" />
        </motion.div>
        
        {/* Glitching Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            System
          </span>{" "}
          <span className="text-foreground">Error</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-xl"
        >
          The page you're looking for has drifted into the digital void. It might have been deleted, moved, or never existed.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticButton>
            <Link href="/" passHref>
              <button className="relative group overflow-hidden px-8 py-4 rounded-xl font-bold shadow-lg text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500" />
                <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Home className="w-5 h-5" />
                  Return to Base
                </span>
              </button>
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </div>
  )
}
