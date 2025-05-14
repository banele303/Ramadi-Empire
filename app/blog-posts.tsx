import BlogList from "@/components/BlogList";
import { client } from '@/sanity/lib/client';

async function getPosts() {
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{name}
    }`, {}, { next: { revalidate: 3600 } }); // Cache for 1 hour
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPosts() {
  const posts = await getPosts();
  
  return (
    <div className="px-[2rem]">
      <h1 className="text-4xl font-bold py-6 text-center">Projects</h1>
      <BlogList posts={posts} />
    </div>
  );
}
