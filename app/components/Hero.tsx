"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { smoothScrollTo } from "@/utils/smoothScroll"

// Enhanced typing animation component
const TypingAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Improved code editor animation
const CodeEditorAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match the container
    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (container) {
        // Set a fixed aspect ratio to ensure content fits
        const width = Math.min(500, container.clientWidth)
        const height = Math.min(400, width * 0.8)

        canvas.width = width
        canvas.height = height

        // Update canvas style dimensions
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
    }

    // Initial size update
    updateCanvasSize()

    // Listen for resize events
    window.addEventListener("resize", updateCanvasSize)

    // Colors
    const colors = {
      background: "#0f172a", // Darker background
      text: "#e2e8f0",
      comment: "#94a3b8",
      keyword: "#8b5cf6",
      string: "#10b981",
      function: "#3b82f6",
      variable: "#f59e0b",
      cursor: "#f8fafc",
    }

    // Code lines - shortened to ensure they fit
    const codeLines = [
      { text: "// AI Engineer Portfolio", color: colors.comment },
      { text: "import React from 'react';", color: colors.keyword },
      { text: "import { motion } from 'framer-motion';", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "function Portfolio() {", color: colors.function },
      { text: "  const [projects, setProjects] = useState([]);", color: colors.variable },
      { text: "", color: colors.text },
      { text: "  useEffect(() => {", color: colors.function },
      { text: "    // Fetch projects data", color: colors.comment },
      { text: "    fetchProjects().then(data => {", color: colors.function },
      { text: "      setProjects(data);", color: colors.variable },
      { text: "    });", color: colors.text },
      { text: "  }, []);", color: colors.text },
      { text: "", color: colors.text },
      { text: "  return (", color: colors.keyword },
      { text: '    <div className="portfolio">', color: colors.text },
      { text: '      <Header title="Sai Pranay" />', color: colors.function },
      { text: "      <Hero />", color: colors.function },
      { text: "      <Projects data={projects} />", color: colors.function },
      { text: "      <Contact />", color: colors.function },
      { text: "    </div>", color: colors.text },
      { text: "  );", color: colors.text },
      { text: "}", color: colors.function },
      { text: "", color: colors.text },
      { text: "export default Portfolio;", color: colors.keyword },
    ]

    // Animation variables
    let currentLine = 0
    let currentChar = 0
    let cursorVisible = true
    let lastTime = 0
    let cursorBlinkTime = 0

    // Draw code editor
    const drawEditor = () => {
      if (!ctx) return

      // Get current dimensions
      const width = canvas.width
      const height = canvas.height

      // Scale factors based on canvas size
      const scaleFactor = width / 500 // Base scale on a 500px reference width
      const lineHeight = 16 * scaleFactor
      const startX = 40 * scaleFactor
      const startY = 30 * scaleFactor
      const tabSize = 20 * scaleFactor
      const fontSize = 12 * scaleFactor

      // Clear canvas
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, height)

      // Draw line numbers background
      ctx.fillStyle = "#0a0f1c" // Even darker background for line numbers
      ctx.fillRect(0, 0, startX - 10 * scaleFactor, height)

      // Draw code lines
      for (let i = 0; i < Math.min(currentLine + 1, codeLines.length); i++) {
        // Safety check to prevent accessing beyond array bounds
        if (i >= codeLines.length) continue

        // Draw line number
        ctx.fillStyle = "#64748b"
        ctx.font = `${fontSize}px monospace`
        ctx.textAlign = "right"
        ctx.fillText(`${i + 1}`, startX - 15 * scaleFactor, startY + i * lineHeight)

        // Draw code text
        if (i < currentLine && i < codeLines.length) {
          // Completed lines
          ctx.fillStyle = codeLines[i].color
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("  ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 2
          }

          ctx.fillText(codeLines[i].text, startX + indentLevel * tabSize, startY + i * lineHeight)
        } else if (i === currentLine && i < codeLines.length) {
          // Current line (typing)
          const currentText = codeLines[i].text.substring(0, currentChar)
          ctx.fillStyle = codeLines[i].color
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("  ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 2
          }

          ctx.fillText(currentText, startX + indentLevel * tabSize, startY + i * lineHeight)

          // Draw cursor
          if (cursorVisible) {
            const cursorX = startX + indentLevel * tabSize + ctx.measureText(currentText).width
            ctx.fillStyle = colors.cursor
            ctx.fillRect(cursorX, startY + i * lineHeight - lineHeight + 3 * scaleFactor, 2 * scaleFactor, lineHeight)
          }
        }
      }
    }

    // Animation loop using requestAnimationFrame instead of setInterval
    const animate = (time: number) => {
      if (!isAnimating) return

      // Calculate delta time
      const deltaTime = time - lastTime
      lastTime = time

      // Handle cursor blinking
      cursorBlinkTime += deltaTime
      if (cursorBlinkTime > 500) {
        cursorVisible = !cursorVisible
        cursorBlinkTime = 0
      }

      // Handle typing (every 50ms)
      if (deltaTime > 10) {
        if (currentLine < codeLines.length) {
          if (currentChar < codeLines[currentLine].text.length) {
            currentChar++
          } else {
            currentLine++
            currentChar = 0
          }
        } else {
          // Reset animation
          currentLine = 0
          currentChar = 0
        }
      }

      drawEditor()
      requestAnimationFrame(animate)
    }

    // Start animation
    drawEditor()
    requestAnimationFrame(animate)

    // Cleanup
    return () => {
      setIsAnimating(false)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [isAnimating])

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 rounded-t-lg flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400 mx-auto">portfolio.tsx</div>
      </div>
      <canvas
        ref={canvasRef}
        className="rounded-lg shadow-2xl border border-slate-700 w-full"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-950 z-0"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 korean-heading leading-tight">
            <span className="text-white block">
              <TypingAnimation text="B2C/B2B 웹 서비스 기획 및 개발" />
            </span>
            <span className="text-indigo-300 block mt-2">
              <TypingAnimation text="커뮤니케이션 경험 보유 PM" delay={2} />
            </span>
          </h1>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-indigo-300 border border-indigo-500/20">
              Product Manager
            </span>
            <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-blue-300 border border-blue-500/20">
              Project Manager
            </span>
            <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-violet-300 border border-violet-500/20">
              Service Designer
            </span>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 korean-text leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            IT 제품의 기획부터 출시까지 전 과정을 관리하는
            <br />
            <span className="text-indigo-300 font-medium">Product Manager</span>입니다.
          </motion.p>

          {/* Replace the button section with enhanced design */}
          <motion.div
            className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1dXmj_iZQ1BxLyIXB1WsKJcao_uJx7igs/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 flex-1 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold korean-text text-sm whitespace-nowrap">이력서 다운로드</span>
              </a>

              <a
                href="https://marked-angora-5d6.notion.site/B2C-B2B-PM-1f981b39908480ec91d7d9ea52959327?pvs=74"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-slate-500/25 transform hover:-translate-y-1 border border-slate-600/50 flex-1 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 64 64" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="m5.2,47.56s8,10.37,8.48,10.83c1.16,1.11,2.73,1.69,4.33,1.6,8.37-.42,27.54-1.38,35.57-1.78,3.11-.16,5.55-2.72,5.56-5.83l.1-35.5c0-1.99-1.03-3.83-2.72-4.87t0,0c-2.99-1.84-8.91-5.49-10.7-6.68-1.46-.97-3.2-1.43-4.96-1.32-5.96.38-23.45,1.51-30.85,1.98-2.96.19-5.24,2.62-5.24,5.54v34.78c0,.45.15.89.43,1.24h0Zm50.01-28.91v.02l-.1,33.7c0,.97-.77,1.77-1.74,1.82l-35.57,1.78c-.5.03-.99-.16-1.35-.5-.36-.34-.57-.82-.57-1.32V20.71c0-.97.75-1.77,1.72-1.82l35.67-2.06c.5-.03.99.15,1.36.5.36.34.57.82.57,1.32h0Zm-11.98,21.42v-13.72c-.63-.72-1.63-.67-3.07-1.11-.1-.03-.19-.11-.23-.21-.04-.1-.03-.22.03-.31,1.72-2.53,6.63-.95,9.83-1.96.09-.03.2-.02.28.05.08.07.11.17.09.27-.31,1.39-1.4,2.1-2.95,2.4v22.57c0,.75-.45,1.44-1.15,1.72-.64.26-1.31.54-1.31.54-1.54.8-3.43.29-4.37-1.17l-11.46-17.87v16.27c.62.72,1.63.67,3.07,1.11.1.03.19.11.23.21.04.1.03.22-.03.31-1.73,2.53-6.63.95-9.83,1.96-.09.04-.2.02-.28-.05-.08-.06-.11-.17-.09-.27.31-1.39,1.4-2.1,2.95-2.4v-21.31l-3.02-.29s.21-2.45,3.09-2.73c1.42-.14,5.13-.3,6.47-.36.3-.01.59.13.77.38l10.99,15.95h0ZM15.03,14.28c.55.42,1.24.63,1.93.59,5.09-.29,26.82-1.53,32.21-1.84.17-.01.31-.13.35-.29.04-.16-.03-.33-.17-.42-2.39-1.49-4.74-2.95-5.76-3.63-.73-.48-1.6-.71-2.48-.66,0,0-24.7,1.36-29.78,1.91-.64.07-.78.3-.8.39-.09.31.02.54.27.74,1.02.78,3.07,2.33,4.23,3.21h0Z"
                  />
                </svg>
                <span className="font-semibold korean-text text-sm whitespace-nowrap">노션 포트폴리오</span>
              </a>
            </div>

            <button
              onClick={() => smoothScrollTo("about")}
              className="group relative px-6 py-3 bg-transparent border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold korean-text text-sm">더보기</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="text-lg"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        {/* Code Editor Animation */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CodeEditorAnimation />
        </motion.div>
      </div>
    </section>
  )
}
