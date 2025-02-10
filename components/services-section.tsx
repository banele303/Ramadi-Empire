import { ServicesGrid } from "@/components/services-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-start">
              Discover how Ramadi Empire can elevate your construction and procurement projects with our expert services
              tailored to meet your specific needs.
            </p>
          </div>
        </ScrollAnimation>
       
          <ServicesGrid />
       
        <ScrollAnimation>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

