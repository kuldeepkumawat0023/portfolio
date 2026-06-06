"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/common/GlassCard"

export function ContactInfo({ props }: { props: any }) {
  if (!props || !props.items) return null;

  return (
    <section className="pb-20 relative bg-background z-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 hover:-translate-y-1 transition-transform h-full">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/20">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-xs font-medium text-muted-foreground mb-3">{item.description}</p>
                  <p className={`text-sm font-bold ${item.highlight ? "text-orange-500" : "text-foreground"}`}>
                    {item.value}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
