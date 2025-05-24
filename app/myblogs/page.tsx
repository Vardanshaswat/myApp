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
    return <p className="p-4">Loading blogs...</p>;

  return (
    <div className="p-6 bg-[url('/new1.jpg')] bg-cover bg-center  backdrop-blur-sm min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 drop-shadow-sm">
        My Blogs
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Logged in as:{" "}
        <span className="font-medium">
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
              className="bg-white/90 border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-indigo-800 mb-1">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-2">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>
              <p className="text-gray-800">{blog.content}</p>
              <div className="mt-4">
                <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full shadow-sm">
                  Category: {blog.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
