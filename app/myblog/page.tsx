"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import BlogForm from "../(components)/BlogForm";

interface BlogPageProps {
  params: any;
}

const BlogPage = ({ params }: BlogPageProps) => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[url('/createblogbg.jpg')] bg-cover bg-center text-gray-900">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Content wrapper above overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-[#e8dfd5]/90 py-4 px-6 flex items-center justify-between shadow-md">
          <div className="font-bold text-lg text-gray-800">Blog Website</div>
          <nav className="hidden md:flex space-x-8 text-gray-700">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center text-gray-600">
            <span className="mr-2">Search</span>
            <span className="inline-block w-5 h-5">🔍</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-10">
          {/* Page Title */}
          <div className="text-center mb-10">
            <p className="text-indigo-600 mb-2 font-medium drop-shadow">
              Create Your Story
            </p>
            <h1 className="text-4xl text-slate-900 font-bold mb-4 drop-shadow-md">
              Share Your Ideas
            </h1>
            <p className="text-slate-800 max-w-2xl mx-auto drop-shadow-sm">
              Express yourself through words and images. Create a blog post that
              inspires and captivates your readers.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white/90 rounded-lg shadow-md border border-gray-200 p-6 md:p-8 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Create New Blog Post
              </h2>
              <div className="h-1 w-16 bg-purple-600"></div>
            </div>

            <BlogForm />
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-gray-100/90 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Tips for Great Blog Posts
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Use compelling headlines that grab attention</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Include high-quality images to enhance your story</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>
                  Break up text with subheadings for better readability
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>End with a clear call-to-action for your readers</span>
              </li>
            </ul>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-gray-700 p-6 text-center mt-12 shadow-inner">
          <p>© 2025 Blog Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;
