"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({ value, onChange }) => {
  return (
    <div className="mt-2">
      <ReactQuill
        value={value}
        onChange={onChange}
        theme="snow"
        className="bg-white"
        placeholder="Write your content here..."
      />
    </div>
  );
};

export default TextEditor;
