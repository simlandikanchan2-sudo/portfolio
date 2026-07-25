"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  className?: string
  variant?: "primary" | "outline"
}

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer"

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:opacity-90",
    outline:
      "border border-border text-foreground hover:bg-muted",
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {content}
      </a>
    )
  }

  return <button {...props}>{content}</button>
}
