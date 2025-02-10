import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Next Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let Ramadi Empire be your partner in success. Our team of experts is ready to bring your vision to life with
          precision, professionalism, and unparalleled expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

