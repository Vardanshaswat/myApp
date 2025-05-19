import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-white">
          BLOGI
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/features"
          className="text-sm text-white/80 hover:text-white"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="text-sm text-white/80 hover:text-white"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-sm text-white/80 hover:text-white"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="text-white hover:text-white/80">
          Login
        </Button>
        <Button
          variant="outline"
          className="bg-white text-blue-600 hover:bg-white/90 border-none"
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
}
