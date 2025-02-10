"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What sets Ramadi Empire apart from other construction service providers?",
    answer:
      "Ramadi Empire stands out due to our comprehensive range of services, industry expertise, and commitment to excellence. We offer end-to-end solutions from tendering to project completion, ensuring seamless coordination and high-quality results.",
  },
  {
    question: "How does your tendering process work?",
    answer:
      "Our tendering process involves a thorough analysis of project requirements, market research, and strategic pricing. We prepare detailed, compliant bids that highlight our strengths and value proposition, increasing your chances of winning contracts.",
  },
  {
    question: "Can you handle projects of any size?",
    answer:
      "Yes, we have the expertise and resources to manage projects of all sizes, from small residential constructions to large-scale commercial and industrial developments. Our team scales its approach to suit the specific needs of each project.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including residential and commercial construction, infrastructure development, industrial facilities, healthcare, education, and more. Our diverse experience allows us to adapt to the unique requirements of each sector.",
  },
  {
    question: "How do you ensure quality in your services?",
    answer:
      "Quality is at the core of everything we do. We maintain rigorous quality control processes, adhere to industry standards and best practices, and continuously train our staff to stay updated with the latest technologies and methodologies in the construction industry.",
  },
]

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible onValueChange={setOpenItem}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AnimatePresence>
                  {openItem === `item-${index}` && (
                    <AccordionContent forceMount>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  )}
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

