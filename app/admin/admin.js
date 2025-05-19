// pages/admin/index.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Welcome to the admin panel!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700">
              Total Tickets
            </h2>
            <p className="text-2xl font-bold">42</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-green-700">Users</h2>
            <p className="text-2xl font-bold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
