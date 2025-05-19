"use client";

import { useEffect, useState } from "react";

export default function MyBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="p-4">Loading blogs...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-sm text-gray-400">By {blog.author}</p>
              <p className="mt-2">{blog.content}</p>
              <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Category: {blog.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
