import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { ContactCTA } from "@/components/contact-cta"
import BlogList from "@/components/BlogList"
import { client } from '@/sanity/lib/client'
import { Footer } from "@/components/footer"


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
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="px-[2rem]">
        <h1 className="text-4xl font-bold py-6 text-center">Projeccts</h1>
        <BlogList posts={posts} />
      </div>
      <TeamSection />
      <TestimonialsSection />
      <ContactCTA />
      <Footer />
    </div>
  )
}

