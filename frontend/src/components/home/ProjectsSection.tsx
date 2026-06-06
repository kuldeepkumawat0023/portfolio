"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ project }: { project: any }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  // Spotlight Position Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate position for spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Calculate tilt
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
      style={{ rotateX: springY, rotateY: springX, transformStyle: "preserve-3d" }}
      className="h-full relative group/card perspective-[1000px] z-10"
    >
      {/* ── Outer Wrapper for Animated Border ── */}
      <div className="relative h-full rounded-2xl overflow-hidden p-[2px] shadow-lg transition-shadow duration-500 hover:shadow-[0_8px_30px_rgb(249,115,22,0.3)]">
        
        {/* Rotating Conic Gradient Border (visible only on hover) */}
        <motion.div
          className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,transparent_70%,#f97316_100%)] opacity-0 group-hover/card:opacity-100"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* ── Inner Card Content ── */}
        <div className="relative z-10 bg-card/90 backdrop-blur-xl h-full rounded-[14px] flex flex-col overflow-hidden">
          
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[14px] opacity-0 transition duration-300 group-hover/card:opacity-100 z-30"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(249, 115, 22, 0.15),
                  transparent 80%
                )
              `
            }}
          />

          {/* Image Container with 3D Pop & Cyber Scanline */}
          <div className="h-56 overflow-hidden relative bg-muted/30 group/img" style={{ transform: "translateZ(30px)" }}>
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-110"
            />
            
            {/* Cyber Scan-line on Hover */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent -translate-y-full group-hover/card:animate-scanline opacity-0 group-hover/card:opacity-100 pointer-events-none mix-blend-overlay" />
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                Featured
              </div>
            )}

            {/* Overlay with links */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.8)]">
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="p-6 flex flex-col flex-grow relative z-20" style={{ transform: "translateZ(20px)" }}>
            <div className="mb-2">
              <span className="text-[10px] font-bold tracking-wider text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md uppercase">
                {project.category || "Project"}
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover/card:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags?.map((tag: string) => (
                <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container/50 rounded-md text-foreground border border-border/50">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Links with Magnetic feel (Hover Scale) */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
              <motion.a 
                whileHover={{ scale: 1.05, x: 5 }}
                href={project.liveLink || "#"} 
                className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                Live Demo
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, x: -5 }}
                href={project.githubLink || "#"} 
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub <FaGithub size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ProjectsSection({ props }: { props: any }) {
  if (!props) return null;

  const codeTags = [
    "<div />", "<React />", "<Next.js />", "{ code }", "() =>", 
    "npm run", "git push", "[ array ]", "<API />", "</>", 
    "async", "await", "function()", "const", "let"
  ];

  const [tags, setTags] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const generatedTags = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: codeTags[Math.floor(Math.random() * codeTags.length)],
      left: `${Math.random() * 90}%`, // Keep within screen bounds
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15, // Slow float
    }));
    setTags(generatedTags);
  }, []);

  return (
    <section className="py-24 relative bg-background overflow-hidden" id="projects">
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        
        {/* 1. Animated Tech Grid (Moving upwards) */}
        <div className="absolute inset-0 perspective-[1000px] flex items-center justify-center opacity-60 dark:opacity-40">
          <motion.div 
            initial={{ rotateX: 60, translateY: 0 }}
            animate={{ translateY: [0, -50] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-[200%] h-[200%] bg-[linear-gradient(to_right,var(--color-primary)_2px,transparent_2px),linear-gradient(to_bottom,var(--color-primary)_2px,transparent_2px)] bg-[size:50px_50px]"
            style={{ transformOrigin: "top center" }}
          />
        </div>

        {/* 2. Giant Lava Lamp Orbs */}
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 30, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-32 w-[600px] h-[600px] bg-orange-500/30 dark:bg-orange-600/20 rounded-full blur-[90px]"
        />
        <motion.div 
          animate={{ x: [50, -50, 50], y: [30, -20, 30], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-amber-500/30 dark:bg-yellow-500/20 rounded-full blur-[80px]"
        />

        {/* 3. Floating 3D Tech Tags (Like Home Section) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>
          {tags.map(tag => (
            <motion.div
              key={`tag-${tag.id}`}
              className="absolute bottom-[-100px] border border-orange-500/40 dark:border-orange-400/30 shadow-[0_0_15px_rgba(249,115,22,0.3)] flex items-center justify-center font-mono font-bold text-orange-600 dark:text-orange-400/80 whitespace-nowrap"
              style={{
                left: tag.left,
                padding: '10px 20px',
                borderRadius: "12px",
                background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.02) 100%)",
                backdropFilter: "blur(6px)",
                transformStyle: "preserve-3d"
              }}
              initial={{ y: '10vh', rotateX: 0, rotateY: 0, rotateZ: 0, opacity: 0 }}
              animate={{
                y: ['10vh', '-120vh'],
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 360],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                y: { duration: tag.duration, repeat: Infinity, ease: "linear", delay: tag.delay },
                rotateX: { duration: tag.duration * 0.8, repeat: Infinity, ease: "linear", delay: tag.delay },
                rotateY: { duration: tag.duration * 1.2, repeat: Infinity, ease: "linear", delay: tag.delay },
                rotateZ: { duration: tag.duration, repeat: Infinity, ease: "linear", delay: tag.delay },
                opacity: { duration: tag.duration, repeat: Infinity, ease: "linear", delay: tag.delay }
              }}
            >
              {tag.text}
            </motion.div>
          ))}
        </div>

        {/* 4. Shooting Stars (Bottom to Top) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`meteor-${i}`}
            className="absolute h-[2px] w-[150px] rounded-full"
            style={{
              bottom: `${Math.random() * -20}%`,
              left: `${Math.random() * 100}%`,
              background: 'linear-gradient(to right, rgba(249,115,22,1) 0%, rgba(249,115,22,0) 100%)',
              rotate: -45 // Pointing upwards-right
            }}
            initial={{ x: -200, y: 200, opacity: 0 }}
            animate={{ x: 1500, y: -1500, opacity: [0, 1, 1, 0] }}
            transition={{ 
                duration: Math.random() * 1.5 + 1, 
                repeat: Infinity, 
                repeatDelay: Math.random() * 5 + 2,
                ease: "linear"
            }}
          >
            {/* Glowing head at the front (right side since we are flying up-right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_15px_3px_rgba(249,115,22,1)]" />
          </motion.div>
        ))}

        {/* Gradient Fades for blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        
        {/* ── CUSTOM ANIMATED HEADING ── */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          
          {/* Glowing Badge Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group mb-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative px-6 py-2 bg-background border border-primary/20 rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold tracking-widest text-sm uppercase">
                {props.subtitle || "MY PROJECTS"}
              </span>
            </div>
          </motion.div>

          {/* Sparkling Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-xl text-foreground">
              {props.headingPart1 || "Some of My"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400 relative inline-block">
                {props.headingPart2 || "Recent Work"}
                {/* Sparkles */}
                <motion.span 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: [0, 15, -15, 0] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="absolute -top-4 -right-6 text-amber-300 text-2xl drop-shadow-lg"
                >
                  ✨
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: [0, -15, 15, 0] }} 
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} 
                  className="absolute -bottom-2 -left-6 text-orange-400 text-xl drop-shadow-lg"
                >
                  ✨
                </motion.span>
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 mt-6 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {props.projects?.map((project: any, index: number) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
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
