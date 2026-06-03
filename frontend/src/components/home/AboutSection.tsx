"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"


export function AboutSection({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Using a custom container with decorative elements to match design */}
            <div className="relative w-full aspect-square max-w-md mx-auto mt-8 md:mt-0">
              {/* Dotted pattern - Left */}
              <div
                className="absolute top-16 -left-8 w-24 h-32 z-0 opacity-50"
                style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1.5px, transparent 2px)', backgroundSize: '14px 14px' }}
              />

              {/* Orange circle - Top */}
              <div className="absolute -top-4 right-1/4 w-16 h-16 rounded-full bg-primary z-0" />

              {/* Orange pill - Bottom Right */}
              <div className="absolute -bottom-4 right-12 w-24 h-8 rounded-full bg-primary z-0" />

              {/* Main Image Frame */}
              <div className="w-full h-full relative z-10 overflow-hidden flex items-center justify-center rounded-[32px] border border-border shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black">
                <Image
                  src={props.imageSrc || "/images/home/user1.png"}
                  alt="About Me"
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-[60%] -left-12 -translate-y-1/2 glass-card bg-card/95 backdrop-blur-md px-6 py-4 rounded-2xl z-20 flex flex-col items-center shadow-xl border border-white/10">
                <span className="text-3xl font-bold text-primary">{props.experienceYears || "2+"}</span>
                <span className="text-sm font-medium text-foreground text-center" dangerouslySetInnerHTML={{ __html: props.experienceLabel || "Years<br />Experience" }} />
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
              subtitle={props.subtitle || "ABOUT ME"}
              title={props.title || <>I'm Kuldeep Kumawat, <br />a Passionate <span className="text-primary">Full Stack Developer</span></>}
            />

            <p className="text-muted-foreground leading-relaxed mb-8">
              {props.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {props.stats?.map((stat: any, index: number) => (
                <div key={index} className="flex flex-col gap-1 bg-card p-5 sm:p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none border border-black/5 dark:border-white/10 hover:-translate-y-1 transition-transform">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <h4 className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-tight mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {props.button && (
              <a href={props.button.href || "#"} className="gradient-button button-glow transition-all hover:-translate-y-1 text-white px-8 py-3 rounded-full font-medium inline-block">
                {props.button.text}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
