"use client";
import { useRouter } from "next/navigation";
import BlogCard from "../(components)/BlogCard";

export default function BlogHomepage(): JSX.Element {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push("/myblog");
  };

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Blogs</h1>
        <p className="text-lg">All blogs about Blogi in one place</p>
      </section>

      {/* Popular Blogs */}
      <BlogCard />
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((id: number) => (
            <div key={id} className="border rounded-lg p-4 shadow">
              <img
                src={`/firstimage.jpg`}
                alt="Blog"
                className="rounded mb-2"
              />
              <h3 className="font-bold text-lg">Blog Title {id}</h3>
              <p className="text-sm text-gray-600">Short description here...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why I Started Blogi */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Why I started Blogi</h2>
        <p>
          This is a paragraph talking about the motivation behind starting
          Blogi. It's a platform to share thoughts and experiences...
        </p>
      </section>

      {/* Featured Blogs */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[4, 5].map((id: number) => (
            <div key={id} className="border rounded-lg p-4 shadow">
              <img
                src={`/firstimage.jpg`}
                alt="Featured Blog"
                className="rounded mb-2"
              />
              <h3 className="font-bold text-lg">Featured Blog {id}</h3>
              <p className="text-sm text-gray-600">
                Interesting content here...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center p-8">
        <h2 className="text-2xl font-semibold mb-2">
          Start creating your blog today!
        </h2>
        <button
          onClick={handleRedirect}
          className="mt-4 bg-white text-blue-600 font-bold px-6 py-2 rounded shadow hover:bg-blue-100 transition"
        >
          Go to My Blog
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© 2025 Blogi. All rights reserved.</p>
      </footer>
    </div>
  );
}
