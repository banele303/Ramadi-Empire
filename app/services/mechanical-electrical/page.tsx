import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MechanicalElectricalPage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Mechanical & Electrical Services</h1>
        <p className="text-muted-foreground text-lg">
          Expert mechanical and electrical solutions for your construction projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[400px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/construction/electrical2.jpg"
            alt="Mechanical and electrical services"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Specialized Technical Expertise</h2>
          <p className="text-muted-foreground mb-4">
            With a team of experienced engineers and technicians, we ensure that your projects receive the highest level
            of expertise and attention to detail in mechanical and electrical systems. Our services cover design,
            installation, maintenance, and repair of various mechanical and electrical systems.
          </p>
          <p className="text-muted-foreground mb-4">
            We stay updated with the latest technologies and industry standards to deliver efficient, reliable, and
            sustainable solutions that meet your specific project requirements.
          </p>
          <div className="mt-4">
            <Button>Discuss Your Project</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Mechanical & Electrical Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Mechanical Services</h3>
            <p className="text-muted-foreground mb-4">
              Our mechanical services cover a wide range of systems and equipment, ensuring optimal performance, energy
              efficiency, and reliability for your facilities.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>HVAC system design and installation</li>
              <li>Ventilation and air conditioning</li>
              <li>Plumbing and water systems</li>
              <li>Fire protection systems</li>
              <li>Refrigeration systems</li>
              <li>Mechanical equipment installation</li>
              <li>Preventive maintenance programs</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Electrical Services</h3>
            <p className="text-muted-foreground mb-4">
              Our electrical services ensure safe, efficient, and reliable electrical systems for your buildings and
              facilities, from design and installation to maintenance and upgrades.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Electrical system design and installation</li>
              <li>Power distribution systems</li>
              <li>Lighting design and installation</li>
              <li>Emergency power systems</li>
              <li>Building automation systems</li>
              <li>Energy management solutions</li>
              <li>Electrical testing and certification</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Design & Engineering</h3>
            <p className="text-muted-foreground">
              Our team of qualified engineers provides comprehensive design and engineering services for mechanical and
              electrical systems, ensuring optimal performance and compliance with regulations.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Installation</h3>
            <p className="text-muted-foreground">
              We offer professional installation services for various mechanical and electrical systems, with a focus on
              quality workmanship, safety, and adherence to project timelines.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Maintenance</h3>
            <p className="text-muted-foreground">
              Our preventive maintenance programs help extend the lifespan of your mechanical and electrical systems,
              reduce downtime, and optimize performance.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Repairs & Troubleshooting</h3>
            <p className="text-muted-foreground">
              We provide prompt and effective repair services and troubleshooting for mechanical and electrical systems,
              minimizing disruption to your operations.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Upgrades & Retrofits</h3>
            <p className="text-muted-foreground">
              We help modernize existing systems with upgrades and retrofits that improve efficiency, reduce energy
              consumption, and enhance functionality.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Energy Efficiency</h3>
            <p className="text-muted-foreground">
              Our energy-efficient solutions help reduce operational costs, minimize environmental impact, and improve
              the sustainability of your facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Project Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-muted-foreground text-sm">
              Initial meeting to understand your requirements and project scope
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-muted-foreground text-sm">
              Detailed system design and engineering based on your specifications
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Implementation</h3>
            <p className="text-muted-foreground text-sm">
              Professional installation and integration of mechanical and electrical systems
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Testing</h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive testing and commissioning to ensure optimal performance
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">5</span>
            </div>
            <h3 className="font-bold mb-2">Handover</h3>
            <p className="text-muted-foreground text-sm">System handover, documentation, and training for your team</p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Mechanical & Electrical Services?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your mechanical and electrical requirements. Our team of experts will provide
              tailored solutions to meet your specific project needs.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href="/services/civil-construction"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Civil & Construction</h3>
            <p className="text-muted-foreground">
              Comprehensive civil and construction services from initial site analysis to final project completion.
            </p>
          </Link>
          <Link
            href="/services/project-management"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Project Management</h3>
            <p className="text-muted-foreground">
              Holistic project management services, taking care of planning, coordination, execution, and closeout
              stages.
            </p>
          </Link>
          <Link
            href="/services/maintenance"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Maintenance Services</h3>
            <p className="text-muted-foreground">
              General maintenance and plumbing services to keep your facilities in optimal condition.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

