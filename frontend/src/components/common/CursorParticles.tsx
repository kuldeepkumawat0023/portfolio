"use client"

import React, { useEffect, useRef } from "react"

export const CursorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particlesArray: Particle[] = []

    const mouse = {
      x: -100,
      y: -100,
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      // Create 4 particles per mouse move event
      for (let i = 0; i < 4; i++) {
        particlesArray.push(new Particle())
      }
    }

    window.addEventListener("mousemove", handleMouseMove as EventListener)
    window.addEventListener("resize", handleResize)
    handleResize()

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = mouse.x
        this.y = mouse.y
        this.size = Math.random() * 4 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        // Colorful palette similar to the provided screenshot
        const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316']
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.1) this.size -= 0.05
      }
      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
        if (particlesArray[i].size <= 0.1) {
          particlesArray.splice(i, 1)
          i--
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      handleParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as EventListener)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}
