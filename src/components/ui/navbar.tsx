"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { navLinks, personalInfo } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const linkItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-base/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-lg font-bold tracking-tight hover:text-accent transition-colors"
        >
          <span className="text-accent font-mono">&lt;</span>
          {personalInfo.name.split(" ")[0].toLowerCase()}
          <span className="text-accent font-mono">/&gt;</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              {link.label}
            </button>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-9 h-9 flex items-center justify-center rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 4.5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-px bg-foreground"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px bg-foreground"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4.5 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-5 h-px bg-foreground"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-base flex flex-col items-center justify-center"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  variants={linkItem}
                  onClick={() => handleNav(link.href)}
                  className="text-3xl font-sans font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-accent font-mono text-lg">{'// '}</span>
                  {link.label}
                </motion.button>
              ))}
              <motion.div variants={linkItem} className="mt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium text-base hover:opacity-90 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
