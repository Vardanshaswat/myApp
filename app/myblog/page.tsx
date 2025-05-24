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
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 py-4 px-6 flex items-center justify-between shadow-sm">
        <div className="font-extrabold text-xl text-indigo-700 cursor-pointer">
          <Link href="/">Blog Website</Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>
        </nav>
        <div className="flex items-center text-gray-600 text-sm space-x-1">
          <span>Search</span>
          <span>🔍</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <section className="text-center mb-12">
          <p className="text-indigo-600 font-semibold mb-2">
            Create Your Story
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Share Your Ideas
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            Express yourself through words and images. Create a blog post that
            inspires and captivates your readers.
          </p>
        </section>

        {/* Form Container */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Create New Blog Post
            </h2>
            <div className="w-16 h-1 bg-indigo-600 rounded" />
          </div>

          <BlogForm />
        </section>

        {/* Tips Section */}
        <section className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Tips for Great Blog Posts
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-indigo-600">
            <li>Use compelling headlines that grab attention</li>
            <li>Include high-quality images to enhance your story</li>
            <li>Break up text with subheadings for better readability</li>
            <li>End with a clear call-to-action for your readers</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 text-gray-700 py-6 text-center text-sm shadow-inner mt-16">
        <p>© 2025 Blog Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPage;
