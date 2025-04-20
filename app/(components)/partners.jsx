import Image from "next/image";

export function Partners() {
  const partners = [
    { name: "Google", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Lyft", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Airbnb", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Uber", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Sony", logo: "/placeholder.svg?height=40&width=100" },
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
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={100}
              height={40}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
