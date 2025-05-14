import Navbar from "../construction/navbar";
import { Footer } from "@/components/footer";
import { client } from '@/sanity/lib/client';
import BlogList from "@/components/BlogList";
import { BlogSkeleton } from "@/components/blog-skeleton";

async function getPosts() {
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{name}
    }`);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const posts = await getPosts();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Projects</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Explore our portfolio of completed and ongoing projects. Each project showcases our commitment to quality, 
          innovation, and excellence in construction and development.
        </p>
        
        {posts.length > 0 ? (
          <BlogList posts={posts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found. Please check back later.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
