"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate, useInView } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"

// 3D Tilt Card Component
const Tilt3DCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    x.set(rotateY);
    y.set(rotateX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover="hover"
      initial="initial"
      style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
      className={`relative z-10 hover:z-50 perspective-[1000px] h-full ${className}`}
    >
      <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute -inset-[1px] rounded-2xl bg-primary/20 transition-opacity duration-300 overflow-hidden z-0">
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.4), transparent 80%)` }} />
      </motion.div>
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10 h-full rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-lg p-6 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

// Hacker Style Counter Component
const HackingCounter = ({ target, duration = 1.5 }: { target: number, duration?: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      if (progress < 1) {
        // Scramble with random numbers during progress
        setValue(Math.floor(Math.random() * 100));
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        // Lock on target
        setValue(target);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return <span ref={ref} className="font-mono">{value}</span>;
};

// Skills Background (Like AboutSection)
const SkillsBackground = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Giant Scrolling Watermark */}
      <div className="absolute top-[10%] left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap text-[12rem] md:text-[18rem] font-black leading-none w-max"
        >
          <span className="pr-16">SKILLS • EXPERTISE • TECHNOLOGIES •</span>
          <span className="pr-16">SKILLS • EXPERTISE • TECHNOLOGIES •</span>
        </motion.div>
      </div>

      {/* Floating Cyber Particles */}
      {isClient && Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full z-0"
          initial={{
            opacity: 0,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * 800 + 200
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [null, Math.random() * -300 - 100]
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      {/* Morphing Holographic Blob */}
      <motion.div
        animate={{
          borderRadius: ["40% 60% 70% 30%", "30% 70% 50% 50%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
          rotate: [0, 90, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-orange-400/10 to-primary/10 blur-[60px] z-0 pointer-events-none"
      />
    </div>
  );
};

const TypewriterHeading = ({ title1, title2 }: { title1: string, title2: string }) => {
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [phase, setPhase] = React.useState(0); // 0 = idle, 1 = typing 1, 2 = typing 2, 3 = done
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (isInView && phase === 0) setPhase(1);
  }, [isInView, phase]);

  React.useEffect(() => {
    if (phase === 1) {
      let i = 0;
      const interval = setInterval(() => {
        setText1(title1.slice(0, i + 1));
        i++;
        if (i > title1.length) {
          clearInterval(interval);
          setPhase(2);
        }
      }, 50);
      return () => clearInterval(interval);
    } else if (phase === 2) {
      let i = 0;
      const interval = setInterval(() => {
        setText2(title2.slice(0, i + 1));
        i++;
        if (i > title2.length) {
          clearInterval(interval);
          setPhase(3);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [phase, title1, title2]);

  return (
    <h2 ref={ref} className="text-4xl md:text-5xl font-black text-foreground mb-6 font-mono">
      {text1} <span className="text-primary">{text2}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[12px] h-[40px] bg-primary ml-2 align-middle"
      />
    </h2>
  );
};

export function SkillsList({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <SkillsBackground />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            {props.subtitle}
          </span>
          <TypewriterHeading title1={props.title[0]} title2={props.title[1]} />
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm sm:text-base border-l-2 border-primary/30 pl-4 text-left">
            {`> ${props.description}`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {props.skills?.map((skill: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <Tilt3DCard>
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="text-primary drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-foreground text-sm tracking-wide">{skill.name}</span>
                  </div>
                </div>

                <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <span className="text-xs font-bold text-primary flex items-center gap-1 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
                      <HackingCounter target={skill.percentage} duration={1.5} />%
                    </span>
                  </div>
                  <div className="w-full bg-border/50 rounded-full h-1.5 overflow-hidden shadow-inner relative">
                    <motion.div
                      className="bg-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] relative overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                    >
                      {/* Scanning beam effect on progress bar */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
