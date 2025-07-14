"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

export default function BlogHomepage(): JSX.Element {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push("/myblog");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f5f3f0] text-gray-900">
      {/* Header */}
      <header className="backdrop-blur bg-white/80 py-4 px-6 shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 tracking-tight">
            Blog<span className="text-purple-600">Sphere</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-purple-600 transition">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <span className="font-medium">Search</span>
            <span className="text-lg">🔍</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Blog Title */}
        <div className="text-center mb-20">
          <p className="text-purple-600 text-sm uppercase font-semibold tracking-widest mb-2">
            Our Blog
          </p>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            Stories & Ideas
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore breathtaking landscapes, iconic landmarks, and hidden gems
            around the globe.
          </p>
        </div>

        {/* Featured & Top Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Featured */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/fijiimage.jpg"
              alt="Mount Fuji"
              width={600}
              height={400}
              className="object-cover w-full h-[300px]"
            />
            <div className="p-6">
              <span className="text-purple-600 text-xs font-bold uppercase tracking-wide">
                Travel
              </span>
              <h2 className="text-2xl font-bold mt-2 mb-3">
                Unveiling The Majestic Beauty Of Mount Fuji
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A journey to Japan's iconic symbol and natural wonder. Discover
                the rich history, breathtaking landscapes, and cultural
                significance of this iconic landmark.
              </p>
            </div>
          </div>

          {/* Top Stories */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Top Stories</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((story, i) => (
                <div className="flex gap-4" key={i}>
                  <div className="text-purple-300 text-xl font-bold w-5">
                    {story}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold mb-1">
                      {i === 0 && "Mountains and Boat: A Perfect Harmony"}
                      {i === 1 &&
                        "Unveiling the Timeless Charm of Old Street Buildings"}
                      {i === 2 && "Whispering Trees and the Enchanting Moon"}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      John Smith • 24 Jan 2023
                    </p>
                  </div>
                  <Image
                    src={i === 1 ? "/ny.jpg" : "/mountainboat.jpg"}
                    alt="Story"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover flex-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src="/ny.jpg"
                alt="Blog Visual"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-[250px] mb-4"
              />
              <p className="text-gray-400 text-sm mb-1">
                {i === 0
                  ? "Candice Wu • 15 Jan 2022"
                  : "Alex Whitten • 17 Jan 2022"}
              </p>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {i === 0
                    ? "The Pulse of the City Unfolds on the Fast Lanes"
                    : "A Cosmic Adventure Underneath the Starlit Canopy"}
                </h3>
                <span className="text-gray-500">↗</span>
              </div>
              <p className="text-gray-600 text-sm">
                {i === 0
                  ? "Embark on an exhilarating ride through the bustling urban highways, where the rhythm of the city echoes in the hum of engines and skyline lights."
                  : "Join us on a celestial journey through the cosmos where mankind, machines, and stars collide under the night sky."}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-white border rounded-2xl text-center p-10 shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Start creating your blog today!
          </h2>
          <button
            onClick={handleRedirect}
            className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-200 shadow-md"
          >
            Go to My Blog
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fafafa] text-gray-500 text-sm p-6 text-center border-t border-gray-200 mt-10">
        © 2025 BlogSphere. All rights reserved.
      </footer>
    </div>
  );
}
