"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { experiences } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

const slideVariant = (i: number) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  },
})

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/20 before:to-transparent">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="02"
          label="EXPERIENCE"
          title="Where I've Worked"
        />

        <div className="mt-14 relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={slideVariant(idx)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-0 sm:pl-14"
              >
                <div className="absolute left-[11px] top-7 w-4 h-4 rounded-full border-2 border-accent bg-base hidden sm:block group-hover:bg-accent transition-colors" />

                <div
                  className={cn(
                    "group rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 border-l-2 border-l-transparent hover:border-l-accent/50",
                    openIndex === idx
                      ? "border-accent/30 shadow-lg shadow-accent/5 border-l-accent/50"
                      : "hover:border-accent/20"
                  )}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === idx ? null : idx)
                    }
                    className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-accent">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-sans text-lg font-semibold group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground font-mono">
                        {""}
                        {exp.company}
                        {""}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut" as const,
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" as const }}
                          className="overflow-hidden"
                        >
                          <ul className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-2">
                            {exp.achievements.map((ach, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: i * 0.06,
                                  duration: 0.35,
                                  ease: "easeOut" as const,
                                }}
                                className="flex gap-2 text-sm text-muted-foreground break-words"
                              >
                                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                                {ach}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
