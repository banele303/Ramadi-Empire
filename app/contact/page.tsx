import Link from 'next/link';
import { ContactHeroSection } from "@/components/about-us-contact"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Navbar from '../construction/navbar';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/50 ">
      <Navbar />
      <ContactHeroSection />
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30 mx-auto flex justify-center w-full items-center px-[1rem]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let&apos;s Discuss Your Project</h2>
              <p className="text-muted-foreground mb-6">
                Whether you&apos;re ready to start building or just exploring options, our team is here to help. Contact us
                today to schedule a consultation and take the first step toward bringing your construction project to
                life.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">info@ramadiempire.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+27 76 223 2914</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@ramadiempire.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a free consultation with one of our construction experts. We&apos;ll discuss your vision,
                  requirements, and how Ramadi Empire Construction can bring your project to life.
                </p>
                <Link href="tel:+27 76 223 2914">
                  <Button size="lg">Call Now</Button>
                </Link>

              </div>
            </div>

            <div className="bg-background rounded-lg shadow-sm">
              {/* Use the improved contact form component */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

