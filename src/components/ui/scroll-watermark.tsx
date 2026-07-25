"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollWatermark() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.06, 0.06, 0])

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed inset-0 pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      <div className="absolute top-[15%] left-[5%] font-mono text-[14vw] font-bold text-accent/5 whitespace-nowrap -rotate-[5deg]">
        {"// WATERMARK"}
      </div>
      <div className="absolute bottom-[20%] right-[5%] font-mono text-[10vw] font-bold text-accent/3 whitespace-nowrap rotate-[3deg]">
        {"// KANCHAN"}
      </div>
    </motion.div>
  )
}