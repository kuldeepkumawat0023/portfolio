"use client"

import { motion } from "framer-motion"
export function ServicesCTA({ props }: { props: any }) {
  if (!props) return null;

  return (
    <section className="py-20 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-orange-500 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Abstract Background pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
               style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '30px 30px' }} />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Column - Illustration placeholder */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[350px] aspect-[4/3]">
                <div className="absolute bottom-0 w-full flex justify-center">
                  <div className="w-64 h-40 bg-white rounded-t-2xl shadow-2xl border-8 border-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full bg-gray-50 flex flex-col gap-2 p-4">
                      <div className="w-full h-4 bg-gray-200 rounded-full" />
                      <div className="w-3/4 h-4 bg-gray-200 rounded-full" />
                      <div className="w-1/2 h-4 bg-gray-200 rounded-full" />
                      
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        <div className="h-10 bg-orange-100 rounded-lg border border-orange-200" />
                        <div className="h-10 bg-blue-50 rounded-lg border border-blue-100" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 w-72 h-4 bg-gray-300 rounded-b-xl shadow-xl" />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-7/12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 text-white">
              <div className="text-center lg:text-left">
                <span className="font-bold text-sm tracking-wider uppercase mb-2 block text-white/90">
                  {props.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {props.title}
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  {props.description}
                </p>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 font-medium">
                  {props.contacts?.map((contact: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                      {contact.icon}
                      <span>{contact.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              {props.button && (
                <div className="shrink-0 mt-8 lg:mt-0">
                  <a href={props.button.href || "#"} className="bg-white text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl">
                    {props.button.text}
                    {props.button.icon}
                  </a>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
