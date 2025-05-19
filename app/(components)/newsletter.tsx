// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section className="bg-blue-600 py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Get notified about our blogs published
        </h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/90 border-none"
          />
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
