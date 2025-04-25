import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const HeroSection = () => (
  <section className="relative my-16">
    {/* Background */}
    <Image
      className="absolute w-full top-0 bottom-0"
      src="/assets/home/section-01/bg-lines.svg"
      alt="bg"
      width={100}
      height={100}
    />

    {/* Content grid */}
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2",
        "mx-auto text-white",
        "container mx-auto"
      )}
    >
      {/* Text Column */}
      <div className="px-4 mt-40 text-center flex flex-col gap-6">
        <h1 className={cn("text-wrap text-start", "text-4xl md:text-6xl")}>
          Understand, Prioritize &amp; Fix Security Issues Faster
        </h1>

        <p className="text-base leading-loose text-start md:text-lg mb-6">
          Protect your software and API endpoints with AI-powered scanning, API
          Inventory, and flow mapping. DevSecOps made simple and secure.
        </p>

        <div className="flex flex-col items-center justify-start gap-4 sm:flex-row my-16">
          <BookDemo />

          <TryFree />
        </div>
      </div>

      {/* Image Column */}
      <div className="flex justify-center pointer-events-none">
        <Image
          src="/assets/home/section-01/content-with-bg.svg"
          alt="Section 01 Content"
          className="mx-auto w-fit"
          width={100}
          height={100}
        />
      </div>
    </div>
  </section>
);
