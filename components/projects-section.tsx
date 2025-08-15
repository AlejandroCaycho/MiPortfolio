"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter, Zap, Database, Code, Globe } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "CYBER COMMERCE HUB",
    description:
      "Plataforma de comercio electrónico futurista con IA integrada, pagos cripto y realidad aumentada para visualización de productos.",
    image: "/futuristic-ecommerce-dashboard.png",
    technologies: ["React", "Next.js", "Web3", "AI/ML", "AR"],
    category: "Full Stack",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "NEURAL TASK MATRIX",
    description:
      "Sistema de gestión de tareas con IA predictiva, colaboración holográfica y sincronización cuántica en tiempo real.",
    image: "/cyberpunk-admin-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "TensorFlow", "WebRTC"],
    category: "Full Stack",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "QUANTUM WEATHER GRID",
    description:
      "Dashboard meteorológico con predicciones cuánticas, visualización 3D y análisis climático con machine learning.",
    image: "/placeholder-14ui4.png",
    technologies: ["Vue.js", "Three.js", "D3.js", "Quantum API", "WebGL"],
    category: "Frontend",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "BLOCKCHAIN API NEXUS",
    description:
      "API REST descentralizada con autenticación blockchain, smart contracts y documentación interactiva holográfica.",
    image: "/placeholder-14ui4.png",
    technologies: ["Node.js", "Solidity", "IPFS", "GraphQL", "Web3"],
    category: "Backend",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "HOLOGRAPHIC PORTFOLIO",
    description:
      "Portfolio inmersivo con efectos holográficos, partículas cuánticas y experiencia de realidad virtual integrada.",
    image: "/futuristic-ar-holographic-app.png",
    technologies: ["Next.js", "Three.js", "WebXR", "GSAP", "Shaders"],
    category: "Frontend",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "QUANTUM CHAT PROTOCOL",
    description:
      "Sistema de comunicación cuántica con encriptación neural, salas dimensionales y transferencia de datos instantánea.",
    image: "/placeholder-14ui4.png",
    technologies: ["React", "WebRTC", "Quantum.js", "Neural Networks", "P2P"],
    category: "Full Stack",
    demoUrl: "#",
    repoUrl: "#",
    icon: <Database className="w-5 h-5" />,
  },
]

const categories = ["TODOS", "FULL STACK", "FRONTEND", "BACKEND"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("TODOS")
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  const filteredProjects =
    selectedCategory === "TODOS"
      ? projects
      : projects.filter((project) => project.category.toUpperCase() === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
            setVisibleProjects((prev) => [...prev, projectId])
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectElements = document.querySelectorAll("[data-project-id]")
    projectElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section id="projects" className="py-20 relative matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 text-cyan-400 mb-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400" />
              <Zap className="w-6 h-6" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400" />
            </div>
            <p className="text-sm font-mono text-cyan-400 tracking-widest">PORTFOLIO.EXE</p>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 neon-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PROYECTOS DIGITALES
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">&gt;</span> Colección de{" "}
            <span className="text-purple-400">experiencias interactivas</span> y{" "}
            <span className="text-pink-400">arquitecturas futuristas</span> que demuestran el poder de la{" "}
            <span className="text-green-400">tecnología emergente</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setSelectedCategory(category)}
              className={`btn-cyber rounded-none px-8 py-3 font-mono font-bold tracking-wider ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-black border-0"
                  : "bg-transparent"
              }`}
            >
              <Filter size={16} className="mr-2" />
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              data-project-id={project.id}
              className={`cyber-card group cursor-pointer transition-all duration-700 hover:scale-105 ${
                visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" className="btn-cyber rounded-none bg-transparent text-cyan-400 border-cyan-400">
                      <ExternalLink size={16} className="mr-2" />
                      DEMO
                    </Button>
                    <Button
                      size="sm"
                      className="btn-cyber rounded-none bg-transparent text-purple-400 border-purple-400"
                    >
                      <Github size={16} className="mr-2" />
                      CODE
                    </Button>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center cyber-glow">
                    {project.icon}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-data-stream" />

                <CardTitle className="font-heading font-bold text-xl mb-3 text-cyan-400 font-mono tracking-wide">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-gray-300 mb-4 leading-relaxed font-mono text-sm">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="absolute bottom-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block">
            <Button className="btn-cyber rounded-none px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-mono font-bold tracking-wider border-0 hover:from-purple-500 hover:to-pink-500">
              <Zap className="mr-2" />
              CARGAR MÁS PROYECTOS
            </Button>
            <p className="text-xs text-gray-500 mt-2 font-mono">&gt; ACCEDIENDO A BASE DE DATOS...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
