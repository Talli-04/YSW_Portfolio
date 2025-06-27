"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Code, GraduationCap, MessageSquare, Cpu, ChevronUp } from "lucide-react"
import { smoothScrollTo } from "@/utils/smoothScroll"

// Scroll Progress Pie Component
const ScrollProgressPie = ({
  progress,
  icon: Icon,
  isActive,
  onClick,
}: {
  progress: number
  icon: React.ComponentType<any>
  isActive: boolean
  onClick: () => void
}) => {
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <motion.button
      onClick={onClick}
      className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
        isActive ? "bg-indigo-600 shadow-lg shadow-indigo-500/25" : "bg-slate-800/80 hover:bg-slate-700/80"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Circle */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="2" />
        {/* Progress Circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke={isActive ? "#ffffff" : "#6366f1"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300"
        />
      </svg>

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-300"}`} />
      </div>
    </motion.button>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({})

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Cpu },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

      // Calculate progress for each section
      const newProgress: Record<string, number> = {}
      let currentSection = activeSection

      navItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementHeight = rect.height
          const viewportHeight = window.innerHeight

          // Calculate how much of the section has been scrolled through
          const scrollProgress = Math.max(
            0,
            Math.min(100, ((window.scrollY + viewportHeight - elementTop) / elementHeight) * 100),
          )

          newProgress[item.id] = scrollProgress

          // Determine active section
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            currentSection = item.id
          }
        }
      })

      setSectionProgress(newProgress)
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection]) // Removed navItems from the dependency array

  const handleNavClick = (id: string) => {
    smoothScrollTo(id)
    setIsOpen(false)
    setActiveSection(id)
  }

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{
          y: 0,
          backgroundColor: scrollY > 50 ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.4)",
        }}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-white font-display"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              YSW_Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.li key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 rounded-full flex items-center gap-2 transition-colors ${
                      activeSection === item.id
                        ? "text-white bg-indigo-600"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Toggle */}
          <motion.button
            className="lg:hidden bg-slate-800/80 backdrop-blur-md p-3 rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Scroll Progress Pie Navigation */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <ScrollProgressPie
              progress={sectionProgress[item.id] || 0}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={() => handleNavClick(item.id)}
            />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md lg:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col items-center justify-center h-full gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-2xl font-medium flex items-center gap-3 ${
                      activeSection === item.id ? "text-indigo-400" : "text-slate-300"
                    }`}
                  >
                    <item.icon className="w-8 h-8" />
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => smoothScrollTo("hero")}
            className="fixed bottom-8 right-8 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg lg:hidden"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              boxShadow: [
                "0 4px 6px rgba(79, 70, 229, 0.2)",
                "0 4px 15px rgba(79, 70, 229, 0.4)",
                "0 4px 6px rgba(79, 70, 229, 0.2)",
              ],
            }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{
              duration: 0.3,
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
