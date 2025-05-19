import Blog from "@/app/(models)/blog";
import { NextResponse } from "next/server";

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

export async function GET() {
  try {
    const blogs = await Blog.find({});
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
