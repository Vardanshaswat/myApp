// app/login/page.tsx
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Using alias

// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  // If already logged in, redirect to homepage
  if (session) redirect("/homepage");

  return (
    <main>
      <LoginForm />
    </main>
  );
}
