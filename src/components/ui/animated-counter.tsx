"use client"

import { useMotionValue, useTransform, animate, useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  label: string
  duration?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(() => Math.round(count.get()))
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      count.set(from)
      animate(count, to, { duration, ease: "easeOut" as const })
    }
  }, [inView, count, from, to, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0">
        <motion.span className="text-3xl sm:text-4xl font-sans font-bold text-accent">
          {rounded}
        </motion.span>
        <span className="text-2xl sm:text-3xl font-sans font-bold text-accent">
          {suffix}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
