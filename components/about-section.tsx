import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="relative aspect-square">
              <Image
                src="/tt1.jpg"
                alt="Ramadi Empire team working on a project"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold">Building Excellence, Delivering Results</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <h3 className="text-xl font-semibold">About Ramadi Empire</h3>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-muted-foreground">
                Ramadi Empire is more than a construction and procurement company; we are your strategic partner in
                achieving project success. Founded on the principles of excellence, integrity, and innovation, our name
                has become synonymous with reliability and precision in the industry.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-muted-foreground">
                With a comprehensive suite of services including tendering, quantity surveying, procurement, and
                contract management, we bring a holistic approach to every project we undertake. Our team of seasoned
                professionals combines years of experience with cutting-edge methodologies to deliver results that
                consistently exceed expectations.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-muted-foreground">
                At Ramadi Empire, we understand that each project is unique. That's why we tailor our services to meet
                the specific needs of our clients, ensuring cost-effectiveness without compromising on quality. Our
                commitment to sustainable practices and technological innovation sets us apart in the industry, allowing
                us to deliver forward-thinking solutions that stand the test of time.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-muted-foreground">
                From small-scale renovations to large-scale infrastructure projects, Ramadi Empire has the expertise and
                resources to handle projects of any size and complexity. Our track record of successful projects across
                various sectors stands as a testament to our capabilities and dedication.
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <Button size="lg" asChild>
                <Link href="/about">Learn More About Our Journey</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

