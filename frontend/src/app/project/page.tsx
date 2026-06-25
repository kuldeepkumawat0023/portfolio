import { SEO } from "@/components/seo"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutStats } from "@/components/about/AboutStats"
import { ProjectsGrid } from "@/components/project/ProjectsGrid"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaGithub, FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaReact, FaJsSquare, FaPlayCircle
} from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

export const metadata = SEO({
  title: "Projects | Kuldeep Kumawat",
  description: "Explore modern web applications and portfolio projects developed by Kuldeep Kumawat.",
  url: "/project",
});

export default function ProjectsPage() {
  const heroData = {
    badgeText: "MY WORK",
    badgeIcon: "✨",
    headingPart1: "Projects That",
    headingPart2: "Speak Impact",
    description: "Here are some of the projects I've worked on. Each project is a unique solution to real-world problems.",
    buttons: [
      {
        text: "View GitHub",
        icon: <FaGithub size={18} />,
        variant: "gradient",
        href: "https://github.com/kuldeepkumawat0023"
      },
      {
        text: "Let's Work Together",
        icon: <FaArrowRight size={17} />,
        variant: "outline",
        href: "#"
      },
    ],
    image: "/images/home/kuldeepkmt.png",
    imageAlt: "Developer Image",
    badges: [
      {
        label: "React",
        icon: <FaReact size={40} color="#61DAFB" />,
        positionClass: "top-[10%] sm:top-[15%] left-[0%] sm:left-[2%] lg:left-[2%]",
        animateY: [-10, 10, -10],
        duration: 4,
        delay: 0
      },
      {
        label: "JavaScript",
        icon: <FaJsSquare size={40} color="#F7DF1E" />,
        positionClass: "bottom-[10%] sm:bottom-[15%] left-[0%] sm:left-[2%] lg:left-[2%]",
        animateY: [-8, 12, -8],
        duration: 4.5,
        delay: 0.5
      },
      {
        label: "TypeScript",
        icon: <SiTypescript size={40} color="#3178C6" />,
        positionClass: "top-[42%] sm:top-[45%] right-[-8%] sm:right-[-5%] lg:right-[-5%]",
        animateY: [8, -12, 8],
        duration: 4.8,
        delay: 1.5
      }
    ]
  };

  const statsData = [
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  const projectsData = {
    categories: ["All Projects", "Web Applications", "AI Platforms", "Community", "Landing Pages"],
    projects: [
      {
        id: "1",
        category: "AI Platforms",
        featured: true,
        title: "AIJobFit — AI Recruitment Platform",
        description: "An AI-powered precision hiring platform connecting job seekers and recruiters. Features AI-based resume matching, smart candidate scoring, role-fit analysis, and automated screening workflows.",
        image: "/images/projects/aijobfit.png",
        tags: ["Next.js", "Node.js", "MongoDB", "AI APIs", "Tailwind"],
        liveLink: "https://aijobfit.artifactgeeks.com/",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "2",
        category: "Web Applications",
        featured: true,
        title: "ArtifactGeeks — Company Website",
        description: "Full company website for ArtifactGeeks — a leading IT training institute in Jaipur. Features online/offline course listings, corporate training solutions, blog, career guides, and a student LMS portal.",
        image: "/images/projects/artifactgeeks.png",
        tags: ["Next.js", "Node.js", "Tailwind", "Vercel"],
        liveLink: "https://artifactgeeks.com/",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "3",
        category: "Landing Pages",
        featured: false,
        title: "CRT Guide — Campus Recruitment Training",
        description: "A comprehensive interactive digital guide for colleges, students & TPOs covering the complete Artifact Geeks CRT program. 90-day structure across 13 chapters: aptitude, DSA, communication, mock interviews.",
        image: "/images/projects/crt.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Cloudflare Pages"],
        liveLink: "https://dev.ag-crt.pages.dev/",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "4",
        category: "Community",
        featured: false,
        title: "Naamdev Community Platform",
        description: "A full-stack digital sanctuary for the Namdev collective — empowering the community through unified matrimonial, career, and business hubs. Includes role-based dashboards, Google OAuth, JWT auth.",
        image: "/images/projects/naamdev.png",
        tags: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Vercel"],
        liveLink: "https://naamdev-community.vercel.app/",
        githubLink: "https://github.com/kuldeepkumawat0023"
      }
    ],
    button: {
      text: "View More Projects",
      icon: <FaArrowRight size={16} />,
      href: "#"
    }
  };

  const ctaData = {
    subtitle: "LET'S BUILD SOMETHING GREAT TOGETHER",
    title: "Have a project in mind?",
    description: "I'm available for freelance work.",
    contacts: [
      {
        icon: <FaEnvelope size={18} />,
        text: "kuldeepkumawat2383@gmail.com",
        link: "mailto:kuldeepkumawat2383@gmail.com",
      },
      {
        icon: <FaPhoneAlt size={18} />,
        text: "+91 7296824595",
        link: "tel:+917296824595",
      },
    ],
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />
    }
  };

  return (
    <>
      <main className="pt-10">
        <div className="relative">
          <HeroSection props={heroData} />
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-20 -mt-20">
            <AboutStats props={{ stats: statsData }} />
          </div>
        </div>

        <ProjectsGrid props={projectsData} />
        <ServicesCTA props={ctaData} />
      </main>
    </>
  )
}
