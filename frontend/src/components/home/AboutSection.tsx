"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, animate, useInView, Variants } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"

// Stats Container Variants for Staggered Animation
const statsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
};

// Word-by-word text reveal variants
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.4 }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } }
};

// CountUp Component
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

export function AboutSection({ props }: { props: any }) {
  // 3D Tilt for Image
  const imgRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  // Section Mouse Tracking for Background Spotlight
  const sectionRef = React.useRef<HTMLElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleImgMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 15;
    
    x.set(rotateY);
    y.set(rotateX);
  };

  const handleImgMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!props) return null;

  const descriptionWords = "I specialize in building interactive, user-friendly, and scalable web applications. I love turning ideas into real-world solutions with clean code and modern technologies.".split(" ");

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      className="py-24 relative overflow-hidden bg-background" 
      id="about"
    >
      {/* ── 1. Mouse-Tracking Spotlight ── */}
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          x: springMouseX,
          y: springMouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* ── 2. Giant Scrolling Watermark ── */}
      <div className="absolute top-[10%] left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap text-[12rem] md:text-[18rem] font-black leading-none w-max"
        >
          <span className="pr-16">ABOUT ME • FULL STACK • CREATOR •</span>
          <span className="pr-16">ABOUT ME • FULL STACK • CREATOR •</span>
        </motion.div>
      </div>

      {/* ── 3. Floating Cyber Particles ── */}
      {Array.from({ length: 15 }).map((_, i) => (
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

      {/* ── 4. Morphing Holographic Blob ── */}
      <motion.div 
        animate={{ 
          borderRadius: ["40% 60% 70% 30%", "30% 70% 50% 50%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
          rotate: [0, 90, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-primary/15 to-[#368578]/10 blur-[60px] z-0 pointer-events-none"
      />

      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── Image Column (Left) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              ref={imgRef}
              onMouseMove={handleImgMouseMove}
              onMouseLeave={handleImgMouseLeave}
              style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
              className="relative w-full aspect-square max-w-md mx-auto mt-8 md:mt-0 group cursor-pointer"
            >
              {/* Dotted pattern - Left */}
              <div
                className="absolute top-16 -left-8 w-24 h-32 z-0 opacity-50"
                style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.5px, transparent 2px)', backgroundSize: '14px 14px', transform: "translateZ(-20px)" }}
              />

              {/* Orange circle - Top */}
              <div className="absolute -top-4 right-1/4 w-16 h-16 rounded-full bg-primary z-0" style={{ transform: "translateZ(-30px)" }} />

              {/* Main Image Frame with Cyberpunk Glitch Hover */}
              <motion.div 
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative z-10 overflow-hidden flex items-center justify-center rounded-[32px] border border-border shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black"
                style={{ transform: "translateZ(20px)" }}
              >
                <Image
                  src={props.imageSrc || "/images/home/user1.png"}
                  alt="About Me"
                  fill
                  className="object-cover object-bottom transition-all duration-700 ease-out"
                />
                {/* Cyberpunk Glitch Overlay (Active on hover briefly) */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:animate-glitch pointer-events-none" />
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div 
                initial={{ z: 60 }}
                animate={{ y: [-10, 10, -10], z: 60 }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[75%] sm:top-[60%] left-2 sm:-left-12 lg:-left-24 -translate-y-1/2 glass-card bg-card/95 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl z-50 flex flex-col items-center shadow-[0_0_20px_rgba(72,162,147,0.15)] border border-primary/30"
              >
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#5BBBB0] via-[#48A293] to-[#368578]">

                  <CountUpNumber value={props.experienceYears || "2+"} />
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center mt-1 leading-tight" dangerouslySetInnerHTML={{ __html: props.experienceLabel || "Years<br />Experience" }} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ─── Text Column (Right) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              subtitle={props.subtitle || "ABOUT ME"}
              title={props.title || <>I'm Kuldeep Kumawat, <br />a Passionate <span className="text-primary">Full Stack Developer</span></>}
            />

            {/* Dynamic Word-by-Word Text Reveal */}
            <motion.p 
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-muted-foreground leading-relaxed mb-8 text-lg flex flex-wrap"
            >
              {descriptionWords.map((word, i) => {
                const isHighlight = word.includes("clean") || word.includes("code");
                return (
                  <motion.span key={i} variants={wordVariants} className="mr-[0.25em]">
                    {isHighlight ? (
                      <span className="relative inline-block font-semibold text-foreground px-1">
                        {word}
                        <motion.span 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
                          className="absolute bottom-1 left-0 h-[8px] bg-primary/30 -z-10 rounded-sm"
                        />
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </motion.p>

            {/* Staggered Stats Cards with Glare and CountUp */}
            <motion.div 
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
            >
              {props.stats?.map((stat: any, index: number) => (
                <motion.div 
                  key={index} 
                  variants={statCardVariants}
                  className="group relative flex flex-col gap-1 bg-card p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)] dark:shadow-none border border-black/5 dark:border-white/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Glass Glare Effect */}
                  <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-glare pointer-events-none z-10" />

                  <div className="text-2xl mb-1 group-hover:scale-110 transition-transform origin-bottom-left">{stat.icon}</div>
                  <h4 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
                    <CountUpNumber value={stat.value} />
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-tight mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Button */}
            {props.button && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-4"
              >
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <Link 
                    href={props.button.href || "#"} 
                    className="relative group inline-flex items-center justify-center px-8 py-3.5 text-white font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_20px_rgba(72,162,147,0.4)] hover:shadow-[0_0_30px_rgba(72,162,147,0.8)] transition-all"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#48A293] to-[#368578] transition-transform duration-300 group-hover:scale-105" />

                    
                    {/* Animated pulse border */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Shiny sweep */}
                    <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
                    
                    <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-0.5 transition-transform">
                      {props.button.text}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
