"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeSplashProps {
  onComplete?: () => void;
}

// Generate random particles for Thanos snap disintegration effect
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 600, // scatter wider
    y: (Math.random() - 0.7) * 450, // scatter upwards
    size: Math.random() * 7 + 2, // particle size
    delay: Math.random() * 0.5, // stagger disintegration
    duration: 1.0 + Math.random() * 0.8,
    color: i % 3 === 0 ? "#ff7e1d" : i % 3 === 1 ? "#e11d48" : "#ffffff",
  }));
};

export function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [phase, setPhase] = useState<"enter" | "shine" | "snap" | "done">("enter");
  const [particles] = useState(() => generateParticles(80));

  useEffect(() => {
    // Phase 1 -> Phase 2 (Shine beam expand) - Give user time to read text (1.6s)
    const t1 = setTimeout(() => {
      setPhase("shine");
    }, 1600);

    // Phase 2 -> Phase 3 (Thanos Snap Disintegration) - Let shine beam sweep (3.2s)
    const t2 = setTimeout(() => {
      setPhase("snap");
    }, 3400);

    // Phase 3 -> Finish - Let particles dissolve (4.8s)
    const t3 = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="welcome-splash-cinematic"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050811] text-white overflow-hidden select-none px-4 sm:px-8"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#ff7e1d]/30 via-[#e11d48]/25 to-[#ff7e1d]/30 rounded-full blur-[150px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
            {/* Cinematic Single Line Text Block matching reference image */}
            <div className="relative inline-block overflow-visible py-6 max-w-full">
              {/* Text Container: Disintegrates during Thanos Snap */}
              <AnimatePresence>
                {phase !== "snap" && (
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{
                      opacity: 0,
                      scale: 1.08,
                      filter: "blur(14px)",
                      transition: { duration: 0.7, ease: "easeInOut" },
                    }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight flex flex-row flex-nowrap items-center justify-center gap-x-3 sm:gap-x-5 whitespace-nowrap"
                  >
                    {/* Welcome to */}
                    <span className="text-white font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                      Welcome to
                    </span>

                    {/* My Portfolio in vibrant brand gradient */}
                    <span className="bg-gradient-to-r from-[#ff7e1d] via-[#f43f5e] to-[#e11d48] bg-clip-text text-transparent font-black drop-shadow-[0_0_40px_rgba(255,126,29,0.5)]">
                      My Portfolio
                    </span>

                  </motion.h1>
                )}
              </AnimatePresence>

              {/* Center-out Shine Beam Animation */}
              <div className="relative w-full flex justify-center items-center mt-4 h-1.5 overflow-visible">
                {phase !== "snap" && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={
                      phase === "shine" || phase === "enter"
                        ? { scaleX: [0, 1.25, 1], opacity: [0, 1, 0.85] }
                        : { opacity: 0 }
                    }
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-[4px] rounded-full bg-gradient-to-r from-transparent via-[#ff7e1d] to-transparent shadow-[0_0_25px_#ff7e1d]"
                  />
                )}

                {/* Sweep Shine Glare Beam moving Center -> Left & Right */}
                {(phase === "shine" || phase === "enter") && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ delay: 0.3, duration: 1.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-[5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_#ffffff]"
                  />
                )}
              </div>
            </div>

            {/* Thanos Snap Particles Burst Effect */}
            {phase === "snap" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{
                      x: (Math.random() - 0.5) * 120,
                      y: (Math.random() - 0.5) * 40,
                      opacity: 1,
                      scale: 1,
                    }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      opacity: [1, 0.8, 0],
                      scale: [1, p.size / 2, 0],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: p.duration,
                      delay: p.delay,
                      ease: "easeOut",
                    }}
                    style={{
                      width: `${p.size}px`,
                      height: `${p.size}px`,
                      backgroundColor: p.color,
                      boxShadow: `0 0 12px ${p.color}`,
                    }}
                    className="absolute rounded-full"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
