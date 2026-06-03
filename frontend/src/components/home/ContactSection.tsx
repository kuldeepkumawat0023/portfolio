"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/common/SectionHeading"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        <div className="bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col h-full">
                <SectionHeading 
                  subtitle={<span className="text-white/80">{props.subtitle || "LET'S WORK TOGETHER"}</span>} 
                  title={<span className="text-white">{props.title || "Have a project in mind?"}</span>} 
                  className="mb-6"
                />
                
                <p className="text-white/80 mb-12">
                  {props.description}
                </p>

                <div className="flex flex-col gap-6 mt-auto">
                  {props.contactDetails?.map((detail: any, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      {detail.icon}
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3 p-10 md:p-16 bg-surface">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">{props.form?.nameLabel || "Your Name"}</label>
                    <input 
                      type="text" 
                      id="name"
                      className="glass-input rounded-xl px-4 py-3 bg-surface-container-low" 
                      placeholder={props.form?.namePlaceholder || "John Doe"}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">{props.form?.emailLabel || "Your Email"}</label>
                    <input 
                      type="email" 
                      id="email"
                      className="glass-input rounded-xl px-4 py-3 bg-surface-container-low" 
                      placeholder={props.form?.emailPlaceholder || "john@example.com"}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">{props.form?.subjectLabel || "Subject"}</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="glass-input rounded-xl px-4 py-3 bg-surface-container-low" 
                    placeholder={props.form?.subjectPlaceholder || "Project Inquiry"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">{props.form?.messageLabel || "Your Message"}</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="glass-input rounded-xl px-4 py-3 bg-surface-container-low resize-none" 
                    placeholder={props.form?.messagePlaceholder || "Tell me about your project..."}
                  />
                </div>

                <button type="submit" className="gradient-button text-white px-8 py-4 rounded-xl font-bold mt-4 shadow-lg w-full md:w-auto self-start">
                  {props.form?.buttonText || "Send Message 🚀"}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
