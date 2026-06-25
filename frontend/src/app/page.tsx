import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { TechnologiesSection } from "@/components/home/TechnologiesSection"
import { ExperienceSection } from "@/components/home/ExperienceSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { SEO } from "@/components/seo";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaRocket,
  FaDownload, FaPlayCircle, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight
} from "react-icons/fa"
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGitlab, SiPostman, SiBootstrap
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { ServicesCTA } from "@/components/services/ServicesCTA"


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
    imageAlt: "Kuldeep Kumawat - Full Stack Developer",
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
        icon: <FaJsSquare size={40} color="#F7DF1E" />,
        positionClass: "bottom-[10%] sm:bottom-[15%] right-[0%] sm:right-[2%] lg:right-[2%]",
        animateY: [-15, 5, -15],
        duration: 5.5,
        delay: 2
      }
    ]
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
      href: "/skills",
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
        company: "Pace Infotech",
        type: "Internship",
        description:
          "Specialized in the MERN Stack to develop and scale client projects. Managed database schemas in MongoDB, authored backend routes in Express, and integrated responsive React components.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "MERN Architecture"],
      },
      {
        period: "Jun 2022 - Jul 2022",
        role: "Web Development Intern",
        company: "Learn and Build",
        type: "Internship",
        description:
          "Built responsive, cross-compatible pages using HTML5, CSS3, and JavaScript. Translated complex design wireframes into mobile-first frontend code.",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      },
    ],
    stats: [
      { value: "20+", label: "Projects Completed", colorClass: "text-foreground" },
      { value: "10+", label: "Happy Clients", colorClass: "text-primary" },
      { value: "2+", label: "Years Experience", colorClass: "text-secondary" },
      { value: "24/7", label: "Support Available", colorClass: "text-foreground" },
    ],
    button: {
      text: "Download CV ↓",
      href: "#",
    },
  };

  const projectsData = {
    subtitle: "MY PROJECTS",
    headingPart1: "Some of My",
    headingPart2: "Recent Work",
    projects: [
      {
        id: "1",
        category: "Community Platform",
        featured: true,
        title: "Shree Namdev Community",
        description: "A full-stack community platform providing matrimonial, job listings, and business hubs. Features permission-based dashboards (Super Admin, Moderator, User), secure Google OAuth & JWT, and Cloudinary media uploading.",
        image: "/images/projects/project1.png",
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
        liveLink: "#",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "2",
        category: "AI Tool",
        featured: true,
        title: "AI Website Builder",
        description: "An AI-powered generator that builds production-ready websites from text prompts. Users can edit output in a built-in code editor or request refinements via AI. Supports one-click deployment.",
        image: "/images/projects/project2.png",
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "AI APIs"],
        liveLink: "#",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "3",
        category: "E-Commerce",
        featured: false,
        title: "Grocery Store Management",
        description: "A full-stack store platform incorporating Role-Based Access Control (RBAC) for managing inventory, items, shopping cart sessions, and billing transactions. Built with secure JWT routes.",
        image: "/images/projects/project3.png",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "RBAC", "EJS"],
        liveLink: "#",
        githubLink: "https://github.com/kuldeepkumawat0023"
      },
      {
        id: "4",
        category: "AI Application",
        featured: false,
        title: "AI Image Generator",
        description: "MERN stack application utilizing AI APIs to transform prompts into custom images. Features an OTP email validation system, password encryption, and dynamic user feeds.",
        image: "/images/projects/project1.png",
        tags: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
        liveLink: "#",
        githubLink: "https://github.com/kuldeepkumawat0023"
      }
    ],
    button: {
      text: "View All Projects →",
      href: "/projects",
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
      <main className="flex-grow pt-10">
        <HeroSection props={heroData} />
        <AboutSection props={aboutData} />
        <TechnologiesSection props={technologiesData} />
        <ExperienceSection props={experienceData} />
        <ProjectsSection props={projectsData} />
        <ServicesSection props={servicesData} />
        <ServicesCTA props={ctaData} />
      </main>
    </>
  );
}
