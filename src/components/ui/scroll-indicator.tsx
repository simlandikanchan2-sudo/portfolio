"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { navLinks } from "@/lib/resume-data"
import { useActiveSection } from "@/lib/use-active-section"

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const active = useActiveSection()

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      <div className="relative w-px h-32 bg-border">
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent"
          style={{ height }}
        />
      </div>
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const id = link.href.replace("#", "")
          return (
            <button
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative flex items-center justify-center"
              aria-label={link.label}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === id
                    ? "bg-accent scale-125"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                }`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-xs font-mono text-muted-foreground whitespace-nowrap">
                {link.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
