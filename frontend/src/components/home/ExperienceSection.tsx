"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/Card"

const experiences = [
  {
    period: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: "Building scalable web apps using MERN stack. Working with clients worldwide to deliver solutions.",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    period: "2022 - 2023",
    role: "Frontend Developer",
    company: "TechSolutions Inc.",
    description: "Developed responsive UI with React and Tailwind CSS. Integrated REST APIs and optimized performance.",
    tags: ["React", "Tailwind CSS", "API"]
  },
  {
    period: "2021 - 2022",
    role: "Web Developer Intern",
    company: "CodeCraft Labs",
    description: "Worked on real-world projects and learned modern web technologies and best coding practices.",
    tags: ["HTML", "CSS", "JavaScript"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            subtitle="MY EXPERIENCE" 
            title={<>My Professional <span className="text-primary">Journey</span></>} 
            className="mb-0"
          />
          <button className="gradient-button text-white px-6 py-2 rounded-full font-medium shadow-lg hidden md:block">
            Download CV ↓
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Desktop timeline line */}
              <div className="hidden md:block path-line" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10 pt-4 md:pt-12"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute top-[34px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                  
                  <GlassCard className="p-6 h-full flex flex-col">
                    <span className="text-sm font-bold text-primary mb-2">{exp.period}</span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-medium mb-4 block">{exp.company}</span>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 h-full flex flex-col justify-center gap-8 text-center">
              <div>
                <h4 className="text-4xl font-extrabold text-foreground mb-2">20+</h4>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-primary mb-2">10+</h4>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-secondary mb-2">2+</h4>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-foreground mb-2">24/7</h4>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Support Available</p>
              </div>
            </div>
          </motion.div>

        </div>
        
        <button className="gradient-button text-white px-6 py-2 rounded-full font-medium shadow-lg block md:hidden w-full mt-8">
          Download CV ↓
        </button>
      </div>
    </section>
  )
}
