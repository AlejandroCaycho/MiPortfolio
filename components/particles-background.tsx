"use client"

import { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      trail: Array<{ x: number; y: number; opacity: number }>
    }> = []

    const colors = [
      "rgba(0, 255, 255, ", // Cyan
      "rgba(255, 0, 255, ", // Magenta
      "rgba(0, 255, 127, ", // Spring green
      "rgba(255, 20, 147, ", // Deep pink
      "rgba(138, 43, 226, ", // Blue violet
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
      particles.length = 0

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: [],
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity })
        if (particle.trail.length > 15) {
          particle.trail.shift()
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges with some randomness
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.vx += (Math.random() - 0.5) * 0.2
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.vy += (Math.random() - 0.5) * 0.2
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        particle.trail.forEach((point, trailIndex) => {
          const trailOpacity = (point.opacity * trailIndex) / particle.trail.length
          const trailSize = (particle.size * trailIndex) / particle.trail.length

          ctx.beginPath()
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2)
          ctx.fillStyle = particle.color + trailOpacity + ")"
          ctx.fill()

          // Add glow effect
          ctx.shadowColor = particle.color + "0.8)"
          ctx.shadowBlur = trailSize * 2
          ctx.fill()
          ctx.shadowBlur = 0
        })

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Inner glow
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3)
        gradient.addColorStop(0, particle.color + particle.opacity + ")")
        gradient.addColorStop(0.5, particle.color + particle.opacity * 0.3 + ")")
        gradient.addColorStop(1, particle.color + "0)")

        ctx.fillStyle = gradient
        ctx.fill()

        // Outer glow
        ctx.shadowColor = particle.color + "0.8)"
        ctx.shadowBlur = particle.size * 4
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + particle.opacity + ")"
        ctx.fill()
        ctx.shadowBlur = 0

        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const lineOpacity = (1 - distance / 120) * 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 255, 255, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()

            // Add glow to connection lines
            ctx.shadowColor = "rgba(0, 255, 255, 0.5)"
            ctx.shadowBlur = 2
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        })

        particle.opacity += Math.sin(Date.now() * 0.001 + index) * 0.01
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity))
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.8 }} />
}
