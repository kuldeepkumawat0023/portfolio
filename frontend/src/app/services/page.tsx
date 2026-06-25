import { SEO } from "@/components/seo"
import { HeroSection } from "@/components/home/HeroSection"
import { SkillsList } from "@/components/services/SkillsList"
import { ServicesGrid } from "@/components/services/ServicesGrid"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaCode, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaDesktop, FaLayerGroup, FaMicrochip, FaPalette, FaBug, FaPlayCircle,
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaGithub, FaFigma
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiExpress, SiTailwindcss, SiPostman, SiMongodb, SiMysql
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

export const metadata = SEO({
  title: "Services & Skills | Kuldeep Kumawat",
  description: "Frontend Development, Backend Development, API Development, Database Design and Full Stack Development services.",
  url: "/services",
});

export default function ServicesPage() {
  const heroData = {
    badgeText: "MY SKILLS & SERVICES",
    badgeIcon: "✨",
    headingPart1: "Skills I Master,",
    headingPart2: "Services I Provide",
    description: "I combine technical expertise and creative thinking to build modern, scalable and user-friendly web solutions.",
    buttons: [
      {
        text: "Hire Me",
        icon: <FaArrowRight size={18} />,
        variant: "gradient",
        href: "/contact"
      },
      {
        text: "View My Work",
        icon: <FaPlayCircle size={17} />,
        variant: "outline",
        href: "/project"
      },
    ],
    image: "/images/home/kulsakmt.png",
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
        label: "Node.js",
        icon: <FaNodeJs size={40} color="#339933" />,
        positionClass: "top-[42%] sm:top-[45%] left-[-8%] sm:left-[-5%] lg:left-[-5%]",
        animateY: [10, -10, 10],
        duration: 5,
        delay: 1
      },
      {
        label: "MongoDB",
        icon: <SiMongodb size={40} color="#47A248" />,
        positionClass: "bottom-[10%] sm:bottom-[15%] left-[0%] sm:left-[2%] lg:left-[2%]",
        animateY: [-8, 12, -8],
        duration: 4.5,
        delay: 0.5
      },
      {
        label: "Next.js",
        icon: <SiNextdotjs size={40} />,
        positionClass: "top-[10%] sm:top-[15%] right-[0%] sm:right-[2%] lg:right-[2%]",
        animateY: [-12, 8, -12],
        duration: 4.2,
        delay: 1.2
      },
      {
        label: "Express.js",
        icon: <SiExpress size={40} />,
        positionClass: "top-[42%] sm:top-[45%] right-[-8%] sm:right-[-5%] lg:right-[-5%]",
        animateY: [8, -12, 8],
        duration: 4.8,
        delay: 1.5
      },
      {
        label: "JavaScript",
        icon: <FaJs size={40} color="#F7DF1E" />,
        positionClass: "bottom-[10%] sm:bottom-[15%] right-[0%] sm:right-[2%] lg:right-[2%]",
        animateY: [-15, 5, -15],
        duration: 5.5,
        delay: 2
      }
    ]
  };

  const skillsData = {
    subtitle: "MY TECHNICAL SKILLS",
    title: ["Technologies I", "Work With"],
    description: "I have hands-on experience with a wide range of technologies and tools to build efficient and scalable solutions.",
    skills: [
      { name: "HTML5", percentage: 95, icon: <FaHtml5 size={32} className="text-orange-500" /> },
      { name: "CSS3", percentage: 90, icon: <FaCss3Alt size={32} className="text-blue-500" /> },
      { name: "Bootstrap", percentage: 85, icon: <FaBootstrap size={32} className="text-purple-600" /> },
      { name: "JavaScript", percentage: 90, icon: <FaJsSquare size={32} className="text-yellow-500" /> },
      { name: "TypeScript", percentage: 85, icon: <SiTypescript size={32} className="text-blue-400" /> },
      { name: "React", percentage: 92, icon: <FaReact size={32} className="text-cyan-400" /> },
      { name: "Next.js", percentage: 90, icon: <SiNextdotjs size={32} className="text-foreground" /> },
      { name: "Node.js", percentage: 88, icon: <FaNodeJs size={32} className="text-green-500" /> },
      { name: "Express.js", percentage: 85, icon: <SiExpress size={32} className="text-foreground" /> },
      { name: "MongoDB", percentage: 85, icon: <SiMongodb size={32} className="text-green-600" /> },
      { name: "MySQL", percentage: 80, icon: <SiMysql size={32} className="text-blue-500" /> },
      { name: "Tailwind CSS", percentage: 90, icon: <SiTailwindcss size={32} className="text-cyan-500" /> },
      { name: "Git & GitHub", percentage: 90, icon: <FaGithub size={32} className="text-foreground" /> },
      { name: "VS Code", percentage: 95, icon: <VscVscode size={32} className="text-blue-500" /> },
      { name: "Postman", percentage: 85, icon: <SiPostman size={32} className="text-orange-500" /> },
      { name: "Figma", percentage: 80, icon: <FaFigma size={32} className="text-purple-500" /> },
    ],
    button: {
      text: "View All Skills",
      icon: <FaArrowRight size={18} />
    }
  };

  const servicesGridData = {
    subtitle: "SERVICES I PROVIDE",
    title: ["How I Can", "Help You"],
    description: "I build digital solutions that help businesses grow and succeed.",
    services: [
      {
        id: "01",
        title: "Web Development",
        description: "Responsive and modern websites built with best practices.",
        icon: <FaDesktop size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
      {
        id: "02",
        title: "Full Stack Development",
        description: "End-to-end web applications using MERN stack.",
        icon: <FaLayerGroup size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
      {
        id: "03",
        title: "API Development",
        description: "RESTful APIs and backend services with Node.js & Express.",
        icon: <FaMicrochip size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
      {
        id: "04",
        title: "UI/UX Design",
        description: "Clean, attractive & user-friendly UI designs with great UX.",
        icon: <FaPalette size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
      {
        id: "05",
        title: "Database Design",
        description: "Optimized and secure database design with MongoDB.",
        icon: <FaDatabase size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
      {
        id: "06",
        title: "Bug Fixing & Maintenance",
        description: "Fix bugs and improve performance & security of applications.",
        icon: <FaBug size={28} className="text-white" />,
        linkText: "Learn More",
        linkIcon: <FaArrowRight size={16} />
      },
    ],
    button: {
      text: "View All Services",
      icon: <FaArrowRight size={18} />
    }
  };

  const ctaData = {
    subtitle: "LET'S WORK TOGETHER",
    title: "Have a project in mind?",
    description: "I'm available for freelance work.",
    contacts: [
      { icon: <FaEnvelope size={18} />, text: "kuldeepkumawat2383@gmail.com", link: "mailto:kuldeepkumawat2383@gmail.com" },
      { icon: <FaPhoneAlt size={18} />, text: "+91 7296824595", link: "tel:+917296824595" },
      { icon: <FaMapMarkerAlt size={18} />, text: "Kuchaman City, Rajasthan", link: "https://maps.google.com/?q=Kuchaman+City+Rajasthan" }
    ],
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />
    }
  };

  return (
    <>
      <main className="pt-10">
        <HeroSection props={heroData} />
        <SkillsList props={skillsData} />
        <ServicesGrid props={servicesGridData} />
        <ServicesCTA props={ctaData} />
      </main>
    </>
  )
}
