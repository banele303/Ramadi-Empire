import { client } from "@/lib/sanity"
import Image from "next/image"
import { format } from "date-fns"
import { PortableText } from "@portabletext/react"

async function getBlogPost(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage {
        asset -> {
          url
        }
      },
      publishedAt,
      author-> {
        name,
        image {
          asset -> {
            url
          }
        },
        bio
      },
      categories[]-> {
        title
      },
      body
    }
  `,
    { slug },
  )
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        <div className="mb-8">
          <Image
            src={post.mainImage.asset.url || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex items-center mb-6">
          <Image
            src={post.author.image.asset.url || "/placeholder.svg"}
            alt={post.author.name}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-muted-foreground">{format(new Date(post.publishedAt), "MMMM d, yyyy")}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.categories.map((category: { title: string }) => (
            <span key={category.title} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
              {category.title}
            </span>
          ))}
        </div>
        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  )
}

