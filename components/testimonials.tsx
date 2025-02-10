"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager",
    company: "BuildCo Ltd.",
    content:
      "Ramadi Empire's tendering services have been instrumental in our success. Their attention to detail and industry knowledge is unparalleled.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CFO",
    company: "ConstructAll Inc.",
    content:
      "The quantity surveying team at Ramadi Empire has saved us both time and money. Their accuracy and professionalism are top-notch.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    role: "Procurement Director",
    company: "MegaBuild Corp",
    content:
      "We've been consistently impressed with Ramadi Empire's supply chain management. They've streamlined our procurement process significantly.",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

