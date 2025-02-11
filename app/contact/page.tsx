import { ContactForm } from "@/components/contact-form"
import { CompanyInfo } from "@/components/company-info"
import { ContactHeroSection } from "@/components/about-us-contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/50 pt-20">
      <ContactHeroSection/>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />
              <div className="space-y-8">
                <div className="relative aspect-video md:aspect-square">
                  <img
                    src="/contact.png"
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

