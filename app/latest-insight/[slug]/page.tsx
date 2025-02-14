import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/sanity.image'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'



async function getblogPost(slug: string) {
  const blogpost = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author->{name}
  }`, { slug })
  return blogpost
}

export default async function Post({ params }: { params: { slug: string } }) {
  const blogpost = await getblogPost(params.slug)

  if (!blogpost) {
    notFound()
  }

  return (

    <div>
<article className="container mx-auto px-4 mt-4 py-8 max-w-3xl top-8">
 <h1 className="text-4xl font-bold pt-[4rem]  mb-4">{blogpost.title}</h1>
      <p className="text-gray-600 mb-4">
        By {blogpost.author?.name || 'Unknown Author'} | {new Date(blogpost.publishedAt).toLocaleDateString()}
      </p>
      {blogpost.mainImage && (
        <Image
          src={urlForImage(blogpost.mainImage).url()}
          alt={blogpost.title}
          width={800}
          height={500}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose lg:prose-xl">
        <PortableText value={blogpost.body} />
      </div>
      
    </article>

    <Footer/>
    </div>
    
  )
}
