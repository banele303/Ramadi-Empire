import { ContactForm } from "@/components/contact-form"
import { CompanyInfo } from "@/components/company-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/50 pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />
              <div className="space-y-8">
                <div className="relative aspect-video md:aspect-square">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%2011.16.44-SeNEOYgbkiipEl9kqZSrVFkQkDrZ0e.png"
                    alt="Professional workspace"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <CompanyInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

