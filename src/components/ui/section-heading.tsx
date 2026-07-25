"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  number: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({
  number,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs font-medium text-accent tracking-widest">
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <span
        className="section-number"
        aria-hidden="true"
      >
        {number}
      </span>
    </motion.div>
  )
}
