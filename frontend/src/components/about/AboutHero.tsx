"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, Variants } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Code2 } from "lucide-react"
import { GlassCard } from "@/components/common/GlassCard"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring", bounce: 0.4 },
  },
}



const TypingHeading = ({ part1, part2, highlight }: { part1: string, part2: string, highlight: string }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const fullText = part1 + part2 + highlight;

  React.useEffect(() => {
    let i = 0;
    let isTyping = true;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      if (isTyping) {
        if (i <= fullText.length) {
          setDisplayedText(fullText.substring(0, i));
          i++;
          timeoutId = setTimeout(tick, 45);
        } else {
          isTyping = false;
          timeoutId = setTimeout(tick, 1000); // 1 second pause at the end
        }
      } else {
        i = 0;
        isTyping = true;
        setDisplayedText("");
        timeoutId = setTimeout(tick, 45);
      }
    };

    tick();

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  const p1Len = part1.length;
  const p2Len = part2.length;

  const currentP1 = displayedText.substring(0, p1Len);
  const currentP2 = displayedText.substring(p1Len, p1Len + p2Len);
  const currentHighlight = displayedText.substring(p1Len + p2Len);

  return (
    <div className="inline-block text-left relative">
      <span>{currentP1}</span>
      <br />
      <span>{currentP2}</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500">
        {currentHighlight}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-[1em] bg-primary ml-1 translate-y-[0.1em]"
      />
    </div>
  );
};

export function AboutHero({ props }: { props: any }) {
  // 3D Tilt for Image
  const imgRef = React.useRef<HTMLDivElement>(null);


  // Tech Shapes State for Bottom-to-Top Animation
  const [shapes, setShapes] = React.useState<Array<{ id: number, left: string, size: number, delay: number, duration: number, type: number }>>([]);

  React.useEffect(() => {
    // Generate tech shapes only on client
    const generatedShapes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 25 + 15, // 15px to 40px size
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10, // 10s to 20s float time
      type: Math.floor(Math.random() * 4) // 0: Square, 1: Circle, 2: Cross, 3: Star
    }));
    setShapes(generatedShapes);
  }, []);

  if (!props) return null;

  return (
    <section
      className="py-20 relative overflow-hidden bg-background"
    >
      {/* Animated Background Shapes (Single Color Primary) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {shapes.map((shape) => {
          return (
            <motion.div
              key={`shape-${shape.id}`}
              className="absolute bottom-[-100px] flex items-center justify-center"
              style={{
                left: shape.left,
                width: shape.size,
                height: shape.size,
              }}
              initial={{ y: '10vh', rotate: 0, opacity: 0 }}
              animate={{
                y: ['10vh', '-120vh'],
                rotate: [0, 360],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "linear",
                delay: shape.delay
              }}
            >
              {shape.type === 0 && <div className="w-full h-full border-[2px] border-primary/30 rounded-md" />}
              {shape.type === 1 && <div className="w-full h-full bg-primary/20 rounded-full" />}
              {shape.type === 2 && <svg className="w-full h-full text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>}
              {shape.type === 3 && <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>}
            </motion.div>
          );
        })}
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px)', backgroundSize: '16px 16px', transform: "translateZ(-20px)" }} />
            <div className="absolute top-8 -right-4 w-48 h-full bg-primary/20 rounded-3xl -z-10" style={{ transform: "translateZ(-30px)" }} />

            <motion.div
              ref={imgRef}
              className="relative aspect-[4/5] max-w-md mx-auto group cursor-pointer"
            >
              <div className="w-full h-full relative z-10 overflow-hidden rounded-[32px] border border-border shadow-2xl bg-gradient-to-b from-surface-container to-surface-container-high dark:from-gray-900 dark:to-black">
                <Image
                  src={props.image || "/images/home/user1.png"}
                  alt={props.imageAlt || "Kuldeep Kumawat"}
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                />
                {/* Cyberpunk Glitch Overlay */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:animate-glitch pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ z: 60 }}
                animate={{ y: [-10, 10, -10], z: 60 }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <GlassCard className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl shadow-xl border border-primary/20">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    {props.badge?.icon || <Code2 className="text-primary" size={24} />}
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-bold text-foreground">{props.badge?.title || "Full Stack"}</span>
                    <span className="block text-xs font-medium text-muted-foreground">{props.badge?.subtitle || "Developer"}</span>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-4">
              <SectionHeading
                subtitle={props.subtitle || "ABOUT ME"}
                title={

                  <TypingHeading
                    part1="I'm Kuldeep Kumawat,"
                    part2="a Passionate "
                    highlight="Full Stack Developer"
                  />

                }
              />
            </div>

            {props.descriptions?.map((desc: string, i: number) => (
              <motion.p key={i} variants={itemVariants} className={`text-muted-foreground leading-relaxed ${i === props.descriptions.length - 1 ? 'mb-10' : 'mb-6'}`}>
                {desc}
              </motion.p>
            ))}

            {/* Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {props.personalInfo?.map((info: any, index: number) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</span>
                    <span className="block text-sm font-bold text-foreground group-hover:text-primary transition-colors">{info.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
              {props.buttons?.map((btn: any, index: number) => (
                <a
                  key={index}
                  href={btn.href || "#"}
                  download={btn.download || undefined}
                  className={btn.variant === "outline"
                    ? "relative group px-8 py-3.5 rounded-full font-medium border-2 border-border hover:border-primary text-foreground flex items-center gap-2 transition-all overflow-hidden"
                    : "relative group inline-flex items-center justify-center px-8 py-3.5 text-white font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] transition-all"
                  }
                >
                  {btn.variant !== "outline" && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 border-2 border-white/20 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-glare pointer-events-none" />
                    </>
                  )}
                  {btn.variant === "outline" && (
                    <div className="absolute inset-0 -translate-x-[100%] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:animate-glare pointer-events-none" />
                  )}

                  <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-0.5 transition-transform">
                    {btn.text}
                    {btn.icon}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
