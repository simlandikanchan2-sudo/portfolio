"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Target,
  Search,
  Zap,
  MessageSquare,
  Users,
  Clock,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { personalInfo } from "@/lib/resume-data"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  target: Target,
  search: Search,
  zap: Zap,
  "message-square": MessageSquare,
  users: Users,
  clock: Clock,
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="01"
          label="// ABOUT"
          title="Beyond the Code"
          description={personalInfo.intro}
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-300 group"
          >
            <span className="font-mono text-xs text-accent mb-3 block group-hover:translate-x-1 transition-transform">
              languages()
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {personalInfo.languages.map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/10"
                >
                  {lang}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {personalInfo.strengths.slice(0, 3).map((strength, i) => {
                const Icon = iconMap[strength.icon]
                return (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="p-1.5 rounded-md bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors">
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-sm font-medium">{strength.title}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {personalInfo.strengths.slice(3).map((strength, i) => {
            const Icon = iconMap[strength.icon]
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="p-5 rounded-2xl border border-border bg-surface flex flex-col items-center justify-center text-center gap-2 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
                <span className="text-xs font-medium leading-tight">
                  {strength.title}
                </span>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-2 md:col-span-2 lg:col-span-2 p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:border-accent/30 transition-all duration-300"
          >
            <span className="font-mono text-xs text-accent">
              {"// core_philosophy"}
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              I combine analytical thinking with an ownership mindset to build
              production-ready systems. Every line of code is written with
              maintainability, security, and performance in mind.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
