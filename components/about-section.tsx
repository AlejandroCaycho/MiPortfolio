"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Award, Code } from "lucide-react"

const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js/Express", level: 85 },
  { name: "Python/Django", level: 80 },
  { name: "PostgreSQL/MongoDB", level: 85 },
  { name: "AWS/Docker", level: 75 },
]

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    description: "Liderando el desarrollo de aplicaciones web escalables y mentorando desarrolladores junior.",
    type: "work",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    description: "Desarrollo de MVP y crecimiento del producto desde 0 hasta 10k usuarios activos.",
    type: "work",
  },
  {
    year: "2021",
    title: "Certificación AWS Solutions Architect",
    company: "Amazon Web Services",
    description: "Certificación profesional en arquitectura de soluciones en la nube.",
    type: "education",
  },
  {
    year: "2020",
    title: "Ingeniería en Sistemas",
    company: "Universidad Tecnológica",
    description: "Graduado con honores, especialización en desarrollo de software.",
    type: "education",
  },
]

export function AboutSection() {
  const [skillsVisible, setSkillsVisible] = useState(false)
  const [timelineVisible, setTimelineVisible] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "skills-section" && entry.isIntersecting) {
            setSkillsVisible(true)
          }
          if (entry.target.getAttribute("data-timeline-index") && entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-timeline-index") || "0")
            setTimelineVisible((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills-section")
    const timelineItems = document.querySelectorAll("[data-timeline-index]")

    if (skillsSection) observer.observe(skillsSection)
    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soy un desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Con más de 4 años
            de experiencia, me especializo en el desarrollo de aplicaciones web modernas y escalables que resuelven
            problemas reales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-2xl flex items-center">
                <Code className="mr-3 text-primary" size={24} />
                Información Personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-3 text-primary" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar size={18} className="mr-3 text-primary" />
                <span>Disponible para proyectos</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Award size={18} className="mr-3 text-primary" />
                <span>4+ años de experiencia</span>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  Me encanta trabajar en equipo, aprender nuevas tecnologías y enfrentar desafíos complejos. Cuando no
                  estoy programando, disfruto de la fotografía, los videojuegos y contribuir a proyectos open source.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading font-bold text-2xl">Habilidades Técnicas</CardTitle>
            </CardHeader>
            <CardContent id="skills-section" className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skillsVisible ? skill.level : 0}
                    className="h-2"
                    style={{
                      transition: `all 1s ease-in-out ${index * 200}ms`,
                    }}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-center mb-12">Experiencia y Educación</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                data-timeline-index={index}
                className={`timeline-item transition-all duration-700 ${
                  timelineVisible.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <Card className="ml-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-heading font-bold text-xl">{item.title}</h4>
                      <span className="text-primary font-semibold">{item.year}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
