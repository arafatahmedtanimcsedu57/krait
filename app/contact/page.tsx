"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real app
    console.log("Form submitted:", formData)
    alert("Thanks for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Have questions about our platform? Get in touch with our team.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@secureplatform.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>123 Security Street, San Francisco, CA 94103</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
