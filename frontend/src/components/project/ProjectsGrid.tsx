"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { GlassCard } from "@/components/common/GlassCard"
import { Pagination } from "@/components/common/Pagination"

export function ProjectsGrid({ props }: { props: any }) {
  const [activeFilter, setActiveFilter] = React.useState("All Projects")
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 6

  if (!props) return null;

  const filteredProjects = activeFilter === "All Projects" 
    ? props.projects 
    : props.projects?.filter((project: any) => project.category === activeFilter)

  const totalPages = Math.ceil((filteredProjects?.length || 0) / itemsPerPage)
  
  const currentProjects = filteredProjects?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentPage(1); // Reset to first page when changing category
  }

  return (
    <section className="py-20 relative bg-surface-container/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {props.categories?.map((category: string) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category 
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                  : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {currentProjects?.map((project: any, index: number) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="overflow-hidden group h-full flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card border border-border">
                  {/* Image Container */}
                  <div className="h-56 overflow-hidden relative bg-muted/30">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </div>
                    )}

                    {/* Overlay with links */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg">
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                          <FaGithub size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags?.map((tag: string) => (
                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-surface-container rounded-md text-foreground border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <a href={project.liveLink || "#"} className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Live Demo
                      </a>
                      <a href={project.githubLink || "#"} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                        GitHub <FaGithub size={16} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  )
}
