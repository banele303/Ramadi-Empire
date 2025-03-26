import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SupplyPage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">General Supply</h1>
        <p className="text-muted-foreground text-lg">
          High-quality products and reliable delivery for your project needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/sss1.jpg"
            alt="Construction supplies"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Supply Solutions</h2>
          <p className="text-muted-foreground mb-4">
            As a comprehensive solutions provider, we meet a variety of general supply needs, ensuring the provision of
            high-quality products and reliable delivery. Our supply services are designed to support your projects with
            the materials and equipment you need, when you need them.
          </p>
          <p className="text-muted-foreground mb-4">
            We work with trusted suppliers and manufacturers to source the best products for your specific requirements,
            ensuring quality, reliability, and value for money.
          </p>
          <div className="mt-4">
            <Button>Explore Our Products</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Supply Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Construction Materials</h3>
            <p className="text-muted-foreground mb-4">
              High-quality construction materials for all types of building projects, from foundations to finishing
              touches.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Cement and concrete products</li>
              <li>Bricks, blocks, and masonry</li>
              <li>Timber and wood products</li>
              <li>Steel and metal products</li>
              <li>Insulation materials</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Building Hardware</h3>
            <p className="text-muted-foreground mb-4">
              Essential hardware items for construction and maintenance projects, ensuring durability and reliability.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Fasteners and fixings</li>
              <li>Door and window hardware</li>
              <li>Tools and accessories</li>
              <li>Security products</li>
              <li>Plumbing fixtures</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Electrical Supplies</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive range of electrical supplies for residential, commercial, and industrial applications.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Wiring and cables</li>
              <li>Switches and sockets</li>
              <li>Lighting fixtures</li>
              <li>Distribution boards</li>
              <li>Safety equipment</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Plumbing Supplies</h3>
            <p className="text-muted-foreground mb-4">
              Quality plumbing supplies for new installations, repairs, and maintenance projects.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Pipes and fittings</li>
              <li>Valves and controls</li>
              <li>Drainage systems</li>
              <li>Sanitary ware</li>
              <li>Water heating systems</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Safety Equipment</h3>
            <p className="text-muted-foreground mb-4">
              Essential safety equipment and personal protective gear for construction sites and industrial
              environments.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Personal protective equipment (PPE)</li>
              <li>Safety signage</li>
              <li>Fire safety equipment</li>
              <li>First aid supplies</li>
              <li>Fall protection systems</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Finishing Products</h3>
            <p className="text-muted-foreground mb-4">
              High-quality finishing products to complete your construction projects with a professional touch.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Paints and coatings</li>
              <li>Flooring materials</li>
              <li>Wall coverings</li>
              <li>Ceiling systems</li>
              <li>Decorative finishes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Supply Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-muted-foreground text-sm">
              We discuss your requirements and specifications to understand your needs
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Sourcing</h3>
            <p className="text-muted-foreground text-sm">
              We source high-quality products from trusted suppliers and manufacturers
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Quality Check</h3>
            <p className="text-muted-foreground text-sm">
              All products undergo rigorous quality checks before delivery
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Delivery</h3>
            <p className="text-muted-foreground text-sm">
              Reliable and timely delivery to your project site or facility
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Supplies for Your Project?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your supply needs. Our team will help you source the right products for your
              project and provide competitive pricing options.
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
            href="/services/plant-hire"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Plant Hire</h3>
            <p className="text-muted-foreground">
              Access to a range of well-maintained, high-performance machinery and equipment for your projects.
            </p>
          </Link>
          <Link
            href="/services/mechanical-electrical"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Mechanical & Electrical</h3>
            <p className="text-muted-foreground">
              Expert mechanical and electrical services for your construction projects.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

