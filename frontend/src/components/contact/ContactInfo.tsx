"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"

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
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.4), transparent 80%)` }} />
      </motion.div>
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10 h-full rounded-[23px] bg-card/80 backdrop-blur-md border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export function ContactInfo({ props }: { props: any }) {
  if (!props || !props.items) return null;

  return (
    <section className="pb-20 relative bg-background z-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt3DCard>
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 h-full">
                  <div style={{ transform: "translateZ(20px)" }} className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/20">
                    {item.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 style={{ transform: "translateZ(15px)" }} className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                    <p style={{ transform: "translateZ(10px)" }} className="text-xs font-medium text-muted-foreground mb-3">{item.description}</p>
                    <p style={{ transform: "translateZ(25px)" }} className={`text-sm font-bold break-all ${item.highlight ? "text-orange-500" : "text-foreground"}`}>
                      {item.value}
                    </p>
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
