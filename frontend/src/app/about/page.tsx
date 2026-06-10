import { SEO } from "@/components/seo"
import { AboutHero } from "@/components/about/AboutHero"
import { AboutStats } from "@/components/about/AboutStats"
import { JourneyValues } from "@/components/about/JourneyValues"
import { TechnologiesSection } from "@/components/home/TechnologiesSection"
import {
  FaUser, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaBriefcase, FaDownload, FaPlayCircle, FaCode,
  FaUsers, FaHeart, FaHeadphones, FaThumbsUp, FaCog, FaLaptopCode, FaHandshake, FaLightbulb, FaBookOpen, FaArrowRight,
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaRocket
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGitlab, SiPostman
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { ServicesCTA } from "@/components/services/ServicesCTA"

export const metadata = SEO({
  title: "About Kuldeep Kumawat | Full Stack Developer",
  description: "Discover the professional journey, technical expertise, skills, and experience of Kuldeep Kumawat, a Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.",
  url: "/about",
});

export default function AboutPage() {
  const heroData = {
    image: "/images/home/kuldeepkmt.png",
    imageAlt: "Kuldeep Kumawat",
    badge: {
      title: "Full Stack",
      subtitle: "Developer",
      icon: <FaCode size={24} className="text-primary" />
    },
    subtitle: "ABOUT ME",
    descriptions: [
      "I build modern, responsive and scalable web applications that provide real value to users. I love turning ideas into digital products using clean code and modern technologies.",
      "With a strong foundation in both frontend and backend development, I enjoy solving problems and creating seamless user experiences."
    ],
    personalInfo: [
      { label: "Name:", value: "Kuldeep Kumawat", icon: <FaUser size={18} className="text-primary" /> },
      { label: "Phone:", value: "+91 7296824595", icon: <FaPhoneAlt size={18} className="text-primary" /> },
      { label: "Email:", value: "kuldeepkumawat2383@gmail.com", icon: <FaEnvelope size={18} className="text-primary" /> },
      { label: "Experience:", value: "2+ Years", icon: <FaClock size={18} className="text-primary" /> },
      { label: "Location:", value: "Kuchaman City, Rajasthan", icon: <FaMapMarkerAlt size={18} className="text-primary" /> },
      { label: "Freelance:", value: "Available", icon: <FaBriefcase size={18} className="text-primary" /> },
    ],
    buttons: [
      { text: "Download CV", href: "#", variant: "gradient", icon: <FaDownload size={18} /> },
      { text: "Let's Talk", href: "#", variant: "outline", icon: <FaPlayCircle size={18} className="text-primary" /> }
    ]
  };

  const statsData = [
    { value: "20+", label: "Projects Completed", icon: <FaUsers className="text-primary" size={24} /> },
    { value: "10+", label: "Happy Clients", icon: <FaHeart className="text-primary" size={24} /> },
    { value: "2+", label: "Years Experience", icon: <FaClock className="text-primary" size={24} /> },
    { value: "24/7", label: "Support Available", icon: <FaHeadphones className="text-primary" size={24} /> },
    { value: "100%", label: "Client Satisfaction", icon: <FaThumbsUp className="text-primary" size={24} /> },
    { value: "30+", label: "Technologies Used", icon: <FaCog className="text-primary" size={24} /> },
  ];

  const journeyValuesData = {
    journeySubtitle: "MY JOURNEY",
    journeyTitle: <>My Professional <span className="text-primary">Journey</span></>,
    experiences: [
      {
        period: "2026 - Present",
        title: "Full Stack Developer - Artifact Geeks",
        description: "Working as a full-time employee in Jaipur, building high-quality, scalable web applications.",
        icon: <FaBriefcase size={20} className="text-primary" />
      },
      {
        period: "2025 - 2026",
        title: "Frontend Developer (Freelance)",
        description: "Developed responsive UI with React & Tailwind CSS. Improved performance and user experience.",
        icon: <FaLaptopCode size={20} className="text-primary" />
      },
      {
        period: "2024 - 2025",
        title: "Web Developer Intern - A2 Logic Group",
        description: "Completed internship in Jaipur, working on real-world projects and improving core coding skills.",
        icon: <FaCode size={20} className="text-primary" />
      }
    ],
    journeyButton: {
      text: "View Full Experience",
      href: "/experience",
      icon: <FaArrowRight size={16} className="text-primary" />
    },
    valuesSubtitle: "WHAT I BELIEVE IN",
    valuesTitle: <>My Core <span className="text-primary">Values</span></>,
    values: [
      {
        title: "Clean Code",
        description: "I write clean, maintainable and efficient code that scales with your business.",
        icon: <FaCode size={24} className="text-primary" />
      },
      {
        title: "Problem Solving",
        description: "I love solving complex problems and turning challenges into opportunities.",
        icon: <FaLightbulb size={24} className="text-primary" />
      },
      {
        title: "Client First",
        description: "Client satisfaction is my top priority. I believe in communication and transparency.",
        icon: <FaHandshake size={24} className="text-primary" />
      },
      {
        title: "Continuous Learning",
        description: "I stay updated with the latest technologies to deliver modern solutions.",
        icon: <FaBookOpen size={24} className="text-primary" />
      }
    ]
  };

  const technologiesData = {
    subtitle: "TECHNOLOGIES I WORK WITH",
    title: "My Skills",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 size={36} />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt size={36} />, color: "text-blue-500" },
      { name: "Bootstrap", icon: <FaBootstrap size={36} />, color: "text-purple-600" },
      { name: "JavaScript", icon: <FaJsSquare size={36} />, color: "text-yellow-500" },
      { name: "TypeScript", icon: <SiTypescript size={36} />, color: "text-blue-400" },
      { name: "React", icon: <FaReact size={36} />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs size={36} />, color: "text-foreground" },
      { name: "Node.js", icon: <FaNodeJs size={36} />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress size={36} />, color: "text-foreground" },
      { name: "MongoDB", icon: <SiMongodb size={36} />, color: "text-green-600" },
      { name: "MySQL", icon: <SiMysql size={36} />, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "text-cyan-500" },
      { name: "Git", icon: <FaGitAlt size={36} />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub size={36} />, color: "text-foreground" },
      { name: "GitLab", icon: <SiGitlab size={36} />, color: "text-orange-500" },
      { name: "Figma", icon: <FaFigma size={36} />, color: "text-pink-500" },
      { name: "Postman", icon: <SiPostman size={36} />, color: "text-orange-500" },
      { name: "VS Code", icon: <VscVscode size={36} />, color: "text-blue-500" },
      { name: "Antigravity", icon: <FaRocket size={36} />, color: "text-red-500" },
    ],
    button: {
      text: "View All Skills →",
      href: "/skills",
    }
  };

  const ctaData = {
    subtitle: "LET'S WORK TOGETHER",
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
      {
        icon: <FaMapMarkerAlt size={18} />,
        text: "Kuchaman City, Rajasthan",
        link: "https://maps.google.com/?q=Kuchaman+City+Rajasthan",
      },
    ],
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />,
    },
  };

  return (
    <>
      <main className="pt-20">

        <div className="flex flex-col">
          <AboutHero props={heroData} />
          <AboutStats props={{ stats: statsData }} />
          <JourneyValues props={journeyValuesData} />

          {/* Reusing Technologies Section from Home */}
          <TechnologiesSection props={technologiesData} />
          <ServicesCTA props={ctaData} />
        </div>
      </main>
    </>
  )
}
