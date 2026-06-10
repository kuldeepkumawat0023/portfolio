"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { FaUser, FaEnvelope, FaTag, FaLock, FaPaperPlane } from "react-icons/fa"

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
              style={{ width: size, height: size, left: `${Math.random() * 100}%`, top: `${startY}%` }}
              animate={{ y: [0, -500], opacity: [0, 0.8, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
            />
          );
        })}
      </div>
      <div className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-background to-transparent z-20" />
      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative group/spotlight h-full w-full ${className}`}
    >
      <motion.div className="absolute -inset-[1px] rounded-[24px] bg-primary/30 opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300 overflow-hidden z-0">
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.4), transparent 80%)` }} />
      </motion.div>
      <div className="relative z-10 h-full rounded-[23px] bg-card/80 backdrop-blur-md border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export function ContactForm() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <FluidSpaceBackground />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl font-extrabold text-foreground mb-8 drop-shadow-sm">Send Me a Message</h2>
            <SpotlightCard>
              <div className="p-8 h-full">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative group/input">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="peer w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-background focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all hover:border-border"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/70 peer-focus:text-primary transition-colors">
                        <FaUser size={14} />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="relative group/input">
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="peer w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-background focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all hover:border-border"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/70 peer-focus:text-primary transition-colors">
                        <FaEnvelope size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative group/input">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="peer w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-background focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all hover:border-border"
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary/70 peer-focus:text-primary transition-colors">
                      <FaTag size={14} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group/input">
                    <textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="peer w-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-background focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all resize-none hover:border-border"
                    />
                    <div className="absolute top-4 left-4 pointer-events-none text-primary/70 peer-focus:text-primary transition-colors">
                      <FaEnvelope size={14} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2">
                    <button className="relative w-full py-4 rounded-xl font-bold text-white overflow-hidden flex items-center justify-center gap-2 group/btn shadow-lg shadow-orange-500/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-transform duration-300 group-hover/btn:scale-105" />
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[glare_1s_ease-in-out_infinite] z-0" />
                      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                        Send Message
                        <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <div className="flex items-center gap-2 mt-2">
                    <FaLock size={12} className="text-primary/80" />
                    <span className="text-xs font-medium text-muted-foreground/80">
                      Your information is safe with me. I will never share your data.
                    </span>
                  </div>
                </form>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <h2 className="text-3xl font-extrabold text-foreground mb-8 drop-shadow-sm">Find Me Here</h2>
            <SpotlightCard className="min-h-[400px]">
              <div className="relative w-full h-full p-2">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden group/map shadow-inner">
                  {/* Overlay styling to make the map blend better */}
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 transition-opacity group-hover/map:opacity-0"></div>
                  
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112046.73278564223!2d77.12648434455855!3d28.643642340331006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 z-0 grayscale-[50%] contrast-125 dark:invert dark:grayscale dark:contrast-100 transition-all duration-500 group-hover/map:grayscale-0 group-hover/map:contrast-100 group-hover/map:dark:invert-0"
                  ></iframe>

                  {/* Map Info Card */}
                  <div className="absolute top-6 left-6 z-20 transition-transform duration-500 group-hover/map:scale-105 group-hover/map:-translate-y-2">
                    <div className="p-4 py-3 bg-white/90 dark:bg-card/90 backdrop-blur-md rounded-xl shadow-lg border border-border/50">
                      <h4 className="font-bold text-foreground text-sm">India</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Available for freelance work</p>
                      <a href="#" className="text-xs font-semibold text-primary mt-2 inline-block hover:underline">
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
