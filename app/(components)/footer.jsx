"use client";
import Link from "next/link";

export function Footer() {
  const categories = [
    { title: "Company", links: ["About", "Careers", "Brand", "Blog"] },
    {
      title: "Support",
      links: ["Contact", "Help Center", "Safety", "Community"],
    },
    { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Licenses"] },
    { title: "Install App", links: ["iOS", "Android", "Windows", "MacOS"] },
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <Link href="/" className="text-xl font-bold text-blue-600">
            BLOGI
          </Link>
        </div>

        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="font-medium mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
