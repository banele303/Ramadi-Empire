import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const BLOG_POSTS = [
  {
    title: "The Future of Sustainable Construction",
    excerpt: "Explore the latest trends and technologies shaping eco-friendly building practices.",
    image: "/solar.jpg",
    date: "May 15, 2025",
  },
  {
    title: "Mastering the Art of Competitive Tendering",
    excerpt: "Learn key strategies to create winning bids and secure lucrative contracts.",
    image: "/tender.jpg",
    date: "April 28, 2025",
  },
  {
    title: "Innovation in Quantity Surveying: AI and Machine Learning",
    excerpt: "Discover how artificial intelligence is revolutionizing cost estimation and project planning.",
    image: "/ai.jpg",
    date: "April 10, 2025",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.title} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

