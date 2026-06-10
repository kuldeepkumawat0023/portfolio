"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate, useInView } from "framer-motion"
import Link from "next/link"

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
      <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute -inset-[1px] rounded-[32px] bg-primary/20 transition-opacity duration-300 overflow-hidden z-0">
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.4), transparent 80%)` }} />
      </motion.div>
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10 h-full rounded-[31px] bg-card/80 backdrop-blur-md border border-border shadow-lg p-6 md:p-8 flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

const FluidSpaceBackground = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background dark:bg-[#020617] transition-colors duration-500">
      {/* 1. Fluid Water Orbs (Lava Lamp Effect) */}
      <div className="absolute inset-0 opacity-40 dark:opacity-40 opacity-60 mix-blend-multiply dark:mix-blend-screen filter blur-[80px]">
        <motion.div
          animate={{
            x: ["0%", "50%", "0%"],
            y: ["0%", "30%", "0%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-primary/40"
        />
        <motion.div
          animate={{
            x: ["0%", "-40%", "0%"],
            y: ["0%", "40%", "0%"],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[70vh] rounded-full bg-indigo-600/30"
        />
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[40vw] h-[40vh] rounded-full bg-cyan-600/20"
        />
      </div>

      {/* 2. Space Starfield */}
      <div className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {isClient && Array.from({ length: 70 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const startY = Math.random() * 100;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] dark:bg-white dark:shadow-[0_0_8px_#fff]"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${startY}%`,
              }}
              animate={{
                y: [0, -500],
                opacity: [0, Math.random() * 0.8 + 0.2, 0]
              }}
              transition={{
                y: { duration: Math.random() * 30 + 30, repeat: Infinity, ease: "linear" },
                opacity: { duration: Math.random() * 5 + 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          );
        })}
      </div>

      {/* Top/Bottom Gradient Fades */}
      <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-background to-transparent z-20" />
      <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

// Typewriter Heading Component
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

export function ServicesGrid({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <FluidSpaceBackground />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {props.services?.map((service: any, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <Tilt3DCard>
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex flex-col sm:flex-row gap-5 mb-4">
                  {/* Number + Icon */}
                  <div className="flex items-center sm:flex-col gap-3 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                      {service.id}
                    </div>

                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-foreground mb-3 tracking-wide drop-shadow-[0_0_5px_rgba(249,115,22,0.3)]">
                      {service.title}
                    </h4>

                    <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-5 border-l-2 border-primary/30 pl-3">
                        {`> ${service.description}`}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="mt-auto flex justify-end">
                  <Link
                    href={service.linkHref || "#"}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange-500 transition-colors bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                  >
                    {service.linkText}
                    {service.linkIcon}
                  </Link>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}