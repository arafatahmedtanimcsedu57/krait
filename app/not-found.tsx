import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound404() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="mt-4 text-gray-500 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="mt-8">
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
