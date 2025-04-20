import Image from "next/image";

export function WhyStarted() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="bg-gray-50 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Why I started Blogi</h2>
          <p className="text-gray-600 mb-6">
            My name is Sam Patel and the founder of Blogi. Blogi is my passion
            project, and we are committed to support the new platform.
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/firstimage.jpg"
              alt="Sam Patel"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Sam Patel</p>
              <p className="text-sm text-gray-500">Aug 14, 2023</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/firstimage.jpg"
            alt="Analytics"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
