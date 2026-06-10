"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

const NodeNetworkBackground = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {x: number, y: number, vx: number, vy: number, radius: number, color: string}[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    const colors = ['#ff7e1d', '#e11d48', '#61DAFB', '#F7DF1E', '#3178C6', '#47A248', '#8b5cf6', '#14b8a6'];

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = [];
      const numParticles = Math.floor((width * height) / 12000); // density
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 3 + 2, // Random size between 2 and 5
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        // Optional: add a slight glowing effect to the dot
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow for lines
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.25 - dist/520})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      <canvas ref={canvasRef} className="w-full h-full opacity-80 dark:opacity-60 dark:mix-blend-screen" />
      <div className="absolute top-0 w-full h-[150px] bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </div>
  );
};

export function ExperienceSkills({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      <NodeNetworkBackground />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full relative z-20">
        <SectionHeading
          subtitle={props.subtitle || "WHAT I WORKED WITH"}
          title={props.title || <>Technologies & <span className="text-primary">Tools</span></>}
          className="text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">

          {/* Column 1: Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold mb-6 text-foreground">My Technical Skills</h3>
            <div className="flex flex-col gap-6">
              {props.progressSkills?.map((skill: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm font-bold text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="bg-orange-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 h-full">
              {props.techGrid?.map((tech: any, index: number) => (
                <GlassCard key={index} className="flex flex-col items-center justify-center p-4 gap-2 hover:-translate-y-1 transition-transform cursor-pointer border border-border group bg-card">
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground">{tech.name}</span>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Tools List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <h3 className="text-lg font-bold mb-6 text-foreground">Other Tools & Platforms</h3>
            <div className="flex flex-col gap-3">
              {props.toolsList?.map((tool: any, index: number) => (
                <GlassCard key={index} className="flex items-center gap-4 p-3 px-4 hover:translate-x-2 transition-transform cursor-pointer border border-border bg-card group">
                  <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground">{tool.name}</span>
                </GlassCard>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
