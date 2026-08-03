"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Home, User, Layers, Code, Briefcase, Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const navLinks = [
  { name: "Home", href: "/", icon: Home, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "About", href: "/about", icon: User, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Services", href: "/services", icon: Layers, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Projects", href: "/project", icon: Code, color: "text-primary", bg: "bg-primary/10" },
  { name: "Experience", href: "/experience", icon: Briefcase, color: "text-primary", bg: "bg-primary/10" },
  { name: "Contact", href: "/contact", icon: Mail, color: "text-teal-400", bg: "bg-[#48A293]/10" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/80 backdrop-blur-md border-b border-border shadow-sm ${isScrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">{"</>"}</span>
          <span className="text-xl font-bold text-foreground">Kuldeep Kumawat</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors pb-1 ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <a
            href="https://github.com/kuldeepkumawat0023"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#48A293] to-[#368578] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(72,162,147,0.4)] hover:shadow-[0_0_25px_rgba(72,162,147,0.6)] hover:scale-105"
          >
            <FaGithub size={18} />
            Connect on GitHub
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] py-6 opacity-100 rounded-b-3xl" : "max-h-0 py-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 py-3 px-4 rounded-2xl transition-all duration-200 ${isActive
                    ? "bg-accent text-primary shadow-sm"
                    : "text-foreground hover:bg-accent/50"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`p-2 rounded-xl ${isActive ? link.bg : "bg-muted"} transition-colors`}>
                  <Icon size={20} className={isActive ? link.color : "text-muted-foreground"} />
                </div>
                <span className="text-base font-semibold">{link.name}</span>
              </Link>
            )
          })}
          <a
            href="https://github.com/kuldeepkumawat0023"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#48A293] to-[#368578] text-white px-5 py-3.5 w-full mt-4 rounded-xl text-base font-bold transition-all shadow-[0_0_15px_rgba(72,162,147,0.3)] hover:shadow-[0_0_25px_rgba(72,162,147,0.5)]"

            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaGithub size={20} />
            Connect on GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
