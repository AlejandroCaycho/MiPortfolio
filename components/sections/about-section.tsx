"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = {
  frontend: [
    { name: "React/Next.js", level: 95, category: "Framework" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Tailwind CSS", level: 88, category: "Styling" },
    { name: "Vue.js", level: 85, category: "Framework" },
    { name: "Angular", level: 80, category: "Framework" },
  ],
  backend: [
    { name: "Node.js", level: 92, category: "Runtime" },
    { name: "Python", level: 88, category: "Language" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "GraphQL", level: 80, category: "API" },
  ],
  tools: [
    { name: "Docker", level: 85, category: "DevOps" },
    { name: "AWS", level: 82, category: "Cloud" },
    { name: "Git", level: 95, category: "Version Control" },
    { name: "Figma", level: 78, category: "Design" },
    { name: "Kubernetes", level: 75, category: "DevOps" },
  ],
}

const experience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of enterprise-scale applications serving 100K+ users. Architected microservices infrastructure reducing response times by 40%.",
    achievements: [
      "Led team of 6 developers in agile environment",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "Austin, TX",
    description:
      "Built MVP from ground up, scaling from 0 to 50K users. Developed real-time features and payment integration systems.",
    achievements: [
      "Developed core product features used by 50K+ users",
      "Integrated Stripe payment system processing $2M+ annually",
      "Optimized database queries improving performance by 50%",
    ],
    technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Stripe"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2019 - 2020",
    location: "Remote",
    description:
      "Created responsive web applications for diverse clients. Specialized in performance optimization and accessibility compliance.",
    achievements: [
      "Delivered 20+ client projects with 98% satisfaction rate",
      "Improved site performance scores by average of 35%",
      "Implemented WCAG 2.1 AA compliance across all projects",
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
  },
]

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2017 - 2019",
    gpa: "3.8/4.0",
    focus: "Artificial Intelligence & Machine Learning",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "UC Berkeley",
    period: "2013 - 2017",
    gpa: "3.7/4.0",
    focus: "Full Stack Development",
  },
]

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2023-001",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-001",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-001",
  },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 5+ years of experience building scalable applications and leading
            development teams.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <Card className="lg:col-span-1 border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <img
                      src="/professional-developer-portrait.png"
                      alt="Profile"
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">Alex Rodriguez</CardTitle>
                  <p className="text-primary font-medium">Senior Full Stack Developer</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>alex@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="pt-4 space-y-3">
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* About Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Professional Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I'm a passionate full-stack developer with over 5 years of experience building scalable web
                      applications and leading development teams. My expertise spans modern JavaScript frameworks, cloud
                      architecture, and DevOps practices.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I thrive in collaborative environments where I can mentor junior developers while continuously
                      learning new technologies. My approach combines technical excellence with user-centered design
                      thinking to deliver solutions that truly make a difference.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not coding, you'll find me contributing to open-source projects, writing technical
                      articles, or exploring the latest developments in AI and machine learning.
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="text-center p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                  <Card className="text-center p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </Card>
                  <Card className="text-center p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </Card>
                  <Card className="text-center p-4 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="capitalize flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      {category} Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <div className="text-right text-sm text-muted-foreground">{skill.level}%</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((job, index) => (
              <Card key={job.id} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Focus: {edu.focus}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Certifications
                </h3>
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Issued: {cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          {cert.credentialId}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
