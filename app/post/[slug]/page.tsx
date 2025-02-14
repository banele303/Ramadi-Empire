import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/sanity.image'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'



async function getPost(slug: string) {
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    author->{name}
  }`, { slug })
  return post
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (

    <div>
<article className="container mx-auto px-4 mt-4 py-8 max-w-3xl top-8">
 <h1 className="text-4xl font-bold pt-[4rem]  mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        By {post.author?.name || 'Unknown Author'} | {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage && (
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          width={800}
          height={500}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose lg:prose-xl">
        <PortableText value={post.body} />
      </div>
      
    </article>

    <Footer/>
    </div>
    
  )
}
