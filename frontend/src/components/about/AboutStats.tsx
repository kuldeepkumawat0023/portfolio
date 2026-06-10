"use client"

import React, { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { Users, Heart, Clock, HeadphonesIcon, ThumbsUp, Settings } from "lucide-react"
import { GlassCard } from "@/components/common/GlassCard"

const AnimatedCounter = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numMatch = typeof value === 'string' ? value.match(/\d+/) : null;
  const number = numMatch ? parseInt(numMatch[0]) : (typeof value === 'number' ? value : 0);
  const suffix = typeof value === 'string' ? value.replace(/\d+/g, "") : "";

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, number, { duration: 2.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [number, isInView, count]);

  return (
    <motion.h4 
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      className="text-2xl font-bold text-foreground mb-1 flex items-center justify-center"
    >
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </motion.h4>
  );
};

export function AboutStats({ props }: { props: any }) {
  if (!props || !props.stats) return null;

  const gridColsClass = props.stats.length === 5 
    ? 'lg:grid-cols-5 md:grid-cols-3' 
    : props.stats.length === 4 
      ? 'lg:grid-cols-4 md:grid-cols-2' 
      : 'lg:grid-cols-6 md:grid-cols-3';

  return (
    <section className="py-8 relative z-10 -mt-10 mb-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <GlassCard className="rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-black/5 dark:border-white/10 p-6 md:p-8">
          <div className={`grid grid-cols-2 ${gridColsClass} gap-6 md:gap-8 divide-x-0 lg:divide-x divide-border`}>
            {props.stats.map((stat: any, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'lg:pl-8' : ''}`}
              >
                <div className="mb-3">
                  {stat.icon}
                </div>
                <AnimatedCounter value={stat.value} />
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
