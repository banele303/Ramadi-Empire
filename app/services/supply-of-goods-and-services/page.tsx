import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SupplyOfGoodsAndServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Supply of Goods and Services</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ramadi Empire offers comprehensive supply chain solutions, ensuring timely and cost-effective delivery of
            goods and services for your construction and procurement needs. Our extensive network and industry expertise
            allow us to source high-quality materials and services at competitive prices.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Supply Chain Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Procurement Management:</strong> Efficient sourcing and purchasing of materials and
                    services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Vendor Management:</strong> Building and maintaining relationships with reliable suppliers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Logistics and Distribution:</strong> Coordinating transportation and delivery of goods to
                    project sites.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Quality Control:</strong> Ensuring all supplied goods meet required standards and
                    specifications.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Inventory Management:</strong> Optimizing stock levels to balance costs and project needs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Benefits of Our Supply Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Cost Savings:</strong> Leveraging our network to secure competitive prices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Time Efficiency:</strong> Streamlined processes to ensure timely delivery of goods and
                    services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Quality Assurance:</strong> Rigorous quality control measures for all supplied items.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Risk Mitigation:</strong> Diversified supplier base to reduce supply chain disruptions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    <strong>Scalability:</strong> Ability to handle projects of various sizes and complexities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Inquire About Our Supply Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

