"use client";
import Image from "next/image";

export function PopularBlogs() {
  const partners = [
    { name: "Google", logo: "/firstimage.jpg" },
    { name: "Lyft", logo: "/firstimage.jpg" },
    { name: "Airbnb", logo: "/firstimage.jpg" },
    { name: "Uber", logo: "/firstimage.jpg" },
    { name: "Sony", logo: "/firstimage.jpg" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-2">You Are In Right Place</h2>
      <p className="text-gray-600 mb-10">
        Some of the best brands are already using Blogi for marketing their
        businesses
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <div key={index} className="w-24 md:w-32">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={40}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
