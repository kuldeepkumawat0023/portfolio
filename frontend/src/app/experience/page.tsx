import { SEO } from "@/components/seo"
import { ExperienceHero } from "@/components/experience/ExperienceHero"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"

import { AboutStats } from "@/components/about/AboutStats"
import { ExperienceSkills } from "@/components/experience/ExperienceSkills"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaDownload, FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaReact, FaNodeJs, FaBriefcase, FaCode, FaUser, FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaFigma, FaDocker, FaChevronUp, FaUsers, FaHeart, FaRocket, FaClock, FaCheckCircle, FaHeadphones, FaLinkedin, FaInstagram
} from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiFirebase, SiNetlify, SiVercel, SiGitlab } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

export const metadata = SEO({
  title: "Experience | Kuldeep Kumawat",
  description: "Professional work experience, achievements and technical expertise of Kuldeep Kumawat.",
  url: "/experience",
});

export default function ExperiencePage() {
  const heroData = {
    badgeText: "MY EXPERIENCE",
    badgeIcon: "✨",
    headingPart1: "Experience That",
    headingPart2: "Builds Solutions",
    description: "Over the years, I've worked on diverse projects, collaborated with amazing teams and helped businesses grow using modern technologies.",
    buttons: [
      {
        text: "Download CV",
        icon: <FaDownload size={16} />,
        variant: "gradient",
        href: "/pdf/Kuldeep_Kumawat_Resume.pdf",
        download: "Kuldeep_Kumawat_Resume.pdf"
      },
      {
        text: "Let's Work Together",
        icon: <FaArrowRight size={16} />,
        variant: "outline",
        href: "/contact"
      },
    ],
    socialText: "Connect with me",
    socialLinks: [
      { icon: <FaGithub size={18} />, href: "https://github.com/kuldeepkumawat0023", label: "GitHub" },
      { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/kuldeep-kumawat-23284236a/", label: "LinkedIn" },
      { icon: <SiGitlab size={18} />, href: "https://gitlab.com/kuldeepkumawat2383", label: "GitLab" },
      { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/itz_kuldeep_0023/", label: "Instagram" }
    ],
    image: "/images/home/kuldeepkmt.png",
    imageAlt: "Developer Image"
  };


  const timelineData = {
    subtitle: "MY PROFESSIONAL JOURNEY",
    title: <>Where I've <span className="text-primary">Worked & Grown</span></>,
    experiences: [
      {
        period: "Feb 2026 - Present",
        role: "Full Stack Developer",
        company: "Artifact Geeks",
        description: "Architecting the frontend using Next.js for optimized SEO and performance. Implementing core backend features with Node.js, Express, MongoDB, and REST APIs. Responsible for full-stack deployment and scaling on Vercel and CapRover.",
        icon: <FaBriefcase size={20} />,
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "REST APIs", "Vercel", "CapRover"]
      },
      {
        period: "Jun 2024 - Aug 2024",
        role: "Full Stack Developer Intern",
        company: "A2 Logic Group",
        description: "Completed a structured Full Stack Web Development internship at A2 Logic Group — a leading IT training & development institute in Jaipur. Built and deployed MERN stack applications, worked on React components, Node.js APIs, and MongoDB database schemas under industry mentorship.",
        icon: <FaCode size={20} />,
        tags: ["React.js", "Node.js", "Express", "MongoDB", "MERN Stack"]
      },
      {
        period: "Sep 2024 - Jan 2026",
        role: "Freelance Web Developer",
        company: "Independent Projects",
        description: "Designed and built custom responsive web applications, client landing pages, and RESTful API integrations for various freelance projects using React.js, Node.js, and Tailwind CSS.",
        icon: <FaLaptopCode size={20} />,
        tags: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"]
      }

    ]
  };

  const statsData = [
    { value: "2+", label: "Years of Experience", icon: <FaClock size={28} className="text-[#48A293] mb-2" /> },
    { value: "20+", label: "Projects Completed", icon: <FaHeart size={28} className="text-[#48A293] mb-2" /> },
    { value: "10+", label: "Happy Clients", icon: <FaUsers size={28} className="text-[#48A293] mb-2" /> },
    { value: "100+", label: "Commitments Delivered", icon: <FaRocket size={28} className="text-[#48A293] mb-2" /> },
    { value: "24/7", label: "Support Available", icon: <FaHeadphones size={28} className="text-[#48A293] mb-2" /> }
  ];


  const skillsData = {
    progressSkills: [
      { name: "JavaScript / TypeScript", percentage: 90 },
      { name: "React.js / Next.js", percentage: 92 },
      { name: "Node.js / Express.js", percentage: 88 },
      { name: "MongoDB / SQL", percentage: 85 },
      { name: "HTML / CSS / Tailwind CSS", percentage: 95 }
    ],
    techGrid: [
      { name: "HTML5", icon: <FaHtml5 size={32} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJsSquare size={32} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
      { name: "React", icon: <FaReact size={32} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} className="text-foreground" /> },
      { name: "Node.js", icon: <FaNodeJs size={32} color="#339933" /> },
      { name: "Express.js", icon: <SiExpress size={32} className="text-foreground" /> },
      { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
      { name: "Git & GitHub", icon: <FaGithub size={32} className="text-foreground" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
      { name: "Postman", icon: <SiPostman size={32} color="#FF6C37" /> }
    ],
    toolsList: [
      { name: "VS Code", icon: <VscVscode size={20} color="#007ACC" /> },
      { name: "Figma", icon: <FaFigma size={20} color="#F24E1E" /> },
      { name: "Docker", icon: <FaDocker size={20} color="#2496ED" /> },
      { name: "Firebase", icon: <SiFirebase size={20} color="#FFCA28" /> },
      { name: "Netlify", icon: <SiNetlify size={20} color="#00C7B7" /> },
      { name: "Vercel", icon: <SiVercel size={20} className="text-foreground" /> }
    ]
  };

  const ctaData = {
    subtitle: "LET'S CREATE SOMETHING AMAZING",
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
        <ExperienceHero props={heroData} />
        <ExperienceTimeline props={timelineData} />
        <ExperienceSkills props={skillsData} />
        <ServicesCTA props={ctaData} />
      </main>

    </>
  )
}
