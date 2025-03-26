import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Wrench, Droplet } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MaintenancePage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Maintenance Services</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive maintenance solutions to keep your facilities in optimal condition
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/construction/plumbing3.jpg"
            alt="Maintenance services"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Professional Maintenance Solutions</h2>
          <p className="text-muted-foreground mb-4">
            Our general maintenance services ensure that your facilities and properties remain in the best condition,
            increasing their lifespan and functionality. We provide comprehensive maintenance solutions for commercial,
            industrial, and residential properties.
          </p>
          <p className="text-muted-foreground mb-4">
            With our team of skilled professionals, we deliver reliable and efficient maintenance services that help
            prevent costly repairs and downtime, ensuring your operations run smoothly.
          </p>
          <div className="mt-4">
            <Button>Schedule Maintenance</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Maintenance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">General Maintenance</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Our general maintenance services cover a wide range of needs to keep your facilities in optimal condition.
              We handle everything from routine inspections to repairs and preventive maintenance.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Building maintenance and repairs</li>
              <li>Electrical system maintenance</li>
              <li>HVAC system servicing</li>
              <li>Painting and surface repairs</li>
              <li>Carpentry and structural repairs</li>
              <li>Preventive maintenance programs</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Droplet className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Plumbing Services</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We offer professional plumbing services, tackling everything from routine maintenance to emergency
              repairs, with a dedicated team of experienced plumbers who ensure reliable and efficient solutions.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Pipe installation and repairs</li>
              <li>Drain cleaning and maintenance</li>
              <li>Fixture installation and repairs</li>
              <li>Water heater services</li>
              <li>Leak detection and repairs</li>
              <li>Emergency plumbing services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Maintenance Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted/50 rounded-lg p-6 border border-muted">
            <h3 className="text-xl font-bold mb-3 text-center">Basic</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">Essential Coverage</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Quarterly inspections</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Basic repairs</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Standard response time</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
          <div className="bg-card rounded-lg p-6 border border-primary shadow-md relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Standard</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">Comprehensive Care</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Monthly inspections</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Comprehensive repairs</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Priority response</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>24/7 phone support</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Preventive maintenance</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 border border-muted">
            <h3 className="text-xl font-bold mb-3 text-center">Premium</h3>
            <div className="text-center mb-4">
              <span className="text-3xl font-bold">Complete Solution</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Weekly inspections</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>All-inclusive repairs</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Emergency response</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
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
                  className="h-5 w-5 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Comprehensive facility audit</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Maintenance Services?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your maintenance needs. Our team of professionals is ready to help keep your
              facilities in optimal condition.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Contact Us
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
            href="/services/mechanical-electrical"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Mechanical & Electrical</h3>
            <p className="text-muted-foreground">
              Expert mechanical and electrical services for your construction projects.
            </p>
          </Link>
          <Link
            href="/services/facility"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Facility Services</h3>
            <p className="text-muted-foreground">
              Professional hygiene and laundry services for commercial and residential properties.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

