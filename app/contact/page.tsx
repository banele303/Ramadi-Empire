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
                    <p className="text-muted-foreground">ramadiempire@gmail.com</p>
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
                    <p className="text-muted-foreground">info@Ramadi Empire-construction.com</p>
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

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Form</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Nkosana"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Sibanda"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john.nkosana@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+27 83 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project-type" className="text-sm font-medium">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled selected>
                      Select Project Type
                    </option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="industrial">Industrial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Please provide details about your project, including location, timeline, and specific requirements."
                  ></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to Ramadi Empire Construction collecting and storing my data from this form to respond to
                    my inquiry.
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

