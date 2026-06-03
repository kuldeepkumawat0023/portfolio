"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"
export function SkillsList({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative bg-surface-container/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading 
          subtitle={props.subtitle} 
          title={
            <>
              {props.title[0]} <span className="text-primary">{props.title[1]}</span>
            </>
          }
          centered 
        />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          {props.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props.skills?.map((skill: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="p-6 rounded-2xl flex flex-col justify-between h-full group hover:-translate-y-2 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-primary/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-foreground text-sm">{skill.name}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-end">
                    <span className="text-xs font-bold text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      className="bg-primary h-1.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {props.button && (
          <div className="flex justify-center mt-12">
            <button className="gradient-button text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20">
              {props.button.text}
              {props.button.icon}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
