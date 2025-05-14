"use client"

import { useState, useEffect } from "react"
import { BlogSkeleton } from "@/components/blog-skeleton"
import BlogList from "@/components/BlogList"
import { client } from '@/sanity/lib/client'

export default function BlogPostsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          author->{name}
        }`);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="px-[2rem]">
      <h1 className="text-4xl font-bold py-6 text-center">Projects</h1>
      {loading ? <BlogSkeleton /> : <BlogList posts={posts} />}
    </div>
  );
}
