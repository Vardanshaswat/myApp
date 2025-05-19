"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BlogForm = () => {
  const router = useRouter();

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    content: "",
    author: "",
    ageFlagged: false,
  });

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

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });

    if (res.ok) {
      alert("Blog created!");
      router.push("/myblog"); // or wherever you want to go after
    } else {
      alert("Failed to create blog.");
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 w-full max-w-md">
        <h3 className="text-lg font-semibold">Create your blog</h3>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={blogData.title}
          className="w-full p-2 border"
          required
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          value={blogData.description}
          className="w-full p-2 border"
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          onChange={handleChange}
          value={blogData.category}
          className="w-full p-2 border"
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={blogData.content}
          className="w-full p-2 border"
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={handleChange}
          value={blogData.author}
          className="w-full p-2 border"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="ageFlagged"
            checked={blogData.ageFlagged}
            onChange={handleChange}
          />
          <span>Age Flagged</span>
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
