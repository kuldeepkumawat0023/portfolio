"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring, Variants } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Mail, Phone, MapPin } from "lucide-react"

// Entrance Animation Variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 },
  },
}

// Magnetic Button Component
function MagneticSubmitButton({ text }: { text: string }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      style={{ x: springX, y: springY }}
      type="submit"
      className="relative group overflow-hidden px-8 py-4 rounded-xl font-bold mt-4 shadow-lg w-full md:w-auto self-start text-white shadow-[0_0_20px_rgba(72,162,147,0.3)] transition-all hover:shadow-[0_0_25px_rgba(72,162,147,0.6)] z-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#48A293] to-[#368578]" />

      <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
      </span>
    </motion.button>
  );
}

export function ContactSection({ props }: { props: any }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  if (!props) return null;

  return (
    <section className="py-24 relative bg-background overflow-hidden" id="contact">
      
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:40px_40px] mask-image:linear-gradient(to_bottom,transparent,black,transparent)" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -right-[10%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px]"
        />

        {/* Fade Out Edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading 
            subtitle={props.subtitle || "LET'S WORK TOGETHER"} 
            title={props.title || "Have a project in mind?"} 
            className="mb-0 text-foreground mx-auto"
          />
        </div>

        {/* ── 3D GLOWING CONTAINER ── */}
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative group/contact z-20"
        >
          {/* Glowing Border Spotlight */}
          <div className="absolute -inset-[2px] rounded-3xl bg-foreground/5 transition duration-500 overflow-hidden">
            <motion.div
              className="absolute inset-0 z-0 opacity-0 group-hover/contact:opacity-100 transition duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(72, 162, 147, 0.4),
                    transparent 80%
                  )
                `
              }}
            />
          </div>

          <div className="bg-card/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-border/50 relative z-10 shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              
              {/* ── LEFT PANEL (INFO) ── */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#48A293] to-[#368578] p-10 md:p-12 text-white relative overflow-hidden group/info">

                {/* Cyber Scan-line on Hover */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-full group-hover/info:animate-scanline opacity-0 group-hover/info:opacity-100 pointer-events-none mix-blend-overlay z-0" />
                
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-0" />
                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[50px] z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-white">Let's Connect</h3>
                  <p className="text-white/90 mb-12 text-lg leading-relaxed">
                    {props.description}
                  </p>

                  <div className="flex flex-col gap-8 mt-auto">
                    {props.contactDetails?.map((detail: any, index: number) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.1), type: "spring" }}
                        className="flex items-center gap-5 group/item"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0 group-hover/item:scale-110 group-hover/item:bg-white/20 transition-all shadow-lg">
                          {detail.icon}
                        </div>
                        <span className="font-medium text-lg text-white group-hover/item:text-orange-100 transition-colors">{detail.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT PANEL (FORM) ── */}
              <div className="lg:col-span-3 p-10 md:p-16 bg-surface-container/50">
                <motion.form 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-6" 
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="flex flex-col gap-2 relative group/input">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">{props.form?.nameLabel || "Your Name"}</label>
                      <input 
                        type="text" 
                        id="name"
                        className="rounded-xl px-5 py-4 bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(72,162,147,0.15)] transition-all" 
                        placeholder={props.form?.namePlaceholder || "John Doe"}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col gap-2 relative group/input">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">{props.form?.emailLabel || "Your Email"}</label>
                      <input 
                        type="email" 
                        id="email"
                        className="rounded-xl px-5 py-4 bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(72,162,147,0.15)] transition-all" 
                        placeholder={props.form?.emailPlaceholder || "john@example.com"}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants} className="flex flex-col gap-2 relative group/input">
                    <label htmlFor="subject" className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">{props.form?.subjectLabel || "Subject"}</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="rounded-xl px-5 py-4 bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(72,162,147,0.15)] transition-all" 
                      placeholder={props.form?.subjectPlaceholder || "Project Inquiry"}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2 relative group/input">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">{props.form?.messageLabel || "Your Message"}</label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="rounded-xl px-5 py-4 bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(72,162,147,0.15)] transition-all resize-none" 

                      placeholder={props.form?.messagePlaceholder || "Tell me about your project..."}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-4 flex">
                    <MagneticSubmitButton text={props.form?.buttonText || "Send Message 🚀"} />
                  </motion.div>
                </motion.form>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
