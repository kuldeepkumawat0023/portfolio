"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeSplash } from "@/components/common/WelcomeSplash";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ServicesCTA } from "@/components/services/ServicesCTA";

interface HomePageWrapperProps {
  heroData: any;
  aboutData: any;
  technologiesData: any;
  experienceData: any;
  projectsData: any;
  servicesData: any;
  ctaData: any;
}

export function HomePageWrapper({
  heroData,
  aboutData,
  technologiesData,
  experienceData,
  projectsData,
  servicesData,
  ctaData,
}: HomePageWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [splashFinished, setSplashFinished] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setSplashFinished(true);
  };

  return (
    <>
      {showSplash && <WelcomeSplash onComplete={handleSplashComplete} />}

      <AnimatePresence>
        {splashFinished && (
          <motion.main
            initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow pt-10"
          >
            <HeroSection props={heroData} />
            <AboutSection props={aboutData} />
            <TechnologiesSection props={technologiesData} />
            <ExperienceSection props={experienceData} />
            <ProjectsSection props={projectsData} />
            <ServicesSection props={servicesData} />
            <ServicesCTA props={ctaData} />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
