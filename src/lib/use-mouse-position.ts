"use client"

import { useState, useEffect, useCallback } from "react"

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const update = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", update)
    return () => window.removeEventListener("mousemove", update)
  }, [update])

  return position
}