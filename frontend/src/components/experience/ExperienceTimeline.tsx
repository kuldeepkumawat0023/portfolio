"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

export function ExperienceTimeline({ props }: { props: any }) {
  if (!props || !props.experiences) return null;

  return (
    <section className="py-20 relative bg-surface-container/30">
      <div className="container max-w-5xl mx-auto px-4 md:px-6 w-full">
        
        <SectionHeading 
          subtitle={props.subtitle || "MY PROFESSIONAL JOURNEY"} 
          title={props.title || <>Where I've <span className="text-primary">Worked & Grown</span></>} 
          className="text-center"
        />

        <div className="mt-16 relative">
          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0" />
          
          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-px bg-border z-0" />

          <div className="flex flex-col gap-12">
            {props.experiences.map((exp: any, index: number) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center group">
                  
                  {/* Left Side Content (or top on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-start order-2 md:order-1'}`}
                  >
                    {isEven ? (
                      <div className="hidden md:block text-right pr-8">
                        <span className="font-bold text-orange-500 text-lg tracking-wider block">{exp.period}</span>
                      </div>
                    ) : (
                      <GlassCard className="w-full p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ml-14 md:ml-0">
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-4">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags?.map((tag: string) => (
                            <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    )}
                  </motion.div>

                  {/* Center Node */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-card border-[3px] border-orange-500 shadow-lg text-orange-500 z-20 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300"
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Right Side Content (or bottom on mobile) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-start order-2' : 'md:justify-end order-1 md:order-2'}`}
                  >
                    {isEven ? (
                      <GlassCard className="w-full p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ml-14 md:ml-0 mt-2 md:mt-0">
                        <div className="md:hidden mb-4">
                          <span className="font-bold text-orange-500 text-sm tracking-wider block">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-4">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags?.map((tag: string) => (
                            <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    ) : (
                      <div className="hidden md:block text-left pl-8">
                        <span className="font-bold text-orange-500 text-lg tracking-wider block">{exp.period}</span>
                      </div>
                    )}
                    {/* Mobile Period when odd */}
                    {!isEven && (
                      <div className="md:hidden absolute top-[-30px] left-14">
                        <span className="font-bold text-orange-500 text-sm tracking-wider block">{exp.period}</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
