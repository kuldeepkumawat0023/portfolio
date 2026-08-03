"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaRocket, FaCheckCircle, FaLaptopCode, FaStar } from "react-icons/fa";

export function ProjectHero({ props }: { props: any }) {
  const projectMetrics = [
    { label: "Completed Projects", value: "20+", icon: <FaRocket className="w-5 h-5 text-primary" /> },
    { label: "Happy Clients", value: "10+", icon: <FaCheckCircle className="w-5 h-5 text-green-500" /> },
    { label: "Client Satisfaction", value: "100%", icon: <FaStar className="w-5 h-5 text-teal-400" /> },
    { label: "Full Stack Apps", value: "15+", icon: <FaLaptopCode className="w-5 h-5 text-cyan-500" /> },
  ];

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />


      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 shadow-[0_0_15px_rgba(255,126,29,0.15)]">
              <span>{props.badgeIcon || "✨"}</span>
              <span>{props.badgeText || "MY WORK"}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.15]">
              {props.headingPart1 || "Projects That"}{" "}
              <span className="bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578] bg-clip-text text-transparent">

                {props.headingPart2 || "Speak Impact"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              {props.description || "Here are some of the projects I've worked on. Each project is a unique solution to real-world problems."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/kuldeepkumawat0023"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaGithub className="w-5 h-5" />
                <span>View GitHub</span>
              </a>

              <a
                href="/contact"
                className="px-7 py-3.5 rounded-full border-2 border-primary/40 hover:border-primary bg-background/50 hover:bg-primary/10 text-foreground font-bold text-base transition-all flex items-center gap-2"
              >
                <span>Let's Work Together</span>
                <FaArrowRight className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Project Stats Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {projectMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 border border-primary/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-foreground mb-1">{item.value}</h3>
                  <p className="text-xs font-semibold text-muted-foreground">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
