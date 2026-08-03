"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">{"</>"}</span>
              <span className="text-xl font-bold text-foreground">Kuldeep Kumawat</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building scalable web applications, transforming ideas into real-world solutions with modern technologies.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/kuldeepkumawat0023" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container hover:bg-primary hover:text-white transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kuldeep-kumawat-23284236a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/itz_kuldeep_0023/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/project" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-muted-foreground">React.js & Next.js</span></li>
              <li><span className="text-sm text-muted-foreground">Node.js & Express</span></li>
              <li><span className="text-sm text-muted-foreground">MongoDB & PostgreSQL</span></li>
              <li><span className="text-sm text-muted-foreground">Tailwind CSS</span></li>
              <li><span className="text-sm text-muted-foreground">TypeScript</span></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:kuldeepkumawat2383@gmail.com" className="hover:text-primary transition-colors">
                  kuldeepkumawat2383@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Sunder Vihar Colony, Vivek Vihar, Jaipur, Rajasthan</span>
              </li>
            </ul>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Projects
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kuldeep Kumawat. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={16} /> kuldeepkumawat2383@gmail.com
          </div>
        </div>
      </div>
    </footer>
  )
}
