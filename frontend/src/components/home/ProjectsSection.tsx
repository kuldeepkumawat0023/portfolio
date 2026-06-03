"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

export function ProjectsSection({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative bg-surface-container/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            subtitle={props.subtitle || "MY PROJECTS"} 
            title={props.title || <>Some of My <span className="text-primary">Recent Work</span></>} 
            className="mb-0"
          />
          {props.button && (
            <a href={props.button.href || "#"} className="hidden md:block px-6 py-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors font-medium">
              {props.button.text}
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.projects?.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden group h-full flex flex-col cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      ↗
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {props.button && (
          <a href={props.button.href || "#"} className="md:hidden text-center block w-full mt-8 px-6 py-3 rounded-full border border-outline-variant hover:bg-surface-container transition-colors font-medium">
            {props.button.text}
          </a>
        )}
      </div>
    </section>
  )
}
