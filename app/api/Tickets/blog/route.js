// app/api/myblog/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Blog from "@/lib/models/blog";

// POST = Create a new blog
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const blog = new Blog(body);
    await blog.save();

    return NextResponse.json({ message: "Blog created!" }, { status: 201 });
  } catch (error) {
    console.error("Blog POST error:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

// GET = Fetch all blogs
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Blog GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
