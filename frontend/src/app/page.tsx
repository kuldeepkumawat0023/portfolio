import { SEO } from "@/components/seo";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaRocket,
  FaDownload, FaPlayCircle, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGitlab, SiPostman, SiBootstrap
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { HomePageWrapper } from "@/components/home/HomePageWrapper"



export const metadata = SEO({
  title: "Kuldeep Kumawat | Full Stack Developer",
  description: "Portfolio of Kuldeep Kumawat showcasing React.js, Next.js, Node.js, Express.js, MongoDB and MySQL projects.",
  url: "/",
});

export default function Home() {
  const heroData = {
    badgeText: "Hello, I'm",
    badgeIcon: "👋",
    headingPart1: "Full Stack",
    headingPart2: "Developer",
    description: (
      <>
        I build modern, responsive and scalable web applications using{" "}
        <span className="text-primary font-semibold">MERN Stack</span> & more.
      </>
    ),
    buttons: [
      {
        text: "Download CV",
        icon: <FaDownload size={18} />,
        variant: "gradient",
        href: "/pdf/Kuldeep_Kumawat_Resume.pdf",
        download: "Kuldeep_Kumawat_Resume.pdf"
      },
      {
        text: "View My Work",
        icon: <FaPlayCircle size={17} />,
        variant: "outline",
      },
    ],
    socialText: "Find Me On",
    socialLinks: [
      { label: "GitHub", icon: <FaGithub size={17} />, href: "https://github.com/kuldeepkumawat0023" },
      { label: "LinkedIn", icon: <FaLinkedin size={17} />, href: "https://www.linkedin.com/in/kuldeep-kumawat-23284236a/" },
      { label: "GitLab", icon: <SiGitlab size={17} />, href: "https://gitlab.com/kuldeepkumawat2383" },
      { label: "Instagram", icon: <FaInstagram size={17} />, href: "https://www.instagram.com/itz_kuldeep_0023/" },
    ],
    image: "/images/home/kulsakmt.png",
    imageAlt: "Kuldeep Kumawat - Full Stack Developer"
  };


  const aboutData = {
    imageSrc: "/images/home/kuldeepkmt.png",
    experienceYears: "2+",
    experienceLabel: "Years<br />Experience",
    subtitle: "ABOUT ME",
    title: (
      <>
        I'm Kuldeep Kumawat, <br />
        a Passionate <span className="text-primary">Full Stack Developer</span>
      </>
    ),
    description:
      "I specialize in building interactive, user-friendly, and scalable web applications. I love turning ideas into real-world solutions with clean code and modern technologies.",
    stats: [
      { label: "Projects Completed", value: "20+", icon: "🚀" },
      { label: "Happy Clients", value: "10+", icon: "❤️" },
      { label: "Years of Experience", value: "2+", icon: "🎯" },
      { label: "Support Available", value: "24/7", icon: "🏆" },
    ],
    button: {
      text: "More About Me →",
      href: "/about",
    },
  };

  const technologiesData = {
    subtitle: "TECHNOLOGIES I WORK WITH",
    title: "My Skills",
    categories: [
      {
        name: "Frontend",
        emoji: "🧠",
        description: "Building responsive, fast, and interactive user interfaces.",
        technologies: [
          { name: "HTML5", icon: <FaHtml5 size={36} />, color: "text-orange-500" },
          { name: "CSS3", icon: <FaCss3Alt size={36} />, color: "text-blue-500" },
          { name: "Bootstrap", icon: <FaBootstrap size={36} />, color: "text-purple-600" },
          { name: "JavaScript", icon: <FaJsSquare size={36} />, color: "text-yellow-500" },
          { name: "TypeScript", icon: <SiTypescript size={36} />, color: "text-blue-400" },
          { name: "React.js", icon: <FaReact size={36} />, color: "text-cyan-400" },
          { name: "Next.js", icon: <SiNextdotjs size={36} />, color: "text-foreground" },
          { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "text-cyan-500" },
        ]
      },
      {
        name: "Backend & Database",
        emoji: "⚙️",
        description: "Developing secure APIs, routing, and database schemas.",
        technologies: [
          { name: "Node.js", icon: <FaNodeJs size={36} />, color: "text-green-500" },
          { name: "Express.js", icon: <SiExpress size={36} />, color: "text-foreground" },
          { name: "MongoDB", icon: <SiMongodb size={36} />, color: "text-green-600" },
          { name: "MySQL", icon: <SiMysql size={36} />, color: "text-blue-600" },
        ]
      },
      {
        name: "Tools & DevOps",
        emoji: "🛠️",
        description: "Managing environments, pipelines, and developer operations.",
        technologies: [
          { name: "Git", icon: <FaGitAlt size={36} />, color: "text-orange-600" },
          { name: "GitHub", icon: <FaGithub size={36} />, color: "text-foreground" },
          { name: "GitLab", icon: <SiGitlab size={36} />, color: "text-orange-500" },
          { name: "Figma", icon: <FaFigma size={36} />, color: "text-pink-500" },
          { name: "Postman", icon: <SiPostman size={36} />, color: "text-orange-500" },
          { name: "VS Code", icon: <VscVscode size={36} />, color: "text-blue-500" },
        ]
      },
      {
        name: "AI & Automation",
        emoji: "🤖",
        description: "Leveraging advanced artificial intelligence systems.",
        technologies: [
          { name: "Gemini", icon: <FaRocket size={36} />, color: "text-blue-400" },
          { name: "Antigravity", icon: <FaRocket size={36} />, color: "text-red-500" },
        ]
      }
    ],
    // Flat list for orbit view (all techs combined)
    technologies: [
      { name: "HTML5", icon: <FaHtml5 size={36} />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt size={36} />, color: "text-blue-500" },
      { name: "Bootstrap", icon: <FaBootstrap size={36} />, color: "text-purple-600" },
      { name: "JavaScript", icon: <FaJsSquare size={36} />, color: "text-yellow-500" },
      { name: "TypeScript", icon: <SiTypescript size={36} />, color: "text-blue-400" },
      { name: "React.js", icon: <FaReact size={36} />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs size={36} />, color: "text-foreground" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "text-cyan-500" },
      { name: "Node.js", icon: <FaNodeJs size={36} />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress size={36} />, color: "text-foreground" },
      { name: "MongoDB", icon: <SiMongodb size={36} />, color: "text-green-600" },
      { name: "MySQL", icon: <SiMysql size={36} />, color: "text-blue-600" },
      { name: "Git", icon: <FaGitAlt size={36} />, color: "text-orange-600" },
      { name: "GitHub", icon: <FaGithub size={36} />, color: "text-foreground" },
      { name: "GitLab", icon: <SiGitlab size={36} />, color: "text-orange-500" },
      { name: "Figma", icon: <FaFigma size={36} />, color: "text-pink-500" },
      { name: "Postman", icon: <SiPostman size={36} />, color: "text-orange-500" },
      { name: "VS Code", icon: <VscVscode size={36} />, color: "text-blue-500" },
      { name: "Antigravity AI", icon: <FaRocket size={36} />, color: "text-red-500" },
    ],
    button: {
      text: "View All Skills →",
      href: "/services",
    }
  };

  const experienceData = {
    subtitle: "MY EXPERIENCE",
    title: (
      <>
        My Professional <span className="text-primary">Journey</span>
      </>
    ),
    experiences: [
      {
        period: "Feb 2026 - Present",
        role: "Full Stack Developer",
        company: "Artifact Geeks",
        type: "Full-Time",
        description:
          "Architecting the frontend using Next.js for optimized SEO and performance. Implementing core backend features with Node.js, Express, MongoDB, and REST APIs. Responsible for full-stack deployment and scaling on Vercel and CapRover.",
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "REST APIs", "Vercel", "CapRover"],
      },
      {
        period: "Jun 2024 - Aug 2024",
        role: "Full Stack Developer Intern",
        company: "A2 Logic Group",
        type: "Internship",
        description:
          "Completed a structured Full Stack Web Development internship at A2 Logic Group — a leading IT training & development institute in Jaipur. Built and deployed MERN stack applications, worked on React components, Node.js APIs, and MongoDB database schemas under industry mentorship.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "MERN Stack"],
      },
      {
        period: "Sep 2024 - Jan 2026",
        role: "Freelance Web Developer",
        company: "Independent Projects",
        type: "Freelance",
        description:
          "Designed and built custom responsive web applications, client landing pages, and RESTful API integrations for various freelance projects using React.js, Node.js, and Tailwind CSS.",
        tags: ["React.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
      },

    ],
    stats: [
      { value: "20+", label: "Projects Completed", colorClass: "text-foreground" },
      { value: "10+", label: "Happy Clients", colorClass: "text-primary" },
      { value: "2+", label: "Years Experience", colorClass: "text-secondary" },
      { value: "24/7", label: "Support Available", colorClass: "text-foreground" },
    ]

  };

  const projectsData = {
    subtitle: "MY PROJECTS",
    headingPart1: "Some of My",
    headingPart2: "Recent Work",
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
        githubLink: "#"
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
        githubLink: "#"
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
        githubLink: "#"
      },
    ],
    button: {
      text: "View All Projects →",
      href: "/project",
    },
  };

  const servicesData = {
    subtitle: "SERVICES I PROVIDE",
    title: (
      <>
        How Can I <span className="text-secondary">Help You?</span>
      </>
    ),
    services: [
      {
        title: "Web Development",
        description: "Responsive & modern websites with best technologies.",
        icon: "🌐",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      },
      {
        title: "Full Stack Apps",
        description: "End-to-end web applications using MERN stack.",
        icon: "💻",
        color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      },
      {
        title: "API Development",
        description: "RESTful APIs & backend development with Node.js & Express.",
        icon: "⚙️",
        color: "bg-red-500/10 text-red-500 border-red-500/20",
      },
      {
        title: "UI/UX Design",
        description: "Clean, attractive & user friendly UI designs.",
        icon: "🎨",
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      },
      {
        title: "Database Design",
        description: "Optimized & secure database design with MongoDB & MySQL.",
        icon: "🗄️",
        color: "bg-green-500/10 text-green-500 border-green-500/20",
      },
      {
        title: "Bug Fixing",
        description: "Fix bugs and improve performance & security.",
        icon: "🐛",
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      },
    ],
    button: {
      text: "Hire Me →",
      href: "/contact",
    },
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
        text: "Sunder Vihar Colony, Vivek Vihar, Jaipur",
        link: "https://maps.google.com/?q=Sunder+Vihar+Colony+Vivek+Vihar+Jaipur+Rajasthan",

      },
    ],
    button: {
      text: "Let's Talk",
      icon: <FaArrowRight size={20} className="text-primary" />,
    },
  };

  return (
    <HomePageWrapper
      heroData={heroData}
      aboutData={aboutData}
      technologiesData={technologiesData}
      experienceData={experienceData}
      projectsData={projectsData}
      servicesData={servicesData}
      ctaData={ctaData}
    />
  );
}

