"use client"

import { motion } from "framer-motion"
import { FileDown, Printer } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  personalInfo,
  experiences,
  skillGroups,
  education,
  certifications,
} from "@/lib/resume-data"

export function Resume() {
  return (
    <section id="resume" className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="07"
          label="// RESUME"
          title="Resume"
          description="Full professional background, skills, and qualifications."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-all"
          >
            <FileDown className="w-4 h-4" />
            Download PDF
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-all"
          >
            <Printer className="w-4 h-4" />
            Print Resume
          </button>
        </motion.div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-10 print:shadow-none print:border-none">
          <div className="print:text-black">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-border">
              <div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold">
                  {personalInfo.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {personalInfo.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground font-mono">
                  {personalInfo.tagline}
                </p>
              </div>
              <div className="text-xs text-muted-foreground space-y-1 sm:text-right">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-xs text-accent tracking-widest mb-4">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {personalInfo.intro}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-xs text-accent tracking-widest mb-4">
                EXPERIENCE
              </h4>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-5 sm:pl-6">
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h5 className="text-sm font-semibold">{exp.role}</h5>
                      <span className="text-xs font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {exp.company}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {exp.achievements.map((ach, j) => (
                        <li
                          key={j}
                          className="text-xs text-muted-foreground flex gap-2 break-words"
                        >
                          <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-accent" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-xs text-accent tracking-widest mb-4">
                SKILLS
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-medium mb-1.5">
                      {group.category}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {group.skills.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-xs text-accent tracking-widest mb-4">
                  EDUCATION
                </h4>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-accent tracking-widest mb-4">
                  CERTIFICATIONS
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
