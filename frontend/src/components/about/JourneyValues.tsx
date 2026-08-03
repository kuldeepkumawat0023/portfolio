"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"
import { Briefcase, Code, Monitor, BookOpen, Handshake, Lightbulb, ArrowRight } from "lucide-react"

// 3D Tilt Card with Mouse-Tracking Glow Border
const TiltGlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
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
      <motion.div variants={{ initial: { opacity: 0.5 }, hover: { opacity: 1 } }} className="absolute -inset-[2px] rounded-2xl bg-foreground/5 transition-opacity duration-500 overflow-hidden">
        <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute inset-0 z-0 transition-opacity duration-300" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(72, 162, 147, 0.4), transparent 80%)` }} />

      </motion.div>
      <div className={`relative z-10 h-full rounded-[14px] bg-card/90 backdrop-blur-xl border border-border/50 ${className}`}>
        <div style={{ transform: "translateZ(30px)" }} className="relative h-full z-20">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export function JourneyValues({ props }: { props: any }) {
  const [bubbles, setBubbles] = React.useState<Array<{id: number, left: string, size: number, delay: number, duration: number, color: string}>>([]);

  React.useEffect(() => {
    const bubbleColors = ["rgba(59, 130, 246, 0.5)", "rgba(168, 85, 247, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(249, 115, 22, 0.5)", "rgba(20, 184, 166, 0.5)", "rgba(234, 179, 8, 0.5)"];
    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i, left: `${Math.random() * 100}%`, size: Math.random() * 60 + 20, delay: Math.random() * 5, duration: Math.random() * 10 + 10, color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)]
    }));
    setBubbles(generatedBubbles);
  }, []);

  if (!props) return null;

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {bubbles.map(bubble => (
            <motion.div key={`bubble-${bubble.id}`} className="absolute bottom-[-150px] rounded-full shadow-lg" style={{ left: bubble.left, width: bubble.size, height: bubble.size, background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), ${bubble.color})`, backdropFilter: "blur(4px)" }} initial={{ y: '10vh', x: 0, opacity: 0 }} animate={{ y: ['10vh', '-120vh'], x: [0, Math.random() * 100 - 50, 0, Math.random() * 100 - 50], opacity: [0, 1, 0] }} transition={{ y: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay }, x: { duration: bubble.duration * 0.7, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay } }} />
          ))}
        </div>
      </div>


      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Journey */}
          <div>
            <SectionHeading 
              subtitle={props.journeySubtitle || "MY JOURNEY"}
              title={props.journeyTitle || <>My Professional <span className="text-primary">Journey</span></>}
            />
            
            <div className="mt-10 relative">
              {/* Vertical Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-[27px] top-4 bottom-10 w-0.5 bg-border z-0 origin-top" 
              />
              
              <div className="flex flex-col gap-10 relative z-10">
                {props.experiences?.map((exp: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                    className="flex gap-6 group relative"
                  >
                    {/* Timeline Node */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring", bounce: 0.6 }}
                        className="w-4 h-4 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--color-primary),0.5)] transition-all duration-300" 
                      />
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="mt-4 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center -ml-[20px] group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                      >
                        {exp.icon}
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-xs font-bold text-primary mb-1 block uppercase tracking-wider">{exp.period}</span>
                      <h4 className="text-lg font-bold text-foreground mb-2">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {props.journeyButton && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (props.experiences?.length || 3) * 0.15 + 0.4 }}
                  className="mt-8 ml-[60px]"
                >
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={props.journeyButton.href || "#"} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-all border border-border hover:border-primary bg-card px-6 py-3 rounded-xl shadow-sm hover:shadow-primary/20"
                  >
                    {props.journeyButton.text}
                    {props.journeyButton.icon}
                  </motion.a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <SectionHeading 
              subtitle={props.valuesSubtitle || "WHAT I BELIEVE IN"}
              title={props.valuesTitle || <>My Core <span className="text-primary">Values</span></>}
            />
            
            <div className="mt-10 flex flex-col gap-4">
                {props.values?.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring", bounce: 0.4 }}
                >
                  <TiltGlowCard>
                    <div className="p-6 flex gap-5 items-start cursor-pointer group">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </TiltGlowCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
