import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function CivilConstructionPage() {
  return (
    <div className="container py-12 md:py-16 mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8 px-[1rem]">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180 pt-[6rem]" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold ">Civil & Construction Services</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive civil and construction solutions for your projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 px-[1rem]">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/construction/cc.jpeg"
            alt="Civil construction site"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground mb-4">
            At Ramadi Empire, we offer comprehensive civil and construction services, encompassing everything from
            initial site analysis to final project completion, ensuring quality and professionalism at every step of the
            way.
          </p>
          <p className="text-muted-foreground mb-4">
            Our team of experienced professionals is dedicated to delivering exceptional results on time and within
            budget. We take pride in our attention to detail and commitment to excellence in every project we undertake.
          </p>
          <div className="mt-4">
            <Button>Request a Quote</Button>
          </div>
        </div>
      </div>

      <div className="mb-12 px-[1rem]">
        <h2 className="text-2xl font-bold mb-6">Our Civil & Construction Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Civil Construction</h3>
            <p className="text-muted-foreground mb-4">
              Our civil construction services include site preparation, earthworks, foundations, concrete structures,
              road construction, drainage systems, and more. We handle projects of all sizes, from small residential
              developments to large commercial and industrial complexes.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Site preparation and earthworks</li>
              <li>Foundations and concrete structures</li>
              <li>Road construction and paving</li>
              <li>Drainage and water management systems</li>
              <li>Retaining walls and structural elements</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Civil Consulting Services</h3>
            <p className="text-muted-foreground mb-4">
              We provide expert consulting services across various domains, leveraging our rich experience and industry
              knowledge to offer insightful, actionable advice. Our consulting services help clients make informed
              decisions about their construction projects.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Feasibility studies and site assessments</li>
              <li>Project planning and design consultation</li>
              <li>Cost estimation and budgeting</li>
              <li>Regulatory compliance and permitting</li>
              <li>Quality assurance and control</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12 px-[3rem]">
        <h2 className="text-2xl font-bold mb-6">Our Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-muted-foreground text-sm">
              Initial meeting to understand your project requirements and objectives
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Planning</h3>
            <p className="text-muted-foreground text-sm">Detailed project planning, design, and cost estimation</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Execution</h3>
            <p className="text-muted-foreground text-sm">Professional implementation with regular progress updates</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Completion</h3>
            <p className="text-muted-foreground text-sm">Final inspection, handover, and ongoing support</p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-8 mb-12 mx-[1rem]">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-4">
              Contact us today to discuss your civil and construction needs. Our team is ready to help you bring your
              vision to life with our expertise and dedication to quality.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button size="lg" className="w-full md:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[2rem] pb-[2rem]">
        <h2 className="text-2xl font-bold mb-6 ">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            href="/services/mechanical-electrical"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Mechanical & Electrical</h3>
            <p className="text-muted-foreground">
              Expert mechanical and electrical services for your construction projects.
            </p>
          </Link>
          <Link
            href="/services/plant-hire"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Plant Hire</h3>
            <p className="text-muted-foreground">
              Access to a range of well-maintained, high-performance machinery and equipment.
            </p>
          </Link>
        </div>
      </div>
    
    </div>
  )
}

