"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Terminal } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "projects", "about", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "home", label: "INICIO", icon: "01" },
    { href: "projects", label: "PROYECTOS", icon: "02" },
    { href: "about", label: "SOBRE MÍ", icon: "03" },
    { href: "contact", label: "CONTACTO", icon: "04" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Terminal className="text-black w-5 h-5" />
            </div>
            <div className="font-mono font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ALEX.DEV
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`group relative font-mono text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="text-xs text-cyan-500 mr-2">{item.icon}</span>
                {item.label}
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
            <div className="w-px h-6 bg-gray-600" />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left font-mono text-sm font-medium transition-colors duration-300 flex items-center ${
                    activeSection === item.href ? "text-cyan-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs text-cyan-500 mr-3 w-6">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
