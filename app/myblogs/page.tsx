"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function MyBlogsPage() {
  const { data: session, status } = useSession();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const author = session?.user?.name || session?.user?.email;
      if (!author) return;

      try {
        const res = await fetch(
          `/api/blog?author=${encodeURIComponent(author)}`
        );
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchBlogs();
    }
  }, [session, status]);

  if (status === "loading" || loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <p className="text-gray-600 text-lg">Loading blogs...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">
          My Blogs
        </h1>
        <p className="text-sm text-gray-700 mb-8">
          Logged in as:{" "}
          <span className="font-semibold">
            {session?.user?.name || session?.user?.email}
          </span>
        </p>

        {blogs.length === 0 ? (
          <p className="text-gray-500 italic">No blogs found.</p>
        ) : (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-2">{blog.description}</p>
                <p className="text-sm text-gray-500 mb-4">By {blog.author}</p>
                <p className="text-gray-800">{blog.content}</p>
                <div className="mt-4">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full shadow-sm">
                    Category: {blog.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
