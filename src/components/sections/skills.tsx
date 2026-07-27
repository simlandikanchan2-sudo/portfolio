"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { skillGroups } from "@/lib/resume-data"

const groupVariants = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      staggerChildren: 0.05,
    },
  },
})

const skillVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/20 before:to-transparent">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          label="TOOLBOX"
          title="Technical Skills"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              variants={groupVariants(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <span className="font-mono text-xs text-accent">
                {group.category.toLowerCase().replace(/\s+/g, "_")}()
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground font-mono border border-transparent hover:border-accent/20"
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
