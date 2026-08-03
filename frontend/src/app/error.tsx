"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { RefreshCw, Home, AlertOctagon, ShieldAlert } from "lucide-react";

// Magnetic Button Wrapper
function MagneticButton({ children }: { children: React.ReactNode }) {
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
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isResetting, setIsResetting] = React.useState(false);

  React.useEffect(() => {
    // Log unexpected errors
    console.error("Unhandled Application Error:", error);
  }, [error]);

  const handleReset = () => {
    setIsResetting(true);
    // Execute Next.js reset action with smooth spin animation feedback
    setTimeout(() => {
      reset();
      setIsResetting(false);
    }, 600);
  };

  return (
    <div className="relative py-20 min-h-[70vh] flex items-center justify-center p-6 bg-background overflow-hidden">

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className="relative max-w-xl w-full text-center p-8 md:p-12 rounded-3xl bg-card/80 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden"
      >
        {/* Animated Warning Icon Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shadow-[0_0_30px_rgba(72,162,147,0.25)] relative group"
        >
          <AlertOctagon className="w-10 h-10 transition-transform group-hover:scale-110" />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute inset-0 rounded-2xl bg-primary/20 pointer-events-none"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
        >
          Something Went{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578]">
            Wrong
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed max-w-md mx-auto"
        >
          An unexpected glitch occurred while loading this view. You can try refreshing the state or return to the main dashboard.
        </motion.p>

        {/* Digest / Tech Details if present */}
        {error?.digest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-3 rounded-xl bg-surface-container/60 border border-border/50 font-mono text-xs text-muted-foreground inline-block"
          >
            Error Ref ID: {error.digest}
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton>
            <button
              onClick={handleReset}
              disabled={isResetting}
              className="w-full sm:w-auto relative group overflow-hidden px-7 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 disabled:opacity-80"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#48A293] to-[#368578]" />
              <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
              <span className="relative z-10 flex items-center justify-center gap-2.5">
                <RefreshCw
                  className={`w-5 h-5 ${
                    isResetting ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"
                  }`}
                />
                {isResetting ? "Refreshing..." : "Try Again"}
              </span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <Link href="/" passHref>
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-foreground bg-surface-container/80 hover:bg-surface-container border border-border transition-all flex items-center justify-center gap-2.5 group">
                <Home className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                Return to Home
              </button>
            </Link>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
