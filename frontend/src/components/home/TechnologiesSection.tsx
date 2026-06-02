"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/Card"

const technologies = [
  { name: "HTML5", icon: "H", color: "text-orange-500" },
  { name: "CSS3", icon: "C", color: "text-blue-500" },
  { name: "JavaScript", icon: "JS", color: "text-yellow-500" },
  { name: "TypeScript", icon: "TS", color: "text-blue-400" },
  { name: "React", icon: "Re", color: "text-cyan-400" },
  { name: "Next.js", icon: "Nx", color: "text-foreground" },
  { name: "Node.js", icon: "No", color: "text-green-500" },
  { name: "Express.js", icon: "Ex", color: "text-foreground" },
  { name: "MongoDB", icon: "Mg", color: "text-green-600" },
  { name: "Tailwind CSS", icon: "Tw", color: "text-cyan-500" },
  { name: "Git & GitHub", icon: "Gt", color: "text-orange-600" },
]

export function TechnologiesSection() {
  return (
    <section id="skills" className="py-20 relative bg-surface-container/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <SectionHeading 
          subtitle="TECHNOLOGIES I WORK WITH" 
          title="My Skills" 
          centered 
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="w-28 h-28 flex flex-col items-center justify-center gap-3 cursor-pointer group hover:-translate-y-2 transition-transform duration-300">
                <div className={`text-3xl font-bold ${tech.color} group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-foreground text-center">{tech.name}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg">
            View All Skills →
          </button>
        </div>
      </div>
    </section>
  )
}
