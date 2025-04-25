import Link from "next/link"
import { ArrowRight, Shield, Lock, Code, Database, Server, Cloud } from "lucide-react"

export default function FeaturesWorkflow() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "SAST",
      description: "Static Application Security Testing",
      path: "/features/sast",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secret Scanning",
      description: "Detect leaked secrets in your code",
      path: "/features/secret-scanning",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "SCA",
      description: "Software Composition Analysis",
      path: "/features/sca",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Container Scanning",
      description: "Secure your container images",
      path: "/features/container-scanning",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "CSPM",
      description: "Cloud Security Posture Management",
      path: "/features/cspm",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "IaC",
      description: "Infrastructure as Code Security",
      path: "/features/iac",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DAST",
      description: "Dynamic Application Security Testing",
      path: "/features/dast",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "API Inventory",
      description: "Discover and manage your APIs",
      path: "/features/api-inventory",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "API Auth Analyzer",
      description: "Analyze API authentication",
      path: "/features/api-auth-analyzer",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI Autofix",
      description: "Automatically fix vulnerabilities",
      path: "/features/ai-autofix",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "CI/CD Security",
      description: "Secure your CI/CD pipeline",
      path: "/features/ci-cd-security",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Outdated Software Detection",
      description: "Detect outdated dependencies",
      path: "/features/outdated-software-detection",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Security Features</h1>
        <p className="mt-4 max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          Comprehensive security across your entire development lifecycle
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link key={feature.path} href={feature.path}>
            <div className="group flex flex-col h-full space-y-4 rounded-lg border p-6 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800">
              <div className="rounded-full bg-gray-100 p-4 w-fit dark:bg-gray-800">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
              <div className="flex items-center mt-auto pt-4">
                <span className="text-sm font-medium text-primary">Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
