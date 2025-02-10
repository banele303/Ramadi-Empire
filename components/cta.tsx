import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let Ramadi Empire be your partner in success. Our team of experts is ready to bring your vision to life with
          precision, professionalism, and unparalleled expertise.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Get in Touch Today</Link>
        </Button>
      </div>
    </section>
  )
}

