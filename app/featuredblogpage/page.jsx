"use client";

import { useEffect, useState } from "react";

export default function FeaturedBlogsPage() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        const sortedBlogs = data.blogs
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 2); // Get the 2 most recent blogs
        setFeaturedBlogs(sortedBlogs || []);
      } catch (error) {
        console.error("Failed to fetch featured blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  if (loading) return <p className="p-4">Loading featured blogs...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Featured Blogs</h1>
      {featuredBlogs.length === 0 ? (
        <p>No featured blogs available.</p>
      ) : (
        <div className="space-y-4">
          {featuredBlogs.map((blog) => (
            <div key={blog._id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-sm text-gray-400">By {blog.author}</p>
              <p className="mt-2">{blog.content}</p>
              <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Category: {blog.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
