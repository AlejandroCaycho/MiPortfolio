"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Zap, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const roles = ["FULL STACK DEVELOPER", "SOFTWARE ARCHITECT", "UI/UX ENGINEER", "TECH INNOVATOR"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 relative">
                <Image
                  src="/placeholder-3aov3.png"
                  alt="Alex Rodriguez - Professional Developer"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20" />
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            ALEX RODRIGUEZ
          </h1>

          {/* Dynamic Role */}
          <div className="h-20 mb-8 flex items-center justify-center">
            <div className="font-mono text-2xl md:text-4xl font-bold text-cyan-400 tracking-wider">
              <span className="text-gray-500">&gt;</span> {roles[textIndex]}
              <span className="animate-pulse text-purple-400">_</span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              Especializado en crear{" "}
              <span className="text-cyan-400 font-semibold">experiencias digitales excepcionales</span> y
              <span className="text-purple-400 font-semibold"> arquitecturas escalables</span>
            </p>
            <p className="text-lg text-gray-400 font-mono">React • Next.js • TypeScript • Node.js • Python • AWS</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map((social, index) => (
              <Button
                key={social.label}
                variant="outline"
                size="lg"
                className="border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 bg-transparent"
              >
                <social.icon size={20} className="mr-2" />
                {social.label}
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-black border-0 shadow-lg shadow-cyan-500/30 transition-all duration-300"
              onClick={scrollToProjects}
            >
              <Zap className="mr-2" />
              VER PROYECTOS
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-6 text-lg font-bold border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 bg-transparent"
            >
              <Download className="mr-2" />
              DESCARGAR CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToProjects}
              className="rounded-full p-4 border-2 border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <ArrowDown size={24} className="text-cyan-400" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
