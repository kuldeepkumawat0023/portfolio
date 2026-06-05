"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion"
import { Download, PlayCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/common/Button"
import { HeroImage } from "./HeroImage"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

// Hover Bouncing Text Effect
const HoverText = ({ text, className, isGradient }: { text: string, className?: string, isGradient?: boolean }) => {
  return (
    <span className={`inline-flex flex-wrap ${className || ""}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              whileHover={{ y: -12, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`inline-block origin-bottom ${
                isGradient ? "text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 py-2" : ""
              }`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};
// Magnetic Button Wrapper
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

export function HeroSection({ props }: { props: any }) {
  // Global Mouse Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    }
  };

  // Smooth springs for parallax
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for background elements
  const bgX = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const bgY = useTransform(smoothMouseY, [-1, 1], [-25, 25]);

  const particle1X = useTransform(smoothMouseX, [-1, 1], [50, -50]);
  const particle1Y = useTransform(smoothMouseY, [-1, 1], [50, -50]);

  const particle2X = useTransform(smoothMouseX, [-1, 1], [-70, 70]);
  const particle2Y = useTransform(smoothMouseY, [-1, 1], [-70, 70]);

  // Tech Shapes State for Bottom-to-Top Animation (Replacing Bubbles)
  const [shapes, setShapes] = React.useState<Array<{ id: number, left: string, size: number, delay: number, duration: number, type: number }>>([]);

  React.useEffect(() => {
    // Generate tech shapes only on client to avoid hydration errors
    const generatedShapes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 40 + 20, // 20px to 60px size (larger)
      delay: Math.random() * 5, // Quick staggered delays (0 to 5s)
      duration: Math.random() * 7 + 5, // Faster float (5s to 12s)
      type: Math.floor(Math.random() * 3) // 0: Square, 1: Circle, 2: Diamond
    }));
    setShapes(generatedShapes);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-background"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-y-0 right-0 w-[25%] dark:hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-l-full"
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #FFF8F4 35%, #FFF1EA 70%, #FFE8DD 100%)",
          }}
        />
      </motion.div>

      {/* ── Dark Mode: deep navy / orange-tint right side ── */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-y-0 right-0 w-[25%] hidden dark:block pointer-events-none z-0">
        <div
          className="absolute inset-0 rounded-l-full"
          style={{ background: "linear-gradient(135deg, rgba(251,115,0,0.08) 0%, rgba(251,115,0,0.04) 60%, transparent 100%)" }}
        />
      </motion.div>

      {/* ── Glow orb top-right (light) ── */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-orange-100/60 dark:bg-primary/5 blur-[100px] pointer-events-none z-0" />

      {/* ── Animated floating particles with Parallax ── */}
      <motion.div
        style={{ x: particle1X, y: particle1Y }}
        className="absolute top-24 left-[10%] w-3 h-3 rounded-full bg-primary/40 dark:bg-primary/60 pointer-events-none z-0"
      >
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-full rounded-full" />
      </motion.div>

      <motion.div
        style={{ x: particle2X, y: particle2Y }}
        className="absolute top-40 left-[18%] w-2 h-2 rounded-full bg-orange-300/60 dark:bg-orange-400/40 pointer-events-none z-0"
      >
        <motion.div animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="w-full h-full rounded-full" />
      </motion.div>

      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-40 left-[8%] w-4 h-4 rounded-full bg-primary/20 dark:bg-primary/30 pointer-events-none z-0"
      >
        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-full h-full rounded-full" />
      </motion.div>

      {/* ── Bottom-right rotated diamond with Parallax ── */}
      <motion.div
        style={{ x: particle1X, y: particle1Y }}
        className="absolute -bottom-14 -right-14 md:-bottom-20 md:-right-20 w-[180px] md:w-[240px] h-[180px] md:h-[240px] bg-gradient-to-br from-primary/80 to-orange-400 dark:from-primary/60 dark:to-orange-500 rounded-[40px] rotate-45 pointer-events-none z-0 opacity-90 shadow-2xl"
      />

      {/* ── Animated Floating 3D Tech Shapes (Bottom to Top) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>
        {shapes.map(shape => {
          let borderRadius = "0%";
          let rotateOffset = 0;
          if (shape.type === 1) borderRadius = "50%"; // Circle
          if (shape.type === 2) rotateOffset = 45; // Diamond

          return (
            <motion.div
              key={`shape-${shape.id}`}
              className="absolute bottom-[-100px] border-[2px] border-orange-500/80 dark:border-orange-400/60 shadow-[0_0_25px_rgba(249,115,22,0.6)]"
              style={{
                left: shape.left,
                width: shape.size,
                height: shape.size,
                borderRadius,
                background: "linear-gradient(135deg, rgba(249,115,22,0.3) 0%, rgba(249,115,22,0.05) 100%)",
                backdropFilter: "blur(4px)",
                transformStyle: "preserve-3d"
              }}
              initial={{ y: '10vh', rotateX: 0, rotateY: 0, rotateZ: rotateOffset, opacity: 0 }}
              animate={{
                y: ['10vh', '-120vh'],
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [rotateOffset, rotateOffset + 360],
                opacity: [0, 1, 0]
              }}
              transition={{
                y: { duration: shape.duration, repeat: Infinity, ease: "linear", delay: shape.delay },
                rotateX: { duration: shape.duration * 0.8, repeat: Infinity, ease: "linear", delay: shape.delay },
                rotateY: { duration: shape.duration * 1.2, repeat: Infinity, ease: "linear", delay: shape.delay },
                rotateZ: { duration: shape.duration, repeat: Infinity, ease: "linear", delay: shape.delay },
                opacity: { duration: shape.duration, repeat: Infinity, ease: "linear", delay: shape.delay }
              }}
            />
          );
        })}
      </div>

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

            {/* 3D Reveal Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[1.1] tracking-tight mb-6 overflow-visible py-4 drop-shadow-xl"
            >
              <motion.div
                initial={{ y: 100, rotateX: -90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                style={{ transformOrigin: "bottom center" }}
                className="cursor-default"
              >
                <HoverText 
                  text={props.headingPart1 || "Full Stack"} 
                  className="text-slate-900 dark:text-white transition-colors duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ y: 100, rotateX: -90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
                style={{ transformOrigin: "bottom center" }}
                className="relative mt-2 cursor-default"
              >
                <HoverText 
                  text={props.headingPart2 || "Developer"} 
                  isGradient={true}
                  className="-ml-1" // minor adjustment for the gradient letters padding
                />
                {/* Glint effect on text */}
                <motion.span
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute top-0 bottom-0 w-[20%] bg-gradient-to-r from-transparent via-white to-transparent opacity-30 skew-x-12 pointer-events-none"
                />
              </motion.div>
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

            {/* Magnetic Buttons */}
            {props.buttons?.length > 0 && (
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 z-50">
                {props.buttons.map((btn: any, i: number) => {
                  const isPrimary = btn.variant === "gradient" || i === 0;
                  return (
                    <MagneticButton key={i}>
                      <Button
                        variant={btn.variant || "outline"}
                        className={
                          isPrimary
                            ? "rounded-full px-8 py-7 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 transition-all flex items-center gap-2 group relative overflow-hidden"
                            : "rounded-full px-6 py-6 text-base font-bold border-2 border-primary/30 dark:border-primary/40 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all flex items-center gap-3 group relative overflow-hidden"
                        }
                        asChild={!!btn.href}
                      >
                        {btn.href ? (
                          <a href={btn.href}>
                            {/* Ripple overlay */}
                            <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-active:scale-150 rounded-full transition-transform duration-500 ease-out origin-center" />
                            <span className="relative z-10">{btn.text}</span>
                            {btn.icon && (
                              <span className={isPrimary ? "relative z-10 group-hover:translate-x-1 transition-transform" : "relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all"}>
                                {btn.icon}
                              </span>
                            )}
                          </a>
                        ) : (
                          <>
                            <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 group-active:scale-150 rounded-full transition-transform duration-500 ease-out origin-center" />
                            <span className="relative z-10">{btn.text}</span>
                            {btn.icon && (
                              <span className={isPrimary ? "relative z-10 group-hover:translate-x-1 transition-transform" : "relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all"}>
                                {btn.icon}
                              </span>
                            )}
                          </>
                        )}
                      </Button>
                    </MagneticButton>
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
                <div className="flex gap-2 z-50">
                  {props.socialLinks.map((social: any, i: number) => (
                    <MagneticButton key={i}>
                      <a href={social.href} aria-label={social.label} className="w-10 h-10 rounded-xl flex items-center justify-center bg-muted hover:bg-primary hover:-translate-y-1 hover:text-white text-muted-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/30">
                        {social.icon}
                      </a>
                    </MagneticButton>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          <div>
            {/* ─── Image Column ─── */}
            <HeroImage props={props} mouseX={smoothMouseX} mouseY={smoothMouseY} />
          </div>

        </div>
      </div>
    </section>
  )
}
