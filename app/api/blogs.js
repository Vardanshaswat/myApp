// pages/api/blogs.js
import Blog from "../../models/Blog";

export async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const blogs = await Blog.find(); // Fetch all blog posts from the DB
      res.status(200).json(blogs); // Send the blogs as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Error fetching blogs" });
    }
  }
}
