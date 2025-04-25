import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Code, Database } from "lucide-react";
import { HeroSection } from "./_components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
