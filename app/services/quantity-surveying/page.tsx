import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QuantitySurveyingPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Quantity Surveying</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ramadi Empire's quantity surveying services provide accurate cost estimation and financial management for
            your construction projects. Our expert team ensures optimal resource allocation and cost control throughout
            the project lifecycle.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Quantity Surveying Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Cost Estimation:</strong> Detailed and accurate project cost forecasts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Bill of Quantities Preparation:</strong> Comprehensive breakdown of materials and labor
                    requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Cost Planning and Control:</strong> Ongoing monitoring and management of project costs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Contract Administration:</strong> Management of contractual aspects and payment
                    certifications.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Value Engineering:</strong> Identifying cost-saving opportunities without compromising
                    quality.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Benefits of Our Quantity Surveying</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Cost Optimization:</strong> Maximize project value and minimize unnecessary expenses.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Risk Mitigation:</strong> Early identification and management of potential cost overruns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Improved Decision Making:</strong> Provide accurate financial data for informed project
                    decisions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Contractual Compliance:</strong> Ensure adherence to financial terms and conditions.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

