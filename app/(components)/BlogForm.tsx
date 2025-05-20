"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // ✅ NextAuth hook

const BlogForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ Fetch user session

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    author: "", // will be auto-set
    ageFlagged: false,
  });

  // ✅ Set author name when session is available
  useEffect(() => {
    if (session?.user?.name) {
      setBlogData((prev) => ({ ...prev, author: session.user.name }));
    }
  }, [session]);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      alert("You must be logged in to post.");
      return;
    }

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });

    if (res.ok) {
      alert("Blog created!");
      router.push("/myblog");
    } else {
      alert("Failed to create blog.");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Form Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              value={blogData.title}
              required
              placeholder="Title"
              className="w-full border p-3 rounded"
            />

            {/* Description */}
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              value={blogData.description}
              placeholder="Description"
              className="w-full border p-3 rounded"
            />

            {/* Category */}
            <input
              id="category"
              name="category"
              type="text"
              onChange={handleChange}
              value={blogData.category}
              placeholder="Category"
              className="w-full border p-3 rounded"
            />

            {/* Content */}
            <textarea
              id="content"
              name="content"
              onChange={handleChange}
              value={blogData.content}
              rows={10}
              placeholder="Content"
              className="w-full border p-3 rounded"
            />

            {/* Age Flag */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="ageFlagged"
                name="ageFlagged"
                checked={blogData.ageFlagged}
                onChange={handleChange}
              />
              <span>Age Restricted</span>
            </label>

            {/* Author Display (read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author (auto-filled)
              </label>
              <input
                type="text"
                value={blogData.author}
                readOnly
                className="w-full border p-3 rounded bg-gray-100 text-gray-700"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" disabled={status !== "authenticated"}>
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
