import SEO from "@/components/SEO"
import { HeroSection } from "@/components/home/HeroSection"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"
import { AboutStats } from "@/components/about/AboutStats"
import { ExperienceSkills } from "@/components/experience/ExperienceSkills"
import { ServicesCTA } from "@/components/services/ServicesCTA"

import {
  FaDownload, FaArrowRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaReact, FaNodeJs, FaBriefcase, FaCode, FaUser, FaLaptopCode, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaFigma, FaDocker, FaChevronUp, FaUsers, FaHeart, FaRocket, FaClock, FaCheckCircle, FaHeadphones
} from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiFirebase, SiNetlify, SiVercel } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

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
        href: "#"
      },
      {
        text: "Let's Work Together",
        icon: <FaArrowRight size={16} />,
        variant: "outline",
        href: "#"
      },
    ],
    socialText: "Connect with me",
    socialLinks: [
      { icon: <FaGithub size={18} />, href: "#", label: "GitHub" },
      { icon: <FaLaptopCode size={18} />, href: "#", label: "LinkedIn" },
      { icon: <FaUser size={18} />, href: "#", label: "Twitter" },
      { icon: <FaCode size={18} />, href: "#", label: "Instagram" }
    ],
    image: "/images/home/kuldeepkmt.png",
    imageAlt: "Developer Image",
    badges: [
      {
        label: "React",
        icon: <FaReact size={40} color="#61DAFB" />,
        positionClass: "top-[15%] sm:top-[20%] left-[-5%] sm:left-[0%]",
        animateY: [-10, 10, -10],
        duration: 4,
        delay: 0
      },
      {
        label: "Node.js",
        icon: <FaNodeJs size={40} color="#339933" />,
        positionClass: "top-[30%] right-[-10%] sm:right-[0%]",
        animateY: [-8, 12, -8],
        duration: 4.5,
        delay: 0.5
      },
      {
        label: "TypeScript",
        icon: <SiTypescript size={40} color="#3178C6" />,
        positionClass: "bottom-[20%] right-[0%] sm:right-[10%]",
        animateY: [8, -12, 8],
        duration: 4.8,
        delay: 1.5
      }
    ]
  };

  const timelineData = {
    subtitle: "MY PROFESSIONAL JOURNEY",
    title: <>Where I've <span className="text-primary">Worked & Grown</span></>,
    experiences: [
      {
        period: "2023 - Present",
        role: "Full Stack Developer (Freelance)",
        company: "Self-Employed",
        description: "Building modern web applications using MERN stack. Working with clients worldwide to deliver scalable and user-friendly solutions.",
        icon: <FaBriefcase size={20} />,
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
      },
      {
        period: "2022 - 2023",
        role: "Web Developer Intern",
        company: "CodeCraft Labs",
        description: "Worked on real-world projects, implemented UI designs and integrated APIs. Gained hands-on experience in modern web technologies.",
        icon: <FaLaptopCode size={20} />,
        tags: ["HTML", "CSS", "JavaScript", "PHP"]
      },
      {
        period: "2021 - 2023",
        role: "Frontend Developer",
        company: "TechSolutions Inc.",
        description: "Developed responsive and interactive user interfaces using React, Redux and Tailwind CSS. Improved performance and user experience.",
        icon: <FaCode size={20} />,
        tags: ["React", "Redux", "Tailwind CSS", "JavaScript"]
      },
      {
        period: "2020 - 2021",
        role: "Junior Web Developer",
        company: "Digital Web Agency",
        description: "Assisted in building and maintaining websites for clients. Collaborated with designers and backend developers to ship projects.",
        icon: <FaUser size={20} />,
        tags: ["HTML", "CSS", "JavaScript", "jQuery"]
      }
    ]
  };

  const statsData = [
    { value: "2+", label: "Years of Experience", icon: <FaClock size={28} className="text-orange-500 mb-2" /> },
    { value: "20+", label: "Projects Completed", icon: <FaHeart size={28} className="text-orange-500 mb-2" /> },
    { value: "10+", label: "Happy Clients", icon: <FaUsers size={28} className="text-orange-500 mb-2" /> },
    { value: "100+", label: "Commitments Delivered", icon: <FaRocket size={28} className="text-orange-500 mb-2" /> },
    { value: "24/7", label: "Support Available", icon: <FaHeadphones size={28} className="text-orange-500 mb-2" /> }
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
        title: "Experience | DevPortfolio",
        description: "My professional journey, work experience, and the technologies I use.",
        url: "/experience"
      }} />
      <main className="pt-10">
        <HeroSection props={heroData} />

        <div className="relative z-20 bg-background pt-10">
          <ExperienceTimeline props={timelineData} />

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-30 -mt-10">
            <AboutStats props={{ stats: statsData }} />
          </div>

          <ExperienceSkills props={skillsData} />
          <ServicesCTA props={ctaData} />
        </div>
      </main>
    </>
  )
}
