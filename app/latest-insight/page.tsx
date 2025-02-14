
import { Footer } from '@/components/footer'
import LatestInsight from '@/components/InsightSection'
import { client } from '@/sanity/lib/client'

async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author->{name}
  }`)
  return posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="container mx-auto  mt-[6rem] px-4 py-8  md:h-[50vh]">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Insight</h1>
      <LatestInsight posts={posts} />

      <div className='pt-[13rem] md:pt-2'>
        <Footer />
      </div>
    </main>
  )
}
