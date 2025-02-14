import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    name: "John Doe",
    role: "Project Manager, BuildCo Ltd.",
    content:
      "Ramadi Empire's expertise in tendering services has been instrumental in our success. Their attention to detail and industry knowledge is unparalleled.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jane Smith",
    role: "CFO, ConstructAll Inc.",
    content:
      "The quantity surveying team at Ramadi Empire has saved us both time and money. Their accuracy and professionalism are top-notch.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mike Johnson",
    role: "Procurement Director, MegaBuild Corp",
    content:
      "We've been consistently impressed with Ramadi Empire's supply chain management. They've streamlined our procurement process significantly.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

