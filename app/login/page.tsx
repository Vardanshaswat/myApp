// app/login/page.tsx
import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {

  redirect("/homepage");

  return (
    <main>
      <LoginForm />
    </main>
  );
}
