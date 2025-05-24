"use client";

import { useRouter } from "next/navigation";
// Removed lucide-react import to fix dependency error
import Image from "next/image";
import Link from "next/link";

export default function BlogHomepage(): JSX.Element {
  const router = useRouter();

  const handleRedirect = (): void => {
    router.push("/myblog");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-[#e8dfd5] py-4 px-6 flex items-center justify-between">
        <div className="font-bold text-lg">Blog Website</div>
        <nav className="hidden md:flex space-x-8">
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
        <div className="flex items-center">
          <span className="mr-2">Search</span>
          <span className="inline-block w-5 h-5">🔍</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Blog Title */}
        <div className="text-center mb-12">
          <p className="text-purple-600 mb-2">Our Blog</p>
          <h1 className="text-4xl font-bold mb-3">Stories & Ideas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking landscapes, iconic landmarks, and hidden gems
            around the globe
          </p>
        </div>

        {/* Featured Article and Top Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Main Featured Article */}
          <div>
            <div className="mb-4">
              <Image
                src="/fijiimage.jpg"
                alt="Mount Fuji with pagoda"
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-[300px]"
              />
            </div>
            <div className="mb-2">
              <span className="uppercase text-purple-600 text-sm font-medium tracking-wider">
                Travel
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Unveiling The Majestic Beauty Of Mount Fuji
            </h2>
            <p className="text-gray-600 text-sm mb-3">
              A journey to Japan's iconic symbol and natural wonder. Discover
              the rich history, breathtaking landscapes, and cultural
              significance of this iconic landmark
            </p>
          </div>

          {/* Top Stories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Top Stories</h3>

            <div className="space-y-6">
              {/* Story 1 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <span className="text-gray-400 text-xl font-light">1</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold mb-1">
                    Mountains and Boat: A Perfect Harmony
                  </h4>
                  <p className="text-gray-500 text-sm">
                    John Smith • 24 Jan 2023
                  </p>
                </div>
                <div className="flex-none">
                  <Image
                    src="/mountainboat.jpg"
                    alt="Mountains and boat"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>

              {/* Story 2 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <span className="text-gray-400 text-xl font-light">2</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold mb-1">
                    Unveiling the Timeless Charm of Old Street Buildings
                  </h4>
                  <p className="text-gray-500 text-sm">
                    John Smith • 16 Jan 2023
                  </p>
                </div>
                <div className="flex-none">
                  <Image
                    src="/ny.jpg"
                    alt="Old street buildings"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>

              {/* Story 3 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <span className="text-gray-400 text-xl font-light">3</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold mb-1">
                    Whispering Trees and the Enchanting Moon
                  </h4>
                  <p className="text-gray-500 text-sm">
                    John Smith • 24 Jan 2023
                  </p>
                </div>
                <div className="flex-none">
                  <Image
                    src="/mountainboat.jpg"
                    alt="Trees and moon"
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Article 1 */}
          <div>
            <div className="mb-4">
              <Image
                src="/ny.jpg"
                alt="City highway"
                width={500}
                height={300}
                className="rounded-md object-cover w-full h-[250px]"
              />
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Candice Wu • 15 Jan 2022</p>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  The Pulse of the City Unfolds on the Fast Lanes
                </h3>
                <span className="inline-block">↗</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Embark on an exhilarating ride through the bustling urban
              highways, where the rhythm of the city echoes in the hum of
              engines and the dazzling lights of the skyline.
            </p>
          </div>

          {/* Article 2 */}
          <div>
            <div className="mb-4">
              <Image
                src="/ny.jpg"
                alt="Car under starry sky"
                width={500}
                height={300}
                className="rounded-md object-cover w-full h-[250px]"
              />
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">
                Alex Whitten • 17 Jan 2022
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  A Cosmic Adventure Underneath the Starlit Canopy
                </h3>
                <span className="inline-block">↗</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Embark on an extraordinary odyssey as we merge the realms of
              mankind, automotive marvels, and the awe-inspiring Milky Way. Join
              us on a celestial journey through the cosmos.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-gray-100 text-center p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold mb-2">
            Start creating your blog today!
          </h2>
          <button
            onClick={handleRedirect}
            className="mt-4 bg-black text-white font-medium px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Go to My Blog
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 p-6 text-center">
        <p>© 2025 Blog Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
