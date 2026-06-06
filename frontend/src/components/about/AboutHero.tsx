"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/common/SectionHeading"
import { 
  User, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Briefcase,
  Download,
  PlayCircle,
  Code2
} from "lucide-react"
import { GlassCard } from "@/components/common/GlassCard"

export function AboutHero({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 opacity-20"
                 style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px)', backgroundSize: '16px 16px' }} />
            
            <div className="absolute top-8 -right-4 w-48 h-full bg-primary/20 rounded-3xl -z-10" />
            
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="w-full h-full relative z-10 overflow-hidden rounded-[32px] border border-border shadow-2xl bg-gradient-to-b from-surface-container to-surface-container-high dark:from-gray-900 dark:to-black">
                <Image
                  src={props.image || "/images/home/user1.png"}
                  alt={props.imageAlt || "Kuldeep Kumawat"}
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              {/* Floating Badge */}
              <GlassCard className="absolute -bottom-6 -left-6 z-20 flex flex-col items-center gap-2 px-6 py-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  {props.badge?.icon || <Code2 className="text-primary" size={24} />}
                </div>
                <div className="text-center">
                  <span className="block text-sm font-bold text-foreground">{props.badge?.title || "Full Stack"}</span>
                  <span className="block text-xs font-medium text-muted-foreground">{props.badge?.subtitle || "Developer"}</span>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading
              subtitle={props.subtitle || "ABOUT ME"}
              title={props.title || <>I'm Kuldeep Kumawat, <br />a Passionate <span className="text-primary">Full Stack Developer</span></>}
            />

            {props.descriptions?.map((desc: string, i: number) => (
              <p key={i} className={`text-muted-foreground leading-relaxed ${i === props.descriptions.length - 1 ? 'mb-10' : 'mb-6'}`}>
                {desc}
              </p>
            ))}

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {props.personalInfo?.map((info: any, index: number) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</span>
                    <span className="block text-sm font-bold text-foreground">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              {props.buttons?.map((btn: any, index: number) => (
                <a 
                  key={index}
                  href={btn.href || "#"} 
                  className={btn.variant === "outline" 
                    ? "px-8 py-3.5 rounded-full font-medium border-2 border-border hover:border-primary text-foreground flex items-center gap-2 transition-all hover:bg-primary/5 hover:-translate-y-1"
                    : "gradient-button button-glow text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 transition-transform hover:-translate-y-1"
                  }
                >
                  {btn.text}
                  {btn.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
