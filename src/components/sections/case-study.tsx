"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { featuredStats } from "@/lib/resume-data"
import {
  Shield,
  Zap,
  Server,
  Lock,
  Layers,
  Code,
} from "lucide-react"

const statIcons = [Code, Server, Zap, Shield, Layers, Lock]

export function CaseStudy() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          label="FEATURED"
          title="DonateBazaar by the Numbers"
          description="A full-stack donation platform built with Laravel 11 — architected for scale, hardened for security, and enriched with AI."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {featuredStats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
                <AnimatedCounter
                  to={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2}
                />
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <span className="font-mono text-xs text-accent">
              {"// architecture"}
            </span>
            <div className="mt-4 space-y-2">
              {[
                "5-layer Razorpay verification with HMAC signing & webhook reconciliation",
                "18 security controls: CSRF, rate limiting, role/status middleware, KYC, audit logging",
                "AI chatbot streaming via Anthropic Claude API for donor support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <span className="font-mono text-xs text-accent">
              {"// highlights"}
            </span>
            <div className="mt-4 space-y-2">
              {[
                "Automated email lifecycle via Laravel queues",
                "Idempotent payment processing with refund handling",
                "Comprehensive audit trail for every transaction",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
