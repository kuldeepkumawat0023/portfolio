"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRight, FaBriefcase, FaCode, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

export function ExperienceHero({ props }: { props: any }) {
  const journeyMilestones = [
    {
      role: "Full Stack Developer",
      company: "Artifact Geeks",
      period: "2026 - Present",
      icon: <FaBriefcase className="w-5 h-5 text-primary" />,
      color: "border-primary/30 bg-primary/10",
    },
    {
      role: "Full Stack Intern",
      company: "A2 Logic Group",
      period: "2024",
      icon: <FaCode className="w-5 h-5 text-cyan-500" />,
      color: "border-cyan-500/30 bg-cyan-500/10",
    },
    {
      role: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2024 - 2025",
      icon: <FaLaptopCode className="w-5 h-5 text-teal-400" />,
      color: "border-teal-500/30 bg-teal-500/10",
    },


  ];

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

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
              <span>{props.badgeText || "MY EXPERIENCE"}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.15]">
              {props.headingPart1 || "Experience That"}{" "}
              <span className="bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578] bg-clip-text text-transparent">

                {props.headingPart2 || "Builds Solutions"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              {props.description || "Over the years, I've worked on diverse projects, collaborated with amazing teams and helped businesses grow using modern technologies."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/pdf/Kuldeep_Kumawat_Resume.pdf"
                download="Kuldeep_Kumawat_Resume.pdf"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download CV</span>
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

          {/* Right Column: Experience Timeline Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {journeyMilestones.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className={`p-5 rounded-2xl border backdrop-blur-xl ${item.color} flex items-center gap-4 transition-all duration-300 shadow-md`}
              >
                <div className="p-3.5 rounded-xl bg-background/90 border border-white/10 shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-base font-bold text-foreground">{item.role}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
