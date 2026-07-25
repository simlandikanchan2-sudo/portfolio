"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, MapPin } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { education, certifications } from "@/lib/resume-data"

export function Education() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="06"
          label="// LEARNING"
          title="Education & Certifications"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div>
            <span className="font-mono text-xs text-accent flex items-center gap-2 mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              education[]
            </span>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-xl border border-border bg-surface"
                >
                  <h4 className="font-sans font-medium text-sm">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground/70">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs text-accent flex items-center gap-2 mb-4">
              <Award className="w-3.5 h-3.5" />
              certifications[]
            </span>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="p-5 rounded-xl border border-border bg-surface"
                >
                  <h4 className="font-sans font-medium text-sm">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
