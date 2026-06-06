"use client"

import * as React from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Generate page numbers
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronLeft size={14} />
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-colors ${
            currentPage === page 
              ? "bg-primary text-white shadow-md shadow-primary/30" 
              : "border border-border bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {page}
        </button>
      ))}

      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-primary hover:text-white hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronRight size={14} />
      </button>
    </div>
  )
}
