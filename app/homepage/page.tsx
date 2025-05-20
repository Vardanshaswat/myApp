"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample blog data (replace with actual data fetching)
// const SAMPLE_BLOGS = [
//   {
//     id: 1,
//     title: "Getting Started with Next.js",
//     excerpt: "Learn the basics of Next.js and how to create your first app.",
//     date: "May 15, 2025",
//   },
//   {
//     id: 2,
//     title: "Mastering Tailwind CSS",
//     excerpt: "Tips and tricks for efficient styling with Tailwind CSS.",
//     date: "May 10, 2025",
//   },
//   {
//     id: 3,
//     title: "Authentication Best Practices",
//     excerpt: "Secure your application with these authentication strategies.",
//     date: "May 5, 2025",
//   },
// ];

export default function Homepage() {
  const router = useRouter();
  // const [blogs, setBlogs] = useState(SAMPLE_BLOGS);
  const { data: session, status } = useSession();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!session?.user?.name) {
        console.log(
          "Session or user name is not available.",
          session.user.name
        );
        return;
      }

      try {
        const res = await fetch(
          `/api/blog?author=${encodeURIComponent(session.user.name)}`
        );
        console.log(res, "Hereerere");
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

  const handleLogout = async () => {
    await signOut({ redirect: false }); // don't redirect automatically
    router.push("/login");
  };

  const handleCreateArticle = () => {
    router.push("/myblog");
  };

  const handleOpenTextEditor = () => {
    router.push("/texteditor");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold text-indigo-600">Blog Platform</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleOpenTextEditor}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Text Editor
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Your Personal Blog
          </h1>
          <p className="text-gray-600 mb-6">
            Manage your articles, create new content, and share your thoughts
            with the world.
          </p>
          <button
            onClick={handleCreateArticle}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Create New Article
          </button>
        </div>

        {/* Blogs Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Blog Posts
            </h2>
            <div className="text-gray-500">
              {blogs.length} {blogs.length === 1 ? "article" : "articles"}{" "}
              published
            </div>
          </div>

          {/* Blog List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{blog.title}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/blog/${blog.author}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Read More
                    </Link>
                    <Link
                      href={`/editor/${blog.content}`}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span className="text-gray-700 font-medium">Drafts</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 font-medium">Categories</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 font-medium">Help</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
