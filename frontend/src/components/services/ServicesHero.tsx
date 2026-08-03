"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle, FaReact, FaNodeJs, FaCode, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si";

export function ServicesHero({ props }: { props: any }) {
  const serviceHighlights = [
    {
      title: "Frontend Engineering",
      subtitle: "React.js, Next.js & Tailwind CSS",
      icon: <FaReact className="w-6 h-6 text-cyan-400" />,
      color: "border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    },
    {
      title: "Backend Development",
      subtitle: "Node.js, Express & REST APIs",
      icon: <FaNodeJs className="w-6 h-6 text-green-500" />,
      color: "border-green-500/30 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.15)]",
    },
    {
      title: "Database Architecture",
      subtitle: "MongoDB & MySQL Optimization",
      icon: <SiMongodb className="w-6 h-6 text-emerald-500" />,
      color: "border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    },
    {
      title: "Full Stack Integration",
      subtitle: "Scalable MERN Architecture",
      icon: <FaLayerGroup className="w-6 h-6 text-primary" />,
      color: "border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(72,162,147,0.15)]",
    },

  ];

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

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
              <span>{props.badgeText || "MY SKILLS & SERVICES"}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.15]">
              {props.headingPart1 || "Skills I Master,"}{" "}
              <span className="bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578] bg-clip-text text-transparent">

                {props.headingPart2 || "Services I Provide"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              {props.description || "I combine technical expertise and creative thinking to build modern, scalable and user-friendly web solutions."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Hire Me</span>
                <FaArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/project"
                className="px-7 py-3.5 rounded-full border-2 border-primary/40 hover:border-primary bg-background/50 hover:bg-primary/10 text-foreground font-bold text-base transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <FaPlayCircle className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Service Matrix Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {serviceHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-5 rounded-2xl border backdrop-blur-xl ${item.color} transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="p-3 rounded-xl bg-background/80 w-fit mb-4 border border-white/10 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
