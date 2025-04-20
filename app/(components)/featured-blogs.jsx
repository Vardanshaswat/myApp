import Image from "next/image";

function FeaturedBlogCard({ image, title, description, author, date }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="md:w-1/3">
        <Image
          src={image || "/firstimage.jpg"}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg w-full h-40 object-cover"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="font-medium text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-xs text-gray-500">by {author.name}</span>
          </div>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
}

export function FeaturedBlogs() {
  const featuredBlogs = [
    {
      image: "/firstimage.jpg",
      title: "Why I started Blogi",
      description:
        "Discover the story behind Blogi and how it came to be the platform you know today.",
      author: {
        image: "/placeholder.svg?height=24&width=24",
        name: "Sam Patel",
      },
      date: "Aug 14, 2023",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Blogi Launches Public API",
      description:
        "Access all your favorite blog content programmatically with our new public API.",
      author: {
        image: "/placeholder.svg?height=24&width=24",
        name: "Rachel Kim",
      },
      date: "July 23, 2023",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Featured Blogs
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredBlogs.map((blog, index) => (
          <FeaturedBlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
}
