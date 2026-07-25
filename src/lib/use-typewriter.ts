"use client"

import { useState, useEffect, useRef } from "react"

export function useTypewriter(text: string, speed: number = 80) {
  const [displayed, setDisplayed] = useState("")
  const prevRef = useRef("")

  useEffect(() => {
    if (prevRef.current === text) return
    prevRef.current = text

    let i = 0
    setDisplayed("")

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, isComplete: displayed === text }
}