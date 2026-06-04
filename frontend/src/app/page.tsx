import SEO from "@/components/SEO"
import { HeroSection } from "@/components/home/HeroSection"
import { AboutSection } from "@/components/home/AboutSection"
import { TechnologiesSection } from "@/components/home/TechnologiesSection"
import { ExperienceSection } from "@/components/home/ExperienceSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ContactSection } from "@/components/home/ContactSection"
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaRocket,
  FaDownload, FaPlayCircle, FaLinkedin, FaTwitter,FaArrowRight, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt
} from "react-icons/fa"
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGitlab, SiPostman 
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { ServicesCTA } from "@/components/services/ServicesCTA"
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
      { label: "GitHub", icon: <FaGithub size={17} />, href: "#" },
      { label: "LinkedIn", icon: <FaLinkedin size={17} />, href: "#" },
      { label: "Twitter", icon: <FaTwitter size={17} />, href: "#" },
      { label: "Instagram", icon: <FaInstagram size={17} />, href: "#" },
    ],
    image: "/images/home/user.png",
    imageAlt: "Full Stack Developer",
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
    imageSrc: "/images/home/user1.png",
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

  const experienceData = {
    subtitle: "MY EXPERIENCE",
    title: (
      <>
        My Professional <span className="text-primary">Journey</span>
      </>
    ),
    experiences: [
      {
        period: "2023 - Present",
        role: "Full Stack Developer",
        company: "Freelancer",
        description:
          "Building scalable web apps using MERN stack. Working with clients worldwide to deliver solutions.",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        period: "2022 - 2023",
        role: "Frontend Developer",
        company: "TechSolutions Inc.",
        description:
          "Developed responsive UI with React and Tailwind CSS. Integrated REST APIs and optimized performance.",
        tags: ["React", "Tailwind CSS", "API"],
      },
      {
        period: "2021 - 2022",
        role: "Web Developer Intern",
        company: "CodeCraft Labs",
        description:
          "Worked on real-world projects and learned modern web technologies and best coding practices.",
        tags: ["HTML", "CSS", "JavaScript"],
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
        description: "Optimized & secure database design with MongoDB.",
        icon: "s️",
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

  const contactData = {
    subtitle: "LET'S WORK TOGETHER",
    title: "Have a project in mind?",
    description: "I'm available for freelance work. Feel free to reach out and let's discuss your next project.",
    contactDetails: [
      { icon: <FaEnvelope size={20} className="text-white/80" />, value: "hello@yourname.com" },
      { icon: <FaPhoneAlt size={20} className="text-white/80" />, value: "+91 12345 67890" },
      { icon: <FaMapMarkerAlt size={20} className="text-white/80" />, value: "India" },
    ],
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project Inquiry",
      messageLabel: "Your Message",
      messagePlaceholder: "Tell me about your project...",
      buttonText: "Send Message 🚀"
    }
  };
    const ctaData = {
      subtitle: "LET'S WORK TOGETHER",
      title: "Have a project in mind?",
      description: "I'm available for freelance work.",
      contacts: [
        { icon: <FaEnvelope size={18} />, text: "hello@yourname.com" },
        { icon: <FaPhoneAlt size={18} />, text: "+91 1234567890" },
        { icon: <FaMapMarkerAlt size={18} />, text: "India" }
      ],
      button: {
        text: "Let's Talk",
        icon: <FaArrowRight size={20} className="text-primary" />
      }
    };

  return (
    <>
      <SEO props={{ 
        title: "Full Stack Developer Portfolio | MERN Stack Expert",
        description: "Professional portfolio of a passionate Full Stack Developer specializing in React, Node.js, Express, and MongoDB. View my projects, skills, and experience.",
        url: "/" 
      }} />
      
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
