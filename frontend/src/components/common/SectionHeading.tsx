import * as React from "react"
import { cn } from "@/utils/cn"

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-10", centered && "items-center text-center", className)} {...props}>
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-wider text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
    </div>
  )
}
