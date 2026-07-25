"use client"

import { useTheme } from "next-themes"
import { useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"

const sunPath =
  "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"

const moonPath =
  "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  if (!mounted) return <div className="w-9 h-9" />

  const isDark = theme === "dark"

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-muted/80 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <motion.path
          d={isDark ? moonPath : sunPath}
          animate={{ d: isDark ? moonPath : sunPath }}
          transition={{ duration: 0.4, ease: "easeInOut" as const }}
        />
      </svg>
    </motion.button>
  )
}
