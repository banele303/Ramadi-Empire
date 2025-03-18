import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const SERVICES = [
  {
    title: "Construction Services",
    slug:"construction",
    image: "/new/rc2.jpeg",
    items: ["Painting", "House Building", "ceiling installation", "Civil Construction", "aluminium windows", "Roof Installation and Repair",

      "And More",],
  },
  {
    title: "Tendering Services",
    image: "/tendering.jpg",
    slug:"construction",
    items: ["Bid preparation and submission", "Tender evaluation and analysis", "Contract negotiation and management", "Drafting tender proposals and documentation",
      "Compliance checks and documentation review",
      "Bill of quantities (BOQ) preparation",],
  },
  {
    title: "Quantity Surveying",
    image: "/ddtys2.jpg",
    slug:"construction",
    items: ["Cost estimation and budgeting", "Material takeoff and cost control", "Project financial planning"],
  },

  {
    title: "Supply of Goods and Services",
    image: "/sss.jpg",
    slug:"construction",
    items: [
      "Procurement of construction materials",
      "Supply of general goods for various industries",
      "Logistics and delivery management",
    ],
  },
]

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {SERVICES.map((service, i) => (


        <div className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
          <div className="aspect-video relative">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <ul className="space-y-2">
              {service.items.map((item, j) => (
                <li key={j} className="text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/${service.slug.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
            </Button>
          </div>
        </div>

      ))}
    </div>
  )
}

