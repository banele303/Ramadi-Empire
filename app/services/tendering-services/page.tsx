import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TenderingServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Tendering Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            At Ramadi Empire, our tendering services are designed to give you a competitive edge in the bidding process.
            We combine industry expertise with strategic insights to create compelling, winning bids.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Tendering Process</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Requirement Analysis:</strong> We thoroughly review and understand the tender requirements
                    and project scope.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Market Research:</strong> Our team conducts comprehensive market research to ensure
                    competitive pricing and innovative solutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Bid Preparation:</strong> We craft detailed, compliant bids that highlight your strengths
                    and value proposition.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Quality Assurance:</strong> Each bid undergoes rigorous quality checks to ensure accuracy
                    and completeness.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Submission and Follow-up:</strong> We manage the submission process and provide any
                    necessary clarifications or additional information.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Why Choose Our Tendering Services?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Industry Expertise:</strong> Our team has in-depth knowledge of various industries, ensuring
                    your bid is tailored to sector-specific requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Strategic Approach:</strong> We develop winning strategies that set your bid apart from the
                    competition.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Compliance Assurance:</strong> We ensure your bid meets all regulatory and tender-specific
                    requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Time and Cost Efficiency:</strong> Our streamlined process saves you time and resources in
                    the bidding process.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

