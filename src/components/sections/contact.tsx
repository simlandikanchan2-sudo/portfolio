"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  ArrowUp,
  Send,
} from "lucide-react"
import { personalInfo } from "@/lib/resume-data"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")
    if (name && email && message) {
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${name}&body=${message}`
    }
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent/20 before:to-transparent">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="08"
          label="// CONNECT"
          title="Get in Touch"
          description="Have a project in mind or just want to say hello? Let's connect."
        />

        <div className="mt-12 grid md:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-3"
          >
            {[
              { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: MapPin, label: "Location", value: personalInfo.location },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-2 pt-1">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Globe className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
          >
            <span className="font-mono text-xs text-accent">
              {'// send_message'}
            </span>
            <div className="mt-2 space-y-4">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground font-mono">
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground font-mono">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-muted-foreground font-mono">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-all"
              >
                {submitted ? "Sent!" : "Send Message"}
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js &middot; Framer Motion &middot; Tailwind CSS
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
