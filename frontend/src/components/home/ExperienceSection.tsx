"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll, animate, useInView } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

// Reusable CountUp Component
const CountUpNumber = ({ value }: { value: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  
  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = numMatch ? value.substring(numMatch[0].length) : value;
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  React.useEffect(() => {
    if (isInView && num > 0) {
      animate(count, num, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, num, count]);

  if (!numMatch) return <span>{value}</span>;
  
  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// 3D Tilt Card Component
const TiltGlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Tilt limit to 10 degrees for cards
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    
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
      style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
      className="h-full relative group perspective-[1000px] z-10"
    >
      <GlassCard className={`${className} transform-gpu transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)] group-hover:border-primary/40 overflow-hidden relative backdrop-blur-xl`}>
        {/* Shiny sweep glare */}
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-glare pointer-events-none z-10" />
        
        {/* 3D content wrapper */}
        <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full relative z-20">
          {children}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export function ExperienceSection({ props }: { props: any }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the energy line (Horizontal for desktop)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate width/height for the glowing line based on scroll
  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  if (!props) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="experience" ref={containerRef}>
      
      {/* ── 1. Animated Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 dark:opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
        
        {/* Floating Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-[20%] w-[600px] h-[600px] bg-primary/10 dark:bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/10 rounded-full blur-[100px]"
        />

        {/* Horizontal Floating Experience Nodes (Bubbles) */}
        {typeof window !== 'undefined' && Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full border border-primary/20 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 shadow-[0_0_15px_rgba(249,115,22,0.1)] backdrop-blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              width: Math.random() * 80 + 40, // 40px to 120px
              height: Math.random() * 80 + 40,
            }}
            initial={{ left: "-20%", opacity: 0 }}
            animate={{ 
              left: "110%", 
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 20, // 20s to 40s
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-20">
          <SectionHeading 
            subtitle={props.subtitle || "MY EXPERIENCE"} 
            title={props.title || <>My Professional <span className="text-primary">Journey</span></>} 
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-20">
          
          {/* ─── Experience Timeline Column ─── */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative pt-4 md:pt-12">
              
              {/* ── Glowing Energy Timeline (Desktop) ── */}
              <div className="hidden md:block absolute top-[66px] left-[10%] right-[10%] h-[2px] bg-outline-variant/30 z-0">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-amber-500 to-primary shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  style={{ width: lineWidth }}
                />
              </div>

              {/* ── Glowing Energy Timeline (Mobile) ── */}
              <div className="block md:hidden absolute top-0 bottom-0 left-[23px] w-[2px] bg-outline-variant/30 z-0">
                <motion.div 
                  className="w-full bg-gradient-to-b from-primary via-amber-500 to-primary shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                  style={{ height: lineWidth }}
                />
              </div>
              
              {props.experiences?.map((exp: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.2 }}
                  className="relative z-10 pl-12 md:pl-0"
                >
                  {/* Timeline dot (Mobile & Desktop) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.6, delay: (index * 0.2) + 0.3 }}
                    className="absolute md:top-[-42px] top-6 left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(249,115,22,0.8)] z-10" 
                  />
                  
                  <TiltGlassCard className="p-6 h-full flex flex-col bg-card/80">
                    <span className="text-sm font-bold text-primary mb-2 inline-block px-3 py-1 rounded-full bg-primary/10 w-fit">{exp.period}</span>
                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-muted-foreground font-semibold">{exp.company}</span>
                      {exp.type && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          exp.type === "Full-Time"
                            ? "bg-green-500/10 text-green-500 border-green-500/30"
                            : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                        }`}>
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{exp.description}</p>
                    
                    {/* Staggered Magnetic Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tags.map((tag: string, tagIndex: number) => (
                        <motion.span 
                          key={tag} 
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + 0.4 + (tagIndex * 0.1) }}
                          whileHover={{ y: -3, scale: 1.05 }}
                          className="text-xs font-bold px-3 py-1.5 bg-surface-container hover:bg-primary/20 hover:text-primary transition-colors cursor-default rounded-md text-foreground shadow-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </TiltGlassCard>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* ─── Stats Sidebar ─── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="lg:col-span-1 mt-8 lg:mt-0"
          >
            <div className="glass-panel relative overflow-hidden rounded-3xl p-6 lg:p-8 h-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-6 lg:gap-8 justify-center items-center text-center shadow-2xl border border-primary/20">
              {/* Background abstract shape in stats */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

              {props.stats?.map((stat: any, index: number) => (
                <div key={index} className="relative z-10 group flex flex-col items-center justify-center">
                  <h4 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-2 tracking-tight group-hover:scale-110 transition-transform origin-center ${stat.colorClass || 'text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60'}`}>
                    <CountUpNumber value={stat.value} />
                  </h4>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
