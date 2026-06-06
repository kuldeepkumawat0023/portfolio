"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaTag, FaLock, FaPaperPlane } from "react-icons/fa"
import { GlassCard } from "@/components/common/GlassCard"

export function ContactForm() {
  return (
    <section className="py-20 relative bg-background z-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-extrabold text-foreground mb-8">Send Me a Message</h2>
            <GlassCard className="p-8">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                      <FaUser size={14} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                      <FaEnvelope size={14} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                    <FaTag size={14} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none text-muted-foreground">
                    <FaEnvelope size={14} />
                  </div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 group">
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {/* Privacy Notice */}
                <div className="flex items-center gap-2 mt-2">
                  <FaLock size={12} className="text-orange-500" />
                  <span className="text-xs font-medium text-muted-foreground">
                    Your information is safe with me. I will never share your data.
                  </span>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl font-extrabold text-foreground mb-8">Find Me Here</h2>
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-black/5 dark:border-white/10 group">
              {/* Overlay styling to make the map blend better */}
              <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 transition-opacity group-hover:opacity-0"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112046.73278564223!2d77.12648434455855!3d28.643642340331006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale-[50%] contrast-125 dark:invert dark:grayscale dark:contrast-100"
              ></iframe>

              {/* Map Info Card */}
              <div className="absolute top-6 left-6 z-20">
                <GlassCard className="p-4 py-3 bg-white/90 dark:bg-card/90 backdrop-blur-md">
                  <h4 className="font-bold text-foreground text-sm">India</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Available for freelance work</p>
                  <a href="#" className="text-xs font-semibold text-primary mt-2 inline-block hover:underline">
                    View larger map
                  </a>
                </GlassCard>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
