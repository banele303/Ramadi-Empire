import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="px-[2rem]">
      {/* Hero Section */}
      {/* <section id="home" className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Construction workers silhouetted against sunset"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-48 text-center text-white">
          <div className="relative mb-6 h-20 w-20">
            <div className="absolute inset-0 flex items-center justify-center font-bold text-primary text-4xl">
              <span className="relative">
                RE
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl">👑</span>
              </span>
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            RAMADI <span className="text-primary">Empire</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg md:text-xl text-gray-200">
            A proudly 100% black-owned construction and consultancy company dedicated to creating and implementing
            solutions that address the core needs of our people and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Our Services
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">ABOUT US</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ramadi Empire (Pty) Ltd is a proudly 100% black-owned construction and consultancy company with
                  registration number 2020/504715/07, founded by Ramadi Mukondeleli.
                </p>
                <p>
                  Our inception stems from our passion to create and implement solutions that address the core needs of
                  our people and communities we serve. Our dedication to bringing ease, convenience, and superior
                  quality to our clients is etched in every project we undertake.
                </p>
                <p>
                  Our diverse portfolio is the result of extensive experience across a variety of industries.
                  Specialising in Civil and Construction works, we provide a wide range of services that include Plant
                  Hire, Hygiene Services, Laundry Services, and Project Management.
                </p>
                <p>
                  Ramadi Empire is also a proud member of CIDB, with a grading of 1GB and PE 1CE. These memberships not
                  only underscore our credibility, but they also highlight our commitment to meeting industry standards
                  and delivering excellence in all our projects.
                </p>
              </div>
              <div className="mt-8">
                <Button className="group">
                  Learn More <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Construction site with excavator"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">SERVICES WE OFFER</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We provide comprehensive solutions across various domains, leveraging our rich experience and industry
              knowledge to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/civil-construction"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Civil & Construction Services</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive civil and construction services, from initial site analysis to final project completion,
                ensuring quality and professionalism.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/project-management"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Project Management</h3>
              <p className="text-muted-foreground mb-4">
                Holistic project management services, taking care of planning, coordination, execution, and closeout
                stages, ensuring that every project runs smoothly.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/maintenance"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">General Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Our general maintenance services ensure that your facilities and properties remain in the best
                condition, increasing their lifespan and functionality.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/plant-hire"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Plant Hire</h3>
              <p className="text-muted-foreground mb-4">
                Our plant hire services provide access to a range of well-maintained, high-performance machinery and
                equipment suited for various construction needs.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/supply"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">General Supply</h3>
              <p className="text-muted-foreground mb-4">
                As a comprehensive solutions provider, we meet a variety of general supply needs, ensuring the provision
                of high-quality products and reliable delivery.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/facility"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Facility Services</h3>
              <p className="text-muted-foreground mb-4">
                We provide professional hygiene and laundry services, understanding the importance of cleanliness in all
                settings and catering to both commercial and individual needs.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/services/mechanical-electrical"
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">Mechanical and Electrical</h3>
              <p className="text-muted-foreground mb-4">
                With a team of experienced engineers and technicians, we ensure that your projects receive the highest
                level of expertise and attention to detail.
              </p>
              <div className="flex items-center text-primary font-medium">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">WHY CHOOSE US?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Processes</h3>
                  <p className="text-muted-foreground">
                    At Ramadi Empire, transparency isn't an option - it's a principle we adhere to. From the moment of
                    inception to the final delivery, we keep our clients involved and informed at every stage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Collaboration</h3>
                  <p className="text-muted-foreground">
                    We understand the value of teamwork and cooperation. We ensure open, productive collaboration with
                    all stakeholders across the board, bringing together diverse perspectives to achieve common goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Highly Skilled Teams</h3>
                  <p className="text-muted-foreground">
                    Our team comprises highly skilled and experienced professionals committed to delivering nothing
                    short of excellence. They bring a wealth of knowledge, innovation, and dedication to every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Policy Alignment</h3>
                  <p className="text-muted-foreground">
                    We adhere strictly to relevant policies and guidelines including Corporate Governance, Risk
                    Management, Legal Compliance, and Occupational Health and Safety and Environmental Management.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Construction site with building and cranes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-center">VISION</h2>
              <p className="text-muted-foreground">
                Our vision is to set the standard of excellence in the industries we serve. We aim to become the
                benchmark against which quality, innovation, and sustainable practices are measured. We seek to inspire
                change and drive progress, paving the way for a better and bright future.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-center">MISSION</h2>
              <p className="text-muted-foreground">
                Our mission is to consistently deliver premium value through exceptional services and products,
                maintaining an ethical approach in our sourcing and supply chain. We strive to be the partner of choice
                across our service offerings, embedding quality, and innovation in each project we undertake. Our
                ambition is to create state-of-the-art projects that resonate deeply and leave lasting impressions,
                ensuring that every interaction with Ramadi Empire is an experience of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">CONTACT US</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      157 Van Riebeek Ave,
                      <br />
                      Edenvale, Johannesburg ,
                      <br />
                      1609
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">076 2232 914</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">ramadiempire@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="w-full sm:w-auto">Send Us A Message</Button>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Construction workers looking at blueprint"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

