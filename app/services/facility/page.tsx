import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FacilityPage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Laundry and Facility Services</h1>
        <p className="text-muted-foreground text-lg">
          Professional hygiene and laundry services for commercial and residential properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/construction/laundry4.jpg" alt="Facility services" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Facility Solutions</h2>
          <p className="text-muted-foreground mb-4">
            We provide professional facility services including hygiene and laundry solutions for commercial and
            residential properties. Our services are designed to maintain clean, healthy, and comfortable environments
            for your employees, customers, and residents.
          </p>
          <p className="text-muted-foreground mb-4">
            With our team of trained professionals and use of high-quality products, we deliver reliable and efficient
            services that meet the highest standards of cleanliness and hygiene.
          </p>
          <div className="mt-4">
            <Button>Request a Service</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Facility Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Hygiene Services</h3>
            <p className="text-muted-foreground mb-4">
              We understand the importance of cleanliness and hygiene in all settings, providing thorough and
              professional hygiene services to meet diverse needs. Our hygiene services help maintain healthy
              environments and prevent the spread of germs and bacteria.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Commercial cleaning services</li>
              <li>Sanitization and disinfection</li>
              <li>Washroom hygiene solutions</li>
              <li>Waste management</li>
              <li>Pest control services</li>
              <li>Air purification systems</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Laundry Services</h3>
            <p className="text-muted-foreground mb-4">
              Our laundry services cater to both commercial and individual needs, promising cleanliness, freshness, and
              punctuality in our deliveries. We use high-quality detergents and modern equipment to ensure excellent
              results.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Commercial laundry services</li>
              <li>Linen and uniform cleaning</li>
              <li>Dry cleaning services</li>
              <li>Specialized fabric care</li>
              <li>Pickup and delivery options</li>
              <li>Bulk laundry processing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Hospitality</h3>
            <p className="text-muted-foreground">
              Hotels, resorts, guest houses, and other accommodation facilities requiring high standards of cleanliness
              and hygiene.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Healthcare</h3>
            <p className="text-muted-foreground">
              Hospitals, clinics, medical offices, and care facilities with specialized hygiene and laundry
              requirements.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Commercial Offices</h3>
            <p className="text-muted-foreground">
              Office buildings and corporate environments requiring regular cleaning and hygiene maintenance.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Educational Institutions</h3>
            <p className="text-muted-foreground">
              Schools, colleges, universities, and other educational facilities needing clean and healthy learning
              environments.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Retail</h3>
            <p className="text-muted-foreground">
              Shops, malls, and retail outlets requiring clean and inviting spaces for customers and staff.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Residential</h3>
            <p className="text-muted-foreground">
              Apartment complexes, residential communities, and individual homes seeking professional cleaning and
              laundry services.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Assessment</h3>
            <p className="text-muted-foreground text-sm">
              We evaluate your specific needs and requirements to develop a tailored service plan
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Planning</h3>
            <p className="text-muted-foreground text-sm">
              We create a detailed service schedule and methodology based on your requirements
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Execution</h3>
            <p className="text-muted-foreground text-sm">
              Our trained professionals deliver services according to the agreed plan and schedule
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center shadow-sm border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Quality Control</h3>
            <p className="text-muted-foreground text-sm">
              We conduct regular inspections and assessments to ensure service quality
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Facility Services?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your facility service needs. Our team will develop a customized solution to
              meet your specific requirements and provide a competitive quote.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href="/services/maintenance"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Maintenance Services</h3>
            <p className="text-muted-foreground">
              General maintenance and plumbing services to keep your facilities in optimal condition.
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
        </div>
      </div>
    </div>
  )
}

