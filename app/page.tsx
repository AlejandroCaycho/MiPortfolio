import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/layout/navigation"
import { ParticlesBackground } from "@/components/effects/particles-background"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <ParticlesBackground />

      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
