"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"

export function ServicesSection({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative bg-inverse-surface text-inverse-on-surface">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            subtitle={props.subtitle || "SERVICES I PROVIDE"} 
            title={props.title || <>How Can I <span className="text-secondary">Help You?</span></>} 
            className="mb-0"
          />
          {props.button && (
            <a href={props.button.href || "#"} className="hidden md:block gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg inline-block text-center">
              {props.button.text}
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {props.services?.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full border border-white/10 hover:border-white/20 transition-colors bg-white/5">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border ${service.color}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {props.button && (
          <a href={props.button.href || "#"} className="md:hidden text-center block w-full mt-8 gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg">
            {props.button.text}
          </a>
        )}

      </div>
    </section>
  )
}
