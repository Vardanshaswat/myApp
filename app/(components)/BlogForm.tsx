"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const BlogForm = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    author: "",
    ageFlagged: false,
  });

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
    <div className="min-h-screen bg-white/70 py-8 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* Form Card */}
        <div className="bg-white/90 shadow-md rounded-lg p-6 border border-gray-200">
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
              className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-3 rounded text-gray-800 placeholder-gray-400"
            />

            {/* Description */}
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              value={blogData.description}
              placeholder="Description"
              className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-3 rounded text-gray-800 placeholder-gray-400"
            />

            {/* Category */}
            <input
              id="category"
              name="category"
              type="text"
              onChange={handleChange}
              value={blogData.category}
              placeholder="Category"
              className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-3 rounded text-gray-800 placeholder-gray-400"
            />

            {/* Content */}
            <textarea
              id="content"
              name="content"
              onChange={handleChange}
              value={blogData.content}
              rows={10}
              placeholder="Content"
              className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-3 rounded text-gray-800 placeholder-gray-400"
            />

            {/* Age Flag */}
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                id="ageFlagged"
                name="ageFlagged"
                checked={blogData.ageFlagged}
                onChange={handleChange}
                className="accent-purple-600"
              />
              <span>Age Restricted</span>
            </label>

            {/* Author Display (read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status !== "authenticated"}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition disabled:opacity-50"
              >
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
