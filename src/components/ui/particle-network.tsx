"use client"

import { useRef, useEffect } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  layer: number
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId = 0
    let mouseX = -9999
    let mouseY = -9999

    const NODES = 50
    const CONNECTION_DIST = 200

    let nodes: Node[] = []
    let w = 0
    let h = 0

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas!.width = w
      canvas!.height = h
    }

    const init = () => {
      resize()
      nodes = []
      for (let i = 0; i < NODES; i++) {
        const layer = Math.floor(Math.random() * 3)
        const yMin = [0.05, 0.22, 0.5][layer]
        const yMax = [0.22, 0.5, 0.92][layer]
        nodes.push({
          x: Math.random() * w,
          y: yMin * h + Math.random() * (yMax - yMin) * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          layer,
        })
      }
    }

    init()
    window.addEventListener("resize", init)

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }
    window.addEventListener("mousemove", onMouse)
    window.addEventListener("mouseleave", onLeave)

    const animate = () => {
      ctx!.clearRect(0, 0, w, h)

      const isDark = document.documentElement.classList.contains("dark")
      const rgb = isDark ? "139, 92, 246" : "61, 47, 224"

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1

        const dx = n.x - mouseX
        const dy = n.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = ((150 - dist) / 150) * 0.4
          n.vx += (dx / dist) * force
          n.vy += (dy / dist) * force
        }

        n.vx *= 0.99
        n.vy *= 0.99
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15
            const cross = a.layer !== b.layer
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.strokeStyle = `rgba(${rgb}, ${cross ? alpha * 2 : alpha})`
            ctx!.lineWidth = cross ? 1 : 0.5
            ctx!.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, 2, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(${rgb}, 0.5)`
        ctx!.fill()
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", init)
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, opacity: 0.5 }}
    />
  )
}
