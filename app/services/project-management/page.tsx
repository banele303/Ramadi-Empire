import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectManagementPage() {
  return (
    <div className="container py-12 md:py-16 px-[1rem] mb-[-42rem]">
      <div className="flex flex-col gap-2 mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary flex items-center">
          <ChevronRight className="h-4 w-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">Project Management</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive project management solutions for successful project delivery
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/construction/plumbing7.jpg"
            alt="Project management team"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Expert Project Management</h2>
          <p className="text-muted-foreground mb-4">
            We provide holistic project management services, taking care of planning, coordination, execution, and
            closeout stages, ensuring that every project runs smoothly and efficiently.
          </p>
          <p className="text-muted-foreground mb-4">
            Our experienced project managers work closely with clients to understand their objectives, develop
            comprehensive plans, and deliver successful outcomes on time and within budget.
          </p>
          <div className="mt-4">
            <Button>Discuss Your Project</Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Project Management Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Planning & Initiation</h3>
            <p className="text-muted-foreground mb-4">
              We begin with thorough project planning, defining scope, objectives, timelines, and resource requirements.
              Our detailed planning process sets the foundation for successful project execution.
            </p>
            <ul className="space-y-2">
              {[
                "Scope definition",
                "Stakeholder analysis",
                "Risk assessment",
                "Resource planning",
                "Schedule development",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Execution & Control</h3>
            <p className="text-muted-foreground mb-4">
              During the execution phase, we implement the project plan, coordinate resources, and monitor progress. Our
              rigorous control processes ensure that the project stays on track.
            </p>
            <ul className="space-y-2">
              {[
                "Team coordination",
                "Progress monitoring",
                "Quality control",
                "Issue resolution",
                "Change management",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-3">Closeout & Evaluation</h3>
            <p className="text-muted-foreground mb-4">
              We ensure proper project closure with final deliverables, documentation, and client acceptance. Our
              evaluation process identifies lessons learned for continuous improvement.
            </p>
            <ul className="space-y-2">
              {[
                "Final deliverables",
                "Documentation",
                "Client acceptance",
                "Performance evaluation",
                "Lessons learned",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Benefits of Our Project Management Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Improved Efficiency</h3>
            <p className="text-muted-foreground text-sm">
              Our structured approach optimizes resource utilization and streamlines processes, improving overall
              project efficiency.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Risk Mitigation</h3>
            <p className="text-muted-foreground text-sm">
              We identify potential risks early and implement strategies to mitigate them, reducing the likelihood of
              project disruptions.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Cost Control</h3>
            <p className="text-muted-foreground text-sm">
              Our rigorous budget management and cost control processes help keep projects within financial constraints.
            </p>
          </div>
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-bold mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground text-sm">
              We implement quality control measures throughout the project lifecycle to ensure deliverables meet or
              exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Need Professional Project Management?</h2>
            <p className="text-muted-foreground mb-4">
              Our experienced team is ready to help you manage your projects successfully. Contact us today to discuss
              how we can support your project needs.
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
            href="/services/maintenance"
            className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3">Maintenance Services</h3>
            <p className="text-muted-foreground">
              General maintenance and plumbing services to keep your facilities in optimal condition.
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

