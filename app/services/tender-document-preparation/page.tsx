import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TenderDocumentPreparationPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Tender Document Preparation</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ramadi Empire specializes in creating comprehensive and compelling tender documents that give you the best
            chance of winning contracts. Our expert team ensures your tender submissions are compliant, persuasive, and
            tailored to each specific opportunity.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Document Preparation Process</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Requirement Analysis:</strong> Thorough review of tender specifications and client needs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Strategy Development:</strong> Crafting a winning approach tailored to the specific tender.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Content Creation:</strong> Developing compelling narratives and technical responses.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Compliance Checks:</strong> Ensuring all tender requirements are met and properly addressed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Quality Assurance:</strong> Rigorous review and refinement of all document components.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Types of Documents We Prepare</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Technical Proposals:</strong> Detailed descriptions of your proposed solutions and
                    methodologies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Financial Proposals:</strong> Comprehensive cost breakdowns and pricing strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Company Profiles:</strong> Showcasing your capabilities, experience, and unique value
                    proposition.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Project Plans:</strong> Detailed timelines, resource allocations, and risk management
                    strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Compliance Documentation:</strong> Ensuring all regulatory and tender-specific requirements
                    are met.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Tender Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

