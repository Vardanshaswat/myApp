"use client";
import React from "react";

const BlogCard = ({ title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={image || "https://source.unsplash.com/random/400x200"}
        alt="Blog Image"
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default BlogCard;
