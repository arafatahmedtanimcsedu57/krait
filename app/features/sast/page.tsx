import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Shield } from "lucide-react"

export default function FeatureSast() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            <Code className="mr-1 h-3.5 w-3.5" />
            SAST
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Static Application Security Testing</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Identify vulnerabilities in your source code before they reach production.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/contact">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[400px]">
            <Image src="/placeholder.svg?height=800&width=800" alt="SAST Feature" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How SAST Works</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Static Application Security Testing analyzes your source code without executing it, identifying potential
            security vulnerabilities early in the development lifecycle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2 rounded-lg border p-4">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Early Detection</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Find vulnerabilities during development before they reach production.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border p-4">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Comprehensive Analysis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Scan for a wide range of vulnerabilities including injection flaws, XSS, and more.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border p-4">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">CI/CD Integration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seamlessly integrate with your CI/CD pipeline for automated security testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
