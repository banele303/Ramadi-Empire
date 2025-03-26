import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PlantHirePage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Plant Hire</h1>
        <p className="text-muted-foreground text-lg">Access to high-quality construction equipment and machinery</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/construction/cc.jpeg"
            alt="Construction equipment"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Quality Equipment for Your Projects</h2>
          <p className="text-muted-foreground mb-4">
            Our plant hire services provide access to a range of well-maintained, high-performance machinery and
            equipment suited for various construction needs. Whether you need equipment for a day, a week, or longer, we
            have flexible options to meet your requirements.
          </p>
          <p className="text-muted-foreground mb-4">
            All our equipment is regularly serviced and maintained to ensure reliability and safety on your job site.
            Our team can also provide guidance on selecting the right equipment for your specific project needs.
          </p>
          <div className="mt-4">
            <Button>View Equipment</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Equipment Range</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/construction/construction2.jpg" alt="Excavators" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Excavators</h3>
              <p className="text-muted-foreground mb-4">
                Range of excavators from mini to large, suitable for various digging, trenching, and material handling
                tasks.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Mini excavators (1-6 tons)</li>
                <li>Medium excavators (7-15 tons)</li>
                <li>Large excavators (16+ tons)</li>
                <li>Various attachments available</li>
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/construction/loader1.jpg" alt="Loaders" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Loaders</h3>
              <p className="text-muted-foreground mb-4">
                Versatile loaders for material handling, loading, and site preparation tasks.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Skid steer loaders</li>
                <li>Wheel loaders</li>
                <li>Backhoe loaders</li>
                <li>Compact track loaders</li>
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/construction/compactor.jpg" alt="Compactors" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Compactors</h3>
              <p className="text-muted-foreground mb-4">
                Various compaction equipment for soil, asphalt, and concrete applications.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Plate compactors</li>
                <li>Rammers</li>
                <li>Roller compactors</li>
                <li>Vibratory compactors</li>
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image
                src="/new/rc3.jpeg"
                alt="Concrete Equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Concrete Equipment</h3>
              <p className="text-muted-foreground mb-4">
                Specialized equipment for concrete mixing, placing, and finishing.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Concrete mixers</li>
                <li>Concrete pumps</li>
                <li>Power trowels</li>
                <li>Concrete vibrators</li>
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/construction/generator.webp" alt="Generators" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Generators & Power</h3>
              <p className="text-muted-foreground mb-4">Reliable power solutions for construction sites and events.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Portable generators</li>
                <li>Industrial generators</li>
                <li>Lighting towers</li>
                <li>Power distribution equipment</li>
              </ul>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/construction/scafolding1.jpg" alt="Scaffolding" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Scaffolding & Access</h3>
              <p className="text-muted-foreground mb-4">Safe and reliable access solutions for working at height.</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>Scaffolding systems</li>
                <li>Mobile scaffold towers</li>
                <li>Ladders and steps</li>
                <li>Aerial work platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose Our Plant Hire Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Quality Equipment</h3>
            <p className="text-muted-foreground text-sm">
              Well-maintained, reliable machinery from trusted manufacturers
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Flexible Hire Periods</h3>
            <p className="text-muted-foreground text-sm">
              Daily, weekly, and monthly hire options to suit your project timeline
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Expert Advice</h3>
            <p className="text-muted-foreground text-sm">
              Guidance on selecting the right equipment for your specific project needs
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">Reliable Support</h3>
            <p className="text-muted-foreground text-sm">
              Technical support and maintenance assistance throughout the hire period
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Equipment for Your Project?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your equipment needs. Our team will help you select the right machinery for
              your project and provide competitive pricing options.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Request a Quote
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
            href="/services/supply"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">General Supply</h3>
            <p className="text-muted-foreground">
              Comprehensive solutions for various general supply needs, ensuring high-quality products and reliable
              delivery.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

