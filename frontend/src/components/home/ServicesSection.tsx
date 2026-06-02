"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/Card"

const services = [
  {
    title: "Web Development",
    description: "Responsive & modern websites with best technologies.",
    icon: "🌐",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "Full Stack Apps",
    description: "End-to-end web applications using MERN stack.",
    icon: "💻",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  },
  {
    title: "API Development",
    description: "RESTful APIs & backend development with Node.js & Express.",
    icon: "⚙️",
    color: "bg-red-500/10 text-red-500 border-red-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Clean, attractive & user friendly UI designs.",
    icon: "🎨",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "Database Design",
    description: "Optimized & secure database design with MongoDB.",
    icon: "s️",
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    title: "Bug Fixing",
    description: "Fix bugs and improve performance & security.",
    icon: "🐛",
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 relative bg-inverse-surface text-inverse-on-surface">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            subtitle="SERVICES I PROVIDE" 
            title={<>How Can I <span className="text-secondary">Help You?</span></>} 
            className="mb-0"
          />
          <button className="hidden md:block gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg">
            Hire Me →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
        
        <button className="md:hidden w-full mt-8 gradient-button text-white px-8 py-3 rounded-full font-medium shadow-lg">
          Hire Me →
        </button>

      </div>
    </section>
  )
}
