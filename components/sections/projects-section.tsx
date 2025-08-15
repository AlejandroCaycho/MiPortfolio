"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with advanced analytics and real-time inventory management",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics",
    image: "/placeholder-pwpov.png",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    category: "ai",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions",
    image: "/mobile-banking-app.png",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid API"],
    category: "mobile",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency and security in electoral processes",
    image: "/blockchain-voting-interface.png",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "blockchain",
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
  },
  {
    id: 5,
    title: "IoT Smart Home Hub",
    description: "Centralized control system for smart home devices with voice commands and automation",
    image: "/smart-home-control.png",
    technologies: ["Vue.js", "Node.js", "MQTT", "Arduino", "AWS IoT"],
    category: "iot",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "Cloud Infrastructure Manager",
    description: "Multi-cloud management platform for deploying and monitoring distributed applications",
    image: "/cloud-infrastructure-dashboard.png",
    technologies: ["Angular", "Go", "Docker", "Kubernetes", "Terraform"],
    category: "devops",
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
  },
]

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "fullstack", label: "Full Stack", icon: Code },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ai", label: "AI/ML", icon: Database },
  { id: "blockchain", label: "Blockchain", icon: ExternalLink },
  { id: "iot", label: "IoT", icon: Database },
  { id: "devops", label: "DevOps", icon: Code },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Projects & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions built with cutting-edge technologies. Each project represents a unique challenge solved
            with precision and creativity.
          </p>
        </div>

        {/* Featured Projects Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1 h-8">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 h-8">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-semibold">Interested in Working Together?</h3>
            <p className="text-muted-foreground max-w-md">
              Let's discuss how we can bring your next project to life with innovative solutions.
            </p>
            <Button size="lg" className="mt-2">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
