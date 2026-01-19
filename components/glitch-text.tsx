"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface DecodeTextProps {
  text: string
  className?: string
  decodeSpeed?: number
  repeatInterval?: number
}

interface CyclingDecodeTextProps {
  phrases: { line1: string; line2: string }[]
  className?: string
  line1ClassName?: string
  line2ClassName?: string
  decodeSpeed?: number
  displayDuration?: number
  displayDurations?: number[]
}

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"

export function CyclingDecodeText({
  phrases,
  className = "",
  line1ClassName = "",
  line2ClassName = "",
  decodeSpeed = 60,
  displayDuration = 4000,
  displayDurations,
}: CyclingDecodeTextProps & { displayDurations?: number[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayLine1, setDisplayLine1] = useState("")
  const [displayLine2, setDisplayLine2] = useState("")
  const isAnimatingRef = useRef(false)
  const mountedRef = useRef(true)

  const currentPhrase = phrases[currentIndex]
  const maxLine1Length = Math.max(...phrases.map((p) => p.line1.length))
  const maxLine2Length = Math.max(...phrases.map((p) => p.line2.length))

  const runDecodeAnimation = useCallback(
    (line1: string, line2: string, onComplete: () => void) => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      const maxLength = Math.max(line1.length, line2.length)
      let iteration = 0
      const totalIterations = maxLength * 3

      const interval = setInterval(() => {
        if (!mountedRef.current) {
          clearInterval(interval)
          return
        }

        const newLine1 = line1
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (char === "'") return "'"
            if (index < iteration / 3) {
              return line1[index]
            }
            return matrixChars[Math.floor(Math.random() * matrixChars.length)]
          })
          .join("")

        const newLine2 = line2
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (char === "'") return "'"
            if (index < iteration / 3) {
              return line2[index]
            }
            return matrixChars[Math.floor(Math.random() * matrixChars.length)]
          })
          .join("")

        setDisplayLine1(newLine1)
        setDisplayLine2(newLine2)
        iteration++

        if (iteration > totalIterations) {
          clearInterval(interval)
          setDisplayLine1(line1)
          setDisplayLine2(line2)
          isAnimatingRef.current = false
          onComplete()
        }
      }, decodeSpeed)

      return () => clearInterval(interval)
    },
    [decodeSpeed],
  )

  useEffect(() => {
    mountedRef.current = true

    // Initial animation
    const cleanup = runDecodeAnimation(currentPhrase.line1, currentPhrase.line2, () => {})

    return () => {
      mountedRef.current = false
      if (cleanup) cleanup()
    }
  }, [])

  useEffect(() => {
    if (!mountedRef.current) return

    const currentDuration = displayDurations?.[currentIndex] ?? displayDuration

    // Cycle to next phrase after display duration
    const cycleTimeout = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % phrases.length
      setCurrentIndex(nextIndex)
      runDecodeAnimation(phrases[nextIndex].line1, phrases[nextIndex].line2, () => {})
    }, currentDuration)

    return () => clearTimeout(cycleTimeout)
  }, [currentIndex, phrases, displayDuration, displayDurations, runDecodeAnimation])

  return (
    <div className={className} style={{ minWidth: `${maxLine2Length}ch` }}>
      <span className={`block ${line1ClassName}`} style={{ minHeight: "1.2em" }}>
        {displayLine1 || currentPhrase.line1}
      </span>
      <span className={`block ${line2ClassName}`} style={{ minHeight: "1.2em" }}>
        {displayLine2 || currentPhrase.line2}
      </span>
    </div>
  )
}

export function DecodeText({ text, className = "", decodeSpeed = 60, repeatInterval = 10000 }: DecodeTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const isAnimatingRef = useRef(false)

  const runDecodeAnimation = () => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    let iteration = 0
    const totalIterations = text.length * 3

    const interval = setInterval(() => {
      const newText = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " "
          if (index < iteration / 3) {
            return text[index]
          }
          return matrixChars[Math.floor(Math.random() * matrixChars.length)]
        })
        .join("")

      setDisplayText(newText)
      iteration++

      if (iteration > totalIterations) {
        clearInterval(interval)
        setDisplayText(text)
        isAnimatingRef.current = false
      }
    }, decodeSpeed)
  }

  useEffect(() => {
    runDecodeAnimation()
  }, [text])

  useEffect(() => {
    const interval = setInterval(() => {
      runDecodeAnimation()
    }, repeatInterval)

    return () => clearInterval(interval)
  }, [repeatInterval, text])

  return <span className={className}>{displayText}</span>
}



// Matrix rain background component
export function MatrixRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dropsRef = useRef<number[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789"
    let fontSize = window.innerWidth >= 1024 ? 24 : 16
    let columns = 0

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      
      fontSize = window.innerWidth >= 1024 ? 24 : 16
      columns = Math.floor(canvas.width / fontSize)
      
      // Initialize or resize drops array
      const newDrops = Array(columns).fill(0).map((_, i) => 
        dropsRef.current[i] !== undefined ? dropsRef.current[i] : Math.random() * -100
      )
      dropsRef.current = newDrops
    }
    
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `bold ${fontSize}px monospace`

      for (let i = 0; i < dropsRef.current.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = dropsRef.current[i] * fontSize

        // Create gradient for each character
        const gradient = ctx.createLinearGradient(x, y - fontSize * 8, x, y)
        gradient.addColorStop(0, "rgba(14, 165, 233, 0)")
        gradient.addColorStop(0.5, "rgba(14, 165, 233, 0.5)")
        gradient.addColorStop(1, "rgba(14, 165, 233, 1)")
        ctx.fillStyle = gradient

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0
        }
        dropsRef.current[i]++
      }
    }

    const interval = setInterval(draw, 45)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.2 }}
    />
  )
}
