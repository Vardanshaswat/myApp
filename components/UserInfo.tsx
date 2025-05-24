"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function UserInfo(): JSX.Element {
  const { data: session } = useSession() as { data: Session | null };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-b from-[#fefefe] to-[#f5f3f0] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Profile
        </h2>

        <div className="text-gray-700 mb-4">
          <span className="block font-semibold">Name:</span>
          <span className="text-gray-900">{session?.user?.name}</span>
        </div>

        <div className="text-gray-700 mb-6">
          <span className="block font-semibold">Email:</span>
          <span className="text-gray-900">{session?.user?.email}</span>
        </div>

        <button
          onClick={() => signOut()}
          className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200 shadow-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
