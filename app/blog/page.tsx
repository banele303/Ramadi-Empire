import { client } from "@/lib/sanity"
import Image from "next/image"
import { format } from "date-fns"
import Link from "next/link"
import { Button } from "@/components/ui/button"

async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage {
        asset -> {
          url
        }
      },
      publishedAt,
      author-> {
        name
      },
      categories[]-> {
        title
      }
    }
  `)
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Blog</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <div key={post._id} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image
                  src={post.mainImage.asset.url || "/placeholder.svg"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">By {post.author.name}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category: { title: string }) => (
                    <span key={category.title} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {category.title}
                    </span>
                  ))}
                </div>
                <Button variant="outline" asChild>
                  <Link href={`/blog/${post.slug.current}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

