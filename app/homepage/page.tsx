"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Homepage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.name) return;

    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `/api/blog?author=${encodeURIComponent(session.user.name)}`
        );
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") fetchBlogs();
  }, [session, status]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const handleCreateArticle = () => router.push("/myblog");
  const handleOpenTextEditor = () => router.push("/texteditor");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-indigo-600 tracking-wide">
            Blog Platform
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={handleOpenTextEditor}
              className="px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-shadow shadow-sm"
            >
              Text Editor
            </button>
            <button
              onClick={handleLogout}
              className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-shadow shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow-md p-10">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-indigo-700">
            Welcome to Your Personal Blog
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Manage your articles, create new content, and share your thoughts
            with the world.
          </p>
          <button
            onClick={handleCreateArticle}
            className="inline-flex items-center px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-shadow shadow-md font-semibold text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Create New Article
          </button>
        </section>

        {/* Blogs Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold tracking-wide">
              Your Blog Posts
            </h3>
            <span className="text-gray-600 font-medium">
              {blogs.length} {blogs.length === 1 ? "article" : "articles"}{" "}
              published
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <p className="text-gray-500 col-span-full text-center">
                Loading...
              </p>
            ) : blogs.length === 0 ? (
              <p className="text-gray-500 col-span-full text-center">
                No articles yet.
              </p>
            ) : (
              blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold mb-2 text-indigo-700">
                    {blog.title}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {blog.description || blog.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-indigo-600 font-semibold">
                    <Link
                      href={`/blog/${blog.author}`}
                      className="hover:underline"
                    >
                      Read More
                    </Link>
                    <Link
                      href={`/editor/${blog.content}`}
                      className="hover:text-indigo-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6 tracking-wide">
            Quick Access
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Quick access buttons */}
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600 mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                ),
                label: "Drafts",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600 mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                ),
                label: "Categories",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600 mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                ),
                label: "Help",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600 mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286 1.066c-1.458-.79-2.983.705-2.187 2.187a1.532 1.532 0 01-1.065 2.287c-1.56.38-1.56 2.6 0 2.98a1.532 1.532 0 011.066 2.286c-.79 1.457.705 2.983 2.186 2.187a1.532 1.532 0 012.287 1.065c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-1.066c1.458.79 2.983-.705 2.187-2.187a1.532 1.532 0 011.065-2.287c1.56-.38 1.56-2.6 0-2.98a1.532 1.532 0 01-1.066-2.286c.79-1.457-.705-2.983-2.187-2.187a1.532 1.532 0 01-2.287-1.065z" />
                  </svg>
                ),
                label: "Settings",
              },
            ].map(({ icon, label }, i) => (
              <button
                key={i}
                className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-shadow shadow-sm"
              >
                {icon}
                <span className="text-indigo-700 font-medium">{label}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
