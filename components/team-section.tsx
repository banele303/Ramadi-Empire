import { FallbackImage } from "@/components/ui/fallback-image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const TEAM_MEMBERS = [
  {
    name: "Mukondi Ramadi",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in construction and procurement, Mukondi leads Ramadi Empire with vision and expertise.",
    image: "/owner.jpg",
  },
  {
    name: "Sarah Ndou",
    role: "Head of Tendering Services",
    bio: "Sarah's strategic approach to tendering has helped countless clients secure major contracts across various industries.",
    image: "/ddtys2.jpg",
  },
  {
    name: "David Lee",
    role: "Chief Quantity Surveyor",
    bio: "David's meticulous attention to detail ensures accurate cost estimations and financial planning for all projects.",
    image: "/team5.jpg",
  },
  {
    name: "Emily Chen",
    role: "Supply Chain Manager",
    bio: "Emily's innovative approach to supply chain management has revolutionized our procurement processes.",
    image: "/tem.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Expert Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-0">
                <div className="relative h-64">
                  <FallbackImage
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="rounded-t-lg"
                    fallbackColor="#f3f4f6"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm mb-4">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/about#team">Meet the Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

