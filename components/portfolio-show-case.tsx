"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { client } from "@/lib/sanity"
import { useToast } from "@/components/ui/use-toast"
import { format } from "date-fns"

interface PortfolioItem {
    _id: string
    title: string
    description: string
    image: {
        asset: {
            url: string
        }
    }
    slug: {
        current: string
    }
    category: string
    completionDate: string
}

export function PortfolioShowcase() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
    const { toast } = useToast()

    useEffect(() => {
        const fetchPortfolioItems = async () => {
            const fetchedItems = await client.fetch<PortfolioItem[]>(`
        *[_type == "portfolioItem"] | order(completionDate desc) {
          _id,
          title,
          description,
          "image": image.asset->url,
          slug,
          category,
          completionDate
        }
      `)
            setPortfolioItems(fetchedItems)
        }

        fetchPortfolioItems()
    }, [])

    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <ScrollAnimation>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
                </ScrollAnimation>
                <div className="grid md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <ScrollAnimation key={item._id} delay={index * 0.1}>
                            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                                <div className="relative h-48">
                                    <Image
                                        src={item.image.asset.url || "/placeholder.svg"}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        {item.category} | Completed: {format(new Date(item.completionDate), "MMMM d, yyyy")}
                                    </p>
                                    <p className="text-muted-foreground mb-4">{item.description}</p>
                                    <Button variant="outline" asChild>
                                        <Link href={`/portfolio/${item.slug.current}`}>View Details</Link>
                                    </Button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

            </div>
        </section>
    )
}

