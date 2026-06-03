import SEO from "@/components/SEO"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutStats } from "@/components/about/AboutStats"
import { ProjectsGrid } from "@/components/project/ProjectsGrid"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaGithub, FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaReact, FaJsSquare, FaPlayCircle
} from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

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
        href: "#"
      },
      {
        text: "Let's Work Together",
        icon: <FaArrowRight size={17} />,
        variant: "outline",
        href: "#"
      },
    ],
    image: "/images/home/user1.png",
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
    categories: ["All Projects", "Web Applications", "E-Commerce", "Dashboard", "Landing Pages", "Others"],
    projects: [
      {
        id: "1",
        category: "Dashboard",
        featured: true,
        title: "Task Manager App",
        description: "A full stack task management application with real-time updates, team collaboration and analytics.",
        image: "/images/projects/project1.png",
        tags: ["MERN Stack", "Socket.io", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "2",
        category: "E-Commerce",
        featured: true,
        title: "E-Commerce Website",
        description: "A complete e-commerce solution with cart, checkout, payment gateway and admin panel.",
        image: "/images/projects/project2.png",
        tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "3",
        category: "Portfolio",
        featured: false,
        title: "Personal Portfolio",
        description: "My personal portfolio website to showcase skills, projects and experience.",
        image: "/images/projects/project3.png",
        tags: ["React", "Framer Motion", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "4",
        category: "Web Application",
        featured: false,
        title: "Chat Application",
        description: "Real-time chat application with private rooms and authentication.",
        image: "/images/projects/project1.png",
        tags: ["MERN Stack", "Socket.io", "JWT", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "5",
        category: "Web Application",
        featured: false,
        title: "Job Finder Platform",
        description: "A platform to search and apply jobs with filters, authentication and dashboard.",
        image: "/images/projects/project2.png",
        tags: ["Next.js", "MongoDB", "Prisma", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "6",
        category: "Web Application",
        featured: false,
        title: "Weather App",
        description: "Get real-time weather updates of any location with beautiful UI.",
        image: "/images/projects/project3.png",
        tags: ["JavaScript", "API", "HTML", "CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        id: "7",
        category: "Web Application",
        featured: false,
        title: "Weather App",
        description: "Get real-time weather updates of any location with beautiful UI.",
        image: "/images/projects/project3.png",
        tags: ["JavaScript", "API", "HTML", "CSS"],
        liveLink: "#",
        githubLink: "#"
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
      { icon: <FaEnvelope size={18} />, text: "hello@yourname.com" },
      { icon: <FaPhoneAlt size={18} />, text: "+91 1234567890" },
    ],
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />
    }
  };

  return (
    <>
      <SEO props={{
        title: "Projects | DevPortfolio",
        description: "Explore my recent web development projects and case studies.",
        url: "/project"
      }} />
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
