"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Pagination } from "@/components/common/Pagination"

const FluidSpaceBackground = () => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background dark:bg-[#020617] transition-colors duration-500">
      {/* 1. Fluid Water Orbs (Lava Lamp Effect) */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen filter blur-[80px]">
        <motion.div
          animate={{
            x: ["0%", "50%", "0%"],
            y: ["0%", "30%", "0%"],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-primary/40"
        />
        <motion.div
          animate={{
            x: ["0%", "-40%", "0%"],
            y: ["0%", "40%", "0%"],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[70vh] rounded-full bg-indigo-600/30"
        />
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[40vw] h-[40vh] rounded-full bg-cyan-600/20"
        />
      </div>

      {/* 2. Space Starfield */}
      <div className="absolute inset-0 z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {isClient && Array.from({ length: 70 }).map((_, i) => {
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
                opacity: [0, Math.random() * 0.8 + 0.2, 0]
              }}
              transition={{
                y: { duration: Math.random() * 30 + 30, repeat: Infinity, ease: "linear" },
                opacity: { duration: Math.random() * 5 + 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          );
        })}
      </div>

      {/* Top/Bottom Gradient Fades */}
      <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-background to-transparent z-20" />
      <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-background to-transparent z-20" />
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
      className={`relative z-10 hover:z-50 perspective-[1000px] h-full ${className}`}
    >
      <motion.div variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} className="absolute -inset-[1px] rounded-[32px] bg-primary/20 transition-opacity duration-300 overflow-hidden z-0">
        <motion.div className="absolute inset-0 z-0" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(72, 162, 147, 0.4), transparent 80%)` }} />
      </motion.div>

      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10 h-full rounded-[31px] bg-card/80 backdrop-blur-md border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export function ProjectsGrid({ props }: { props: any }) {
  const [activeFilter, setActiveFilter] = React.useState("All Projects")
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 6

  if (!props) return null;

  const uniqueCategories = Array.from(new Set(props.projects?.map((p: any) => p.category) || []));
  const dynamicCategories = ["All Projects", ...(uniqueCategories as string[])];

  const filteredProjects = activeFilter === "All Projects" 
    ? props.projects 
    : props.projects?.filter((project: any) => project.category === activeFilter)

  const totalPages = Math.ceil((filteredProjects?.length || 0) / itemsPerPage)
  
  const currentProjects = filteredProjects?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1);
  }

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <FluidSpaceBackground />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {dynamicCategories.map((category: string) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-105" 
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground border border-primary/20 hover:border-primary/50 hover:text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          <AnimatePresence mode="popLayout">
            {currentProjects?.map((project: any) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Tilt3DCard className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="aspect-video w-full overflow-hidden relative bg-muted/30" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div style={{ transform: "translateZ(40px)" }} className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(72,162,147,0.8)] z-20">
                        Featured
                      </div>
                    )}

                    {/* Cyber Scan-line on Hover */}
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-y-full group-hover:animate-scanline opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay z-10" />

                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:scale-110 hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(72,162,147,0.4)] border border-white/20">
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-black/60 transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)] border border-white/10">
                          <FaGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow bg-card/40 relative z-10">
                    <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                      <span className="text-[10px] font-bold tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-md uppercase shadow-[0_0_8px_rgba(72,162,147,0.2)] inline-block mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-wide drop-shadow-[0_0_5px_rgba(72,162,147,0.1)]">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 font-mono leading-relaxed border-l-2 border-primary/30 pl-3 group-hover:text-muted-foreground/90 transition-colors">
                        {`> ${project.description}`}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tags?.map((tag: string) => (
                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-primary/10 rounded-md text-primary border border-primary/20 shadow-[0_0_8px_rgba(72,162,147,0.1)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="flex items-center justify-between pt-4 border-t border-border/50">
                      <a href={project.liveLink || "#"} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors drop-shadow-[0_0_5px_rgba(72,162,147,0.5)]">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(72,162,147,1)]" />
                        Live Demo
                      </a>
                      <a href={project.githubLink || "#"} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                        GitHub <FaGithub size={16} />
                      </a>
                    </div>

                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  )
}
