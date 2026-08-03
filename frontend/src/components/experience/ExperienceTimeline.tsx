"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"

const FluidSpaceBackground = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background dark:bg-[#020617] transition-colors duration-500">
      {/* 1. Fluid Water Orbs */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen filter blur-[80px]">
        <motion.div
          animate={{ x: ["0%", "50%", "0%"], y: ["0%", "30%", "0%"], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-primary/40"
        />
        <motion.div
          animate={{ x: ["0%", "-40%", "0%"], y: ["0%", "40%", "0%"], scale: [1, 1.5, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[70vh] rounded-full bg-indigo-600/30"
        />
      </div>

      {/* 2. Space Starfield */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {isClient && Array.from({ length: 50 }).map((_, i) => {
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
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          );
        })}
      </div>
      <div className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-background to-transparent z-20" />
      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

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
      className={`relative z-10 hover:z-50 perspective-[1000px] h-full w-full ${className}`}
    >
      <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute -inset-[1px] rounded-[24px] bg-primary/30 transition-opacity duration-300 overflow-hidden z-0">
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(72, 162, 147, 0.4), transparent 80%)` }} />

      </motion.div>
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10 h-full rounded-[23px] bg-card/80 backdrop-blur-md border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export function ExperienceTimeline({ props }: { props: any }) {
  if (!props || !props.experiences) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <FluidSpaceBackground />
      
      <div className="container max-w-5xl mx-auto px-4 md:px-6 w-full relative z-20">
        
        <SectionHeading 
          subtitle={props.subtitle || "MY PROFESSIONAL JOURNEY"} 
          title={props.title || <>Where I've <span className="text-primary">Worked & Grown</span></>} 
          className="text-center"
        />

        <div className="mt-20 relative">
          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0" />
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-px bg-border z-0" />

          <div className="flex flex-col gap-12">
            {props.experiences.map((exp: any, index: number) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center group">
                  
                  {/* Left Side Content (or top on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start order-2 md:order-1'}`}
                  >
                    {isEven ? (
                      <div className="hidden md:block text-right pr-8 w-full">
                        <span className="font-bold text-primary text-lg tracking-wider block drop-shadow-sm">{exp.period}</span>
                      </div>
                    ) : (
                      <Tilt3DCard className="ml-14 md:ml-0">
                        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full p-6 md:p-8">
                          <h3 className="text-xl font-bold text-foreground mb-1 drop-shadow-sm">{exp.role}</h3>
                          <h4 style={{ transform: "translateZ(20px)" }} className="text-sm font-semibold text-primary mb-4">{exp.company}</h4>
                          <p style={{ transform: "translateZ(10px)" }} className="text-sm text-muted-foreground leading-relaxed mb-6">
                            {exp.description}
                          </p>
                          <div style={{ transform: "translateZ(25px)" }} className="flex flex-wrap gap-2">
                            {exp.tags?.map((tag: string) => (
                              <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground border border-border">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Tilt3DCard>
                    )}
                  </motion.div>

                  {/* Center Node */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-[3px] border-primary shadow-lg text-primary z-20 group-hover:scale-125 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Right Side Content (or bottom on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] flex items-center ${isEven ? 'md:justify-start order-2' : 'md:justify-end order-1 md:order-2'}`}
                  >
                    {isEven ? (
                      <Tilt3DCard className="ml-14 md:ml-0 mt-2 md:mt-0">
                        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full p-6 md:p-8">
                          <div className="md:hidden mb-4">
                            <span className="font-bold text-primary text-sm tracking-wider block drop-shadow-sm">{exp.period}</span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1 drop-shadow-sm">{exp.role}</h3>
                          <h4 style={{ transform: "translateZ(20px)" }} className="text-sm font-semibold text-primary mb-4">{exp.company}</h4>
                          <p style={{ transform: "translateZ(10px)" }} className="text-sm text-muted-foreground leading-relaxed mb-6">
                            {exp.description}
                          </p>
                          <div style={{ transform: "translateZ(25px)" }} className="flex flex-wrap gap-2">
                            {exp.tags?.map((tag: string) => (
                              <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground border border-border">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Tilt3DCard>
                    ) : (
                      <div className="hidden md:block text-left pl-8 w-full">
                        <span className="font-bold text-primary text-lg tracking-wider block drop-shadow-sm">{exp.period}</span>
                      </div>
                    )}
                    {/* Mobile Period when odd */}
                    {!isEven && (
                      <div className="md:hidden absolute top-[-30px] left-14">
                        <span className="font-bold text-primary text-sm tracking-wider block drop-shadow-sm">{exp.period}</span>
                      </div>
                    )}

                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
