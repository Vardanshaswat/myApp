import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// This would typically come from your database
const articles = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js and React",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Web Development",
  },
  {
    id: "2",
    title: "The Power of Server Components",
    excerpt:
      "Explore how React Server Components can improve your application performance",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "React",
  },
  {
    id: "3",
    title: "Building a Blog with Next.js",
    excerpt: "A step-by-step guide to creating your own blog platform",
    date: "May 5, 2025",
    readTime: "12 min read",
    category: "Tutorial",
  },
];

export default function RecentArticles() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Articles</CardTitle>
          <CardDescription>Your latest published content</CardDescription>
        </div>
        <Link
          href="/dashboard/my-articles"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View all
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    href={`/dashboard/articles/${article.id}`}
                    className="font-medium hover:underline"
                  >
                    {article.title}
                  </Link>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <Badge variant="secondary" className="ml-auto">
                  {article.category}
                </Badge>
              </div>
              <div className="border-t border-border pt-2 mt-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
