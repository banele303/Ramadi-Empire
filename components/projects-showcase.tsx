import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

const PROJECTS = [
  {
    title: "Metropolis Tower",
    description: "A state-of-the-art 50-story commercial skyscraper in the heart of the city.",
    image: "/constt.jpg",
  },
  {
    title: "Green Valley Residences",
    description: "Eco-friendly residential complex with 200 units and sustainable features.",
    image: "/constt1.jpg",
  },
  {
    title: "Harbor Bridge Expansion",
    description: "Major infrastructure project expanding the capacity of the city's iconic bridge.",
    image: "/bridge.jpg",
  },
]

export function ProjectsShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ScrollAnimation key={project.title} delay={index * 0.1}>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation delay={0.3}>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

