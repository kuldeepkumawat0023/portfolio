import SEO from "@/components/SEO"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { TechnologiesSection } from "@/components/home/TechnologiesSection"
import { ExperienceSection } from "@/components/home/ExperienceSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ContactSection } from "@/components/home/ContactSection"

export default function Home() {
  return (
    <>
      <SEO props={{ 
        title: "Full Stack Developer Portfolio | MERN Stack Expert",
        description: "Professional portfolio of a passionate Full Stack Developer specializing in React, Node.js, Express, and MongoDB. View my projects, skills, and experience.",
        url: "/" 
      }} />
      
      <Navbar />
      
      <main className="flex-grow pt-10">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
