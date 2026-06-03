"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"



export function TechnologiesSection({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative bg-surface-container/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <SectionHeading
          subtitle={props.subtitle || "TECHNOLOGIES I WORK WITH"}
          title={props.title || "My Skills"}
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {props.technologies?.map((tech: any, index: number) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="w-28 h-28 flex flex-col items-center justify-center gap-3 cursor-pointer group hover:-translate-y-2 transition-transform duration-300">
                <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-foreground text-center">{tech.name}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {props.button && (
          <div className="flex justify-center mt-12">
            <a href={props.button.href || "#"} className="gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg inline-block">
              {props.button.text}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
