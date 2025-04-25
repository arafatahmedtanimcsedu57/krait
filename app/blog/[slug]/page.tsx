import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogDetail({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  const post = {
    title: "Understanding SAST and How It Improves Application Security",
    date: "April 24, 2025",
    author: "Security Expert",
    content: `
      Static Application Security Testing (SAST) is a crucial component of modern application security. 
      It helps developers identify security vulnerabilities in their code before it's deployed to production.
      
      Unlike dynamic testing methods, SAST analyzes source code without executing the application, making it an ideal choice for early detection of security issues.
      
      In this article, we'll explore how SAST works, its benefits, and how to integrate it into your development workflow.
    `,
    image: "/placeholder.svg?height=600&width=1200",
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="inline-flex items-center mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="relative my-8 h-[400px] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
