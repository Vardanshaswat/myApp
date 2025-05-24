"use client";

import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, onChange }) => {
  return (
    <div className="mt-6">
      <label className="block text-lg font-semibold text-gray-800 mb-3">
        Blog Content
      </label>
      <div className="bg-[#e8dfd5] border border-gray-300 rounded-xl shadow-md overflow-hidden">
        <ReactQuill
          value={value}
          onChange={onChange}
          theme="snow"
          className="min-h-[250px] text-gray-900 px-2 py-2"
          placeholder="Write your content here..."
        />
      </div>
    </div>
  );
};

export default TextEditor;
