"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"

// 3D Tilt Card with Mouse-Tracking Glow Border
const TiltGlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  // Spotlight Position Values for Glow Border
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Spotlight position relative to card
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Tilt calculation
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
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
      whileHover="hover"
      initial="initial"
      style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
      className="h-full relative z-10 hover:z-50 perspective-[1000px]"
    >
      {/* ── Glowing Border Layer ── */}
      <motion.div 
        variants={{
          initial: { opacity: 0.5 },
          hover: { opacity: 1 }
        }}
        className="absolute -inset-[2px] rounded-2xl bg-foreground/5 transition-opacity duration-500 overflow-hidden"
      >
        <motion.div
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(249, 115, 22, 0.6),
                transparent 80%
              )
            `
          }}
        />
      </motion.div>

      {/* ── Inner Card Content ── */}
      <div 
        className={`relative z-10 h-full rounded-[14px] bg-card/90 backdrop-blur-xl border border-border/50 ${className}`}
      >
        <div style={{ transform: "translateZ(30px)" }} className="relative h-full z-20 p-5 flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export function ServicesSection({ props }: { props: any }) {
  const [bubbles, setBubbles] = React.useState<Array<{id: number, left: string, size: number, delay: number, duration: number, color: string}>>([]);

  React.useEffect(() => {
    const bubbleColors = [
      "rgba(59, 130, 246, 0.5)", // Blue
      "rgba(168, 85, 247, 0.5)", // Purple
      "rgba(236, 72, 153, 0.5)", // Pink
      "rgba(249, 115, 22, 0.5)",  // Orange
      "rgba(20, 184, 166, 0.5)",  // Teal
      "rgba(234, 179, 8, 0.5)"    // Yellow
    ];

    // Generate bubbles only on client to avoid hydration errors
    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => {
      const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 60 + 20, // 20px to 80px size
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10, // 10s to 20s float time
        color: color
      };
    });
    setBubbles(generatedBubbles);
  }, []);

  if (!props) return null;

  return (
    <section className="py-24 relative bg-background overflow-hidden" id="services">
      
      {/* ── BOTTOM-TO-TOP BUBBLES BACKGROUND ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
        
        {/* Giant Purple Nebula (Slow Float) */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-[10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[150px]"
        />
        {/* Giant Orange Nebula (Slow Float) */}
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-[10%] w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-[120px]"
        />

        {/* Fade Out Edges (Placed behind bubbles so they remain visible in Light Mode) */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />

        {/* ── Animated Floating Bubbles (Bottom to Top) ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {bubbles.map(bubble => (
            <motion.div
              key={`bubble-${bubble.id}`}
              className="absolute bottom-[-150px] rounded-full shadow-lg"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), ${bubble.color})`,
                backdropFilter: "blur(4px)",
              }}
              initial={{ y: '10vh', x: 0, opacity: 0 }}
              animate={{
                y: ['10vh', '-120vh'],
                x: [0, Math.random() * 100 - 50, 0, Math.random() * 100 - 50], // Slight wobble
                opacity: [0, 1, 0]
              }}
              transition={{
                y: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay },
                x: { duration: bubble.duration * 0.7, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay }
              }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        
        {/* ── HEADING ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative">
          <SectionHeading 
            subtitle={props.subtitle || "SERVICES I PROVIDE"} 
            title={props.title || <>How Can I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Help You?</span></>} 
            className="mb-0 text-foreground"
          />
          
          {/* Desktop Button */}
          {props.button && (
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={props.button.href || "#"} 
              className="hidden md:inline-flex relative group items-center justify-center px-8 py-3 text-white font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500" />
              <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
              <span className="relative z-10">{props.button.text}</span>
            </motion.a>
          )}
        </div>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.services?.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltGlowCard>
                <div className="flex flex-col gap-4 h-full">
                  
                  {/* Animated Icon Wrapper */}
                  <motion.div 
                    variants={{
                      initial: { 
                        scale: 1, 
                        rotate: 0,
                        backgroundColor: "rgba(var(--surface-container), 0.5)",
                        borderColor: "rgba(var(--border), 0.5)"
                      },
                      hover: { 
                        scale: 1.2, 
                        rotate: 10,
                        backgroundColor: "rgba(249, 115, 22, 0.1)",
                        borderColor: "rgba(249, 115, 22, 0.5)"
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg relative border transition-colors"
                  >
                    {/* Continuous slow float for icon */}
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>
                  
                  {/* Text Content */}
                  <div className="flex-grow">
                    <motion.h3 
                      variants={{
                        initial: { color: "var(--foreground)" },
                        hover: { color: "#f97316" } // orange-500
                      }}
                      className="text-lg font-bold mb-2 transition-colors"
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  
                  {/* Subtle decorative line */}
                  <motion.div 
                    variants={{
                      initial: { width: "3rem", background: "rgba(var(--border), 0.5)" },
                      hover: { width: "100%", background: "linear-gradient(to right, #f97316, #f59e0b)" } // orange-500 to amber-500
                    }}
                    className="h-1 rounded-full mt-auto" 
                  />
                </div>
              </TiltGlowCard>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Button */}
        {props.button && (
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href={props.button.href || "#"} 
            className="md:hidden mt-12 flex relative group items-center justify-center px-8 py-4 text-white font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500" />
            <span className="relative z-10">{props.button.text}</span>
          </motion.a>
        )}

      </div>
    </section>
  )
}
