"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  ExternalLink,
  Globe,
  Mail,
  FileDown,
} from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { personalInfo } from "@/lib/resume-data"

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} style={{ perspective: "1200px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: i * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-start sm:items-center px-4 sm:px-8 pt-20 sm:pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-accent/10 blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
          className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-accent/8 blur-[100px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }}
          className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] rounded-full bg-accent/5 blur-[80px]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-7 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs font-medium text-accent tracking-widest">
              INTRODUCING
            </span>
            <span className="h-px flex-1 max-w-20 bg-border" />
          </motion.div>

          <h1 className="font-sans font-bold leading-[0.9] tracking-tight">
            <span className="text-clamp-hero block">
              <SplitText text={personalInfo.name.split(" ")[0]} />
            </span>
            <span className="text-clamp-hero block text-accent mt-1">
              <SplitText text={personalInfo.name.split(" ")[1]} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              role: backend
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {personalInfo.role}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-5 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center gap-3"
          >
            <MagneticButton
              href="#experience"
              variant="primary"
              className="w-full sm:w-auto justify-center"
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5" />
            </MagneticButton>
            <MagneticButton
              href="#resume"
              variant="outline"
              className="w-full sm:w-auto justify-center"
            >
              <FileDown className="w-3.5 h-3.5" />
              View Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              variant="outline"
              className="w-full sm:w-auto justify-center"
            >
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Globe className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto rounded-2xl border border-border bg-surface overflow-hidden relative shadow-2xl shadow-accent/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-xs text-accent mb-2">
                    {"// system.status"}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    active
                  </div>
                  <div className="mt-6 space-y-2 text-left px-8">
                    {[
                      "stack: laravel, php",
                      "db: mysql, postgresql",
                      "security: hardened",
                      "uptime: 99.9%",
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        <span className="text-accent">$</span> {line}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl border border-accent/20 bg-accent/5 -z-10"
            />
            <motion.div
              animate={{ rotate: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -top-4 -left-4 w-16 h-16 rounded-lg border border-accent/10 bg-accent/5 -z-10"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
