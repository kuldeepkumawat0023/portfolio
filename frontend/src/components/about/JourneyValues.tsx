"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"
import { Briefcase, Code, Monitor, BookOpen, Handshake, Lightbulb, ArrowRight } from "lucide-react"

export function JourneyValues({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Journey */}
          <div>
            <SectionHeading 
              subtitle={props.journeySubtitle || "MY JOURNEY"}
              title={props.journeyTitle || <>My Professional <span className="text-primary">Journey</span></>}
            />
            
            <div className="mt-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-10 w-0.5 bg-border z-0" />
              
              <div className="flex flex-col gap-10 relative z-10">
                {props.experiences?.map((exp: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    {/* Timeline Node */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 transition-transform" />
                      <div className="mt-4 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center -ml-[20px] group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                        {exp.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-xs font-bold text-primary mb-1 block uppercase tracking-wider">{exp.period}</span>
                      <h4 className="text-lg font-bold text-foreground mb-2">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {props.journeyButton && (
                <div className="mt-8 ml-[60px]">
                  <a href={props.journeyButton.href || "#"} className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors border border-border hover:border-primary bg-card px-6 py-3 rounded-xl shadow-sm">
                    {props.journeyButton.text}
                    {props.journeyButton.icon}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <SectionHeading 
              subtitle={props.valuesSubtitle || "WHAT I BELIEVE IN"}
              title={props.valuesTitle || <>My Core <span className="text-primary">Values</span></>}
            />
            
            <div className="mt-10 flex flex-col gap-4">
              {props.values?.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 rounded-2xl flex gap-5 items-start hover:-translate-y-1 transition-transform border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
