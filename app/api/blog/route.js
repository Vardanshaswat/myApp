import Blog from "@/app/(models)/blog";
import { NextResponse } from "next/server";
// import { connectToDB } from "@/utils/db"; // optional: if you need to ensure DB connection

export async function POST(req) {
  try {
    const body = await req.json();
    const blog = new Blog(body);
    await blog.save();

    return NextResponse.json({ message: "Blog saved successfully", blog });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    // Parse URL query
    const { searchParams } = new URL(req.url);
    const author = searchParams.get("author");

    let query = {};
    if (author) {
      query.author = 'fn';
    }

    const blogs = await Blog.find(query);
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
