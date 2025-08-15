"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const cyberpunkTitles = [
    "DESARROLLADOR FULL STACK",
    "ARQUITECTO DE SOFTWARE",
    "INGENIERO CYBERPUNK",
    "CREADOR DIGITAL",
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % cyberpunkTitles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 matrix-bg scan-lines">
      <div className="particles-cyber">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle-cyber"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 10 + 8}s`,
            }}
          />
        ))}
      </div>

      <div className="scan-effect absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 flex justify-center">
            <div className="relative animate-float-3d">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary cyber-glow hologram relative">
                <Image
                  src="/placeholder-3aov3.png"
                  alt="Alex Rodriguez - Cyberpunk Developer"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 mix-blend-overlay" />
              </div>

              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center cyber-glow animate-float-3d">
                <Terminal className="text-black w-6 h-6" />
              </div>

              <div className="absolute inset-0 rounded-full">
                <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-t from-cyan-500 to-transparent animate-data-stream" />
                <div
                  className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-b from-purple-500 to-transparent animate-data-stream"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/3 left-0 w-16 h-px bg-gradient-to-l from-pink-500 to-transparent animate-data-stream"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 neon-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ALEX RODRIGUEZ
          </h1>

          <div className="h-16 mb-6 flex items-center justify-center">
            <p className="text-xl md:text-3xl font-mono font-bold text-cyan-400 neon-text uppercase tracking-wider">
              {cyberpunkTitles[textIndex]}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="relative mb-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-mono">
              <span className="text-cyan-400">&gt;</span> Especializado en crear{" "}
              <span className="text-purple-400 font-semibold">experiencias web futuristas</span> y{" "}
              <span className="text-pink-400 font-semibold">arquitecturas escalables</span> con{" "}
              <span className="text-cyan-400">React</span>, <span className="text-purple-400">Next.js</span> y{" "}
              <span className="text-pink-400">Node.js</span>
            </p>
            <p className="text-gray-400 mt-2 font-mono">
              <span className="text-cyan-400">&gt;</span> Apasionado por el{" "}
              <span className="text-green-400">código limpio</span> y las{" "}
              <span className="text-yellow-400">tecnologías emergentes</span>
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button className="btn-cyber rounded-none px-6 py-3 bg-transparent">
              <Github size={20} className="mr-2" />
              GITHUB
            </Button>
            <Button className="btn-cyber rounded-none px-6 py-3 bg-transparent">
              <Linkedin size={20} className="mr-2" />
              LINKEDIN
            </Button>
            <Button className="btn-cyber rounded-none px-6 py-3 bg-transparent">
              <Mail size={20} className="mr-2" />
              CONTACT
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="btn-cyber rounded-none px-12 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-500 border-0 text-black hover:from-purple-500 hover:to-pink-500"
              onClick={scrollToProjects}
            >
              <Zap className="mr-2" />
              INICIAR EXPLORACIÓN
            </Button>
            <Button className="btn-cyber rounded-none px-12 py-6 text-lg font-bold bg-transparent">
              <Terminal className="mr-2" />
              DESCARGAR DATOS
            </Button>
          </div>

          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToProjects}
              className="rounded-full p-4 border-2 border-cyan-500 cyber-glow hover:bg-cyan-500/20"
            >
              <ArrowDown size={28} className="text-cyan-400" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
