"use client"

import { useEffect, useState, useLayoutEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const labels = ["View", "Read", "Explore", "Visit"]

export function AnimatedCursor() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState("")

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 300, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 20 })

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const over = () => setVisible(true)
    const out = () => setVisible(false)

    const pointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, article, [data-cursor]")
      if (interactive) {
        const custom = interactive.getAttribute("data-cursor")
        setLabel(custom || labels[Math.floor(Math.random() * labels.length)])
      } else {
        setLabel("")
      }
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseenter", over)
    document.addEventListener("mouseleave", out)
    document.addEventListener("mouseover", pointerOver)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseenter", over)
      document.removeEventListener("mouseleave", out)
      document.removeEventListener("mouseover", pointerOver)
      document.body.style.cursor = ""
    }
  }, [mounted, cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          scale: label ? 1 : 0.5,
          width: label ? "auto" : 12,
          height: label ? "auto" : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`flex items-center justify-center rounded-full ${
          label
            ? "bg-accent/20 backdrop-blur-sm border border-accent/30 px-3 py-1"
            : "w-3 h-3 bg-accent"
        }`}
      >
        {label && (
          <span className="text-xs font-mono font-medium text-accent whitespace-nowrap">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  )
}
