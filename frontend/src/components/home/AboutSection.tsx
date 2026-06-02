"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/Card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Using a GlassCard as an image placeholder frame */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 opacity-20 blur-xl" />
              <GlassCard className="w-full h-full relative z-10 overflow-hidden flex items-center justify-center rounded-3xl">
                <Image 
                  src="/images/home/about.png" 
                  alt="About Me"
                  fill
                  className="object-cover"
                />
              </GlassCard>
              
              <div className="absolute -bottom-8 -left-8 glass-card px-6 py-4 rounded-2xl z-20 flex flex-col items-center shadow-xl">
                <span className="text-3xl font-bold text-primary">2+</span>
                <span className="text-sm font-medium text-muted-foreground text-center">Years<br/>Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading 
              subtitle="ABOUT ME" 
              title={<>I'm a Passionate <br/><span className="text-primary">Full Stack Developer</span></>} 
            />
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              I specialize in building interactive, user-friendly, and scalable web applications. I love turning ideas into real-world solutions with clean code and modern technologies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Projects Completed", value: "20+", icon: "🚀" },
                { label: "Happy Clients", value: "10+", icon: "❤️" },
                { label: "Years of Experience", value: "2+", icon: "🎯" },
                { label: "Support Available", value: "24/7", icon: "🏆" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <h4 className="text-2xl font-bold text-foreground">{stat.value}</h4>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="gradient-button text-white px-8 py-3 rounded-full font-medium">
              More About Me →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
