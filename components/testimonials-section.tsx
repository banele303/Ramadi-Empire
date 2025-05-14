import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    name: "Samuel Mokoena",
    role: "Project Director, Urban Development Corp",
    content:
      "Ramadi Empire's civil construction expertise transformed our commercial development project. Their team delivered exceptional quality work on time and within budget. Highly recommended for any construction project.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Thandi Nkosi",
    role: "Operations Manager, Johannesburg Properties",
    content:
      "We've partnered with Ramadi Empire for our maintenance services for over two years. Their reliability, professionalism and attention to detail have made them our go-to contractor for all our property needs.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "David Mabaso",
    role: "Site Manager, Infrastructure Solutions",
    content:
      "The plant hire services from Ramadi Empire exceeded our expectations. Their equipment was well-maintained, delivered promptly, and their operators were highly skilled. They were crucial to completing our project ahead of schedule.",
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

