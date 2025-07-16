"use client";

import RegisterForm from "@/components/RegisterForm";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const sessionResult = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionResult.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [sessionResult.status, router]);

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <RegisterForm />
    </main>
  );
}