"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

export function ExperienceSkills({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
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
