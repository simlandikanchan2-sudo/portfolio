"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { projects } from "@/lib/resume-data"
import { ExternalLink } from "lucide-react"

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  const reset = () => {
    if (!ref.current) return
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`transition-transform duration-200 ease-out ${className || ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}

export function Projects() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          label="// PORTFOLIO"
          title="Projects"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <TiltCard>
                <article
                  data-cursor="View"
                  className="group relative rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-accent">
                        project_{i + 1}()
                      </span>
                      <h3 className="mt-2 font-sans text-xl font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-xs text-muted-foreground"
                      >
                        <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
