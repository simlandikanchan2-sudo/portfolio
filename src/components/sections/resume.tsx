"use client"

import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { featuredStats } from "@/lib/resume-data"

export function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/20 before:to-transparent">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="07"
          label="RESUME"
          title="Resume"
          description="Professional background and qualifications — download the full resume."
        />

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-10"
        >
          <div className="grid grid-cols-3 gap-4">
            {featuredStats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-accent/5 border border-accent/10"
              >
                <p className="text-xl font-bold text-accent">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-all"
            >
              <FileDown className="w-4 h-4" />
              Download Full Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
