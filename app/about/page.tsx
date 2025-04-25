import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We're on a mission to make application security accessible to every organization.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[400px]">
            <Image src="/placeholder.svg?height=800&width=800" alt="About Us" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Founded in 2020, our company was born out of the need for more comprehensive and integrated security
            solutions. We saw organizations struggling with disconnected security tools and decided to build a platform
            that brings everything together.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Our mission is to democratize application security by making enterprise-grade security tools accessible to
            organizations of all sizes. We believe that security should be an enabler, not a blocker, for innovation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="relative h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=Team Member ${i}`}
                    alt={`Team Member ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Team Member {i}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder & CTO</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold">Join Our Team</h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              We're always looking for talented individuals to join our mission. Check out our open positions.
            </p>
            <Link href="/contact">
              <Button>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
