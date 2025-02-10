import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <ServicesHero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Expertise at Your Service</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              At Ramadi Empire, we offer a comprehensive range of services tailored to meet the diverse needs of the
              construction and procurement industry. Our expertise ensures that your projects are handled with precision
              and professionalism.
            </p>
            <ServicesGrid />
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}

