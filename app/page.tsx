import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import HomeServices from "@/components/services"
import Navbar from "./construction/navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <HomeServices/>
      
      {/* Projects section with link to dedicated page */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Projects</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Explore our portfolio of completed and ongoing projects that showcase our expertise and commitment to excellence.
          </p>
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
      <TeamSection />
      <TestimonialsSection />
      <ContactCTA />
      <Footer />
    </div>
  )
}

