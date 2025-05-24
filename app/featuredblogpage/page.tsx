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
          .slice(0, 2);
        setFeaturedBlogs(sortedBlogs || []);
      } catch (error) {
        console.error("Failed to fetch featured blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f5f3f0] grid place-items-center text-gray-600 text-lg">
        Loading featured blogs...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f5f3f0] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Featured Blogs
        </h1>

        {featuredBlogs.length === 0 ? (
          <p className="text-center text-gray-500">
            No featured blogs available.
          </p>
        ) : (
          <div className="space-y-8">
            {featuredBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 transition hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-1">{blog.description}</p>
                <p className="text-sm text-gray-400 mb-3">By {blog.author}</p>
                <p className="text-gray-700 text-sm mb-3">{blog.content}</p>
                <span className="inline-block text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  Category: {blog.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
