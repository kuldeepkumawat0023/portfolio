"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { GlassCard } from "@/components/common/GlassCard"
import Link from "next/link"

export function ServicesGrid({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.services?.map((service: any, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <GlassCard className="p-6 md:p-8 rounded-[32px] h-full group hover:-translate-y-2 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none hover:shadow-primary/10">
                <div className="flex flex-col sm:flex-row gap-5">

                  {/* Number + Icon */}
                  <div className="flex items-center sm:flex-col gap-3 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      {service.id}
                    </div>

                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {service.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <Link
                      href={service.linkHref || "#"}
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-orange-500 transition-colors mt-auto w-max"
                    >
                      {service.linkText}
                      {service.linkIcon}
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {props.button && (
          <div className="flex justify-center mt-16">
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