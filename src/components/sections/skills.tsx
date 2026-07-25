"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { skillGroups } from "@/lib/resume-data"

export function Skills() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          label="// TOOLBOX"
          title="Technical Skills"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-5 rounded-xl border border-border bg-surface"
            >
              <span className="font-mono text-xs text-accent">
                {group.category.toLowerCase().replace(/\s+/g, "_")}()
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground font-mono"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--accent)",
                      color: "var(--accent-foreground)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
