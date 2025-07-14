"use client";

import { useRouter } from "next/navigation";
import { Hero } from "../(components)/hero";
import { PopularBlogs } from "../(components)/popular-blogs";
// import { WhyStarted } from "../(components)/why-started";
import { FeaturedBlogs } from "../(components)/featured-blogs";
import { Partners } from "../(components)/partners";
import { Footer } from "../(components)/footer";

// import Image from "next/image"; // Uncomment if you need the image

export default function BlogPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/myblog");
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-500">
        {/* <Navbar /> */}
        <Hero />
      </div>

      <div>
        {/* <Image
          src="/firstimage.jpg"
          alt="This is sample image"
          height="500"
          width="600"
          className="h-full w-full"
        /> */}
      </div>

      <PopularBlogs />
      {/* <WhyStarted /> */}
      <FeaturedBlogs />
      <Partners />
      {/* <Newsletter /> */}
      <Footer />

      {/* Redirect Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Admin page
        </button>
      </div>
    </div>
  );
}
