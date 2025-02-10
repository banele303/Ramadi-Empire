import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { BlogPreview } from "@/components/blog-preview"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsShowcase />
      <TestimonialsSection />
      <TeamSection />
      <BlogPreview />
      <ContactCTA />
    </div>
  )
}

