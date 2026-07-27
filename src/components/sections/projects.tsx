"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
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

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const scale = useMotionValue(1)

  const springX = useSpring(rotateX, { stiffness: 300, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 300, damping: 20 })
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rX = ((y - centerY) / centerY) * -8
    const rY = ((x - centerX) / centerX) * 8
    rotateX.set(rX)
    rotateY.set(rY)
    scale.set(1.02)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        scale: springScale,
        transformStyle: "preserve-3d",
      }}
      className={className || ""}
    >
      {children}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/20 before:to-transparent">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          label="PORTFOLIO"
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
                  className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
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
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/10"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 2 * 0.15, duration: 0.5 }}
            className="h-full"
          >
            <div className="relative rounded-2xl border-2 border-dashed border-border bg-surface/50 p-6 sm:p-8 h-full min-h-[280px] flex items-center justify-center">
              <div className="text-center">
                <span className="font-mono text-xs text-muted-foreground">
                  project_3()
                </span>
                <h3 className="mt-2 font-sans text-xl font-semibold text-muted-foreground">
                  Coming Soon
                </h3>
                 <p className="mt-2 text-sm text-muted-foreground/80 max-w-xs mx-auto">
                  More projects are in the works. Check back soon!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
