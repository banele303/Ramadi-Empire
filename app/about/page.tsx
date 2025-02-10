import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold pt-5">Who we are</h1>
              <h2 className="text-2xl md:text-3xl">About Us  Ramadi Empire</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Ramadi Empire is a leading construction company specializing in{" "}
                  <span className="font-semibold">
                    tendering, quantity surveying, tender document preparation, and the supply of goods and services
                  </span>
                  . With a strong commitment to excellence, we provide comprehensive solutions to meet the needs of
                  clients in the construction and procurement sectors.
                </p>

                <p className="text-lg leading-relaxed">
                  Our expertise spans across project cost estimation, bid preparation, contract management, and material
                  supply, ensuring efficiency and quality in every project we undertake. We take pride in delivering
                  professional services tailored to meet industry standards and client expectations.
                </p>

                <p className="text-lg leading-relaxed">
                  At Ramadi Empire, we value{" "}
                  <span className="font-semibold">integrity, innovation, and reliability</span>, striving to be a
                  trusted partner in the construction industry. Whether you&apos;re looking for tendering support, cost
                  consultancy, or material supply, we are here to provide the best solutions to drive your project to
                  success.
                </p>

                <p className="text-lg leading-relaxed font-semibold">
                  Let us help you build the future—efficiently and affordably.
                </p>

                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] md:aspect-square">
                <Image
                  src="/sss1.jpg"
                  alt="Geometric shapes representing our professional approach"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

