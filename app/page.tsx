import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PillarsSection } from "@/components/pillars-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection, Footer } from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
