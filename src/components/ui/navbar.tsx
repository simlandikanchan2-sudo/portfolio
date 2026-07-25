"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { navLinks, personalInfo } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

const drawerVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.2 },
  },
}

const menuOrder = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => ({
        id: l.href.replace("#", ""),
        top: document.getElementById(l.href.replace("#", ""))?.offsetTop ?? 0,
      }))
      const scrollPos = window.scrollY + 120
      let current = sections[0]?.id ?? ""
      for (const s of sections) {
        if (scrollPos >= s.top) current = s.id
      }
      setActive(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
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
        scrolled && !mobileOpen
          ? "bg-base/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 h-16">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-9 h-9 flex items-center justify-center rounded-md hover:bg-muted md:hidden"
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

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans text-lg font-bold tracking-tight hover:text-accent transition-colors"
          >
            <span className="text-accent font-mono">&lt;</span>
            {personalInfo.name.split(" ")[0].toLowerCase()}
            <span className="text-accent font-mono">/&gt;</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  active === id
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {link.label}
              </button>
            )
          })}
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

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white dark:bg-surface md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-8 py-10">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-sans text-lg font-bold tracking-tight hover:text-accent transition-colors"
                >
                  <span className="text-accent font-mono">&lt;</span>
                  {personalInfo.name.split(" ")[0].toLowerCase()}
                  <span className="text-accent font-mono">/&gt;</span>
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 pt-16 space-y-2">
                {menuOrder.map((item) => {
                  const isActive = active === item.href.replace("#", "")
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNav(item.href)}
                      className={cn(
                        "w-full flex items-center justify-between py-4 text-lg font-medium transition-colors",
                        isActive
                          ? "text-accent"
                          : "text-foreground hover:text-accent"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-muted-foreground text-xl leading-none">&gt;</span>
                    </button>
                  )
                })}
              </nav>

              <div className="pt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Download Resume
                </a>
              </div>

              <div className="pt-8 pb-4">
                <button
                  onClick={() => handleNav("#projects")}
                  className="w-full py-4 rounded-lg bg-accent text-accent-foreground text-base font-semibold hover:opacity-90 transition-all"
                >
                  View Work
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
