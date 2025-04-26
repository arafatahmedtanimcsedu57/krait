"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";

import { cn } from "@/lib/utils";
import {
  fadeInUp,
  staggerContainer,
} from "@/components/motion/reveal-on-hover";
import { FadeIn } from "@/components/motion/FadeIn";

export const HeroSection = () => (
  <section className="relative my-16">
    {/* Background */}
    <Image
      src="/assets/home/section-01/bg.svg"
      alt="bg"
      width={100}
      height={0}
      className="absolute top-1/2 -translate-y-1/2 bottom-0"
      style={{ objectFit: "cover", width: "100%", opacity: 0.6 }}
      priority // optional, loads image eagerly
    />

    {/* Content grid */}
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 relative gap-16",
        "text-white",
        "container mx-auto mt-16"
      )}
    >
      {/* Text Column */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="px-4 text-center flex flex-col justify-center gap-6"
      >
        <motion.h1
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 120 }}
          variants={fadeInUp}
          className={cn("text-wrap text-start", "text-4xl md:text-6xl")}
        >
          Understand, Prioritize &amp; Fix Security Issues Faster
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-base leading-loose text-start md:text-lg mb-6"
        >
          Protect your software and API endpoints with AI-powered scanning, API
          Inventory, and flow mapping. DevSecOps made simple and secure.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-start gap-4 sm:flex-row my-16"
        >
          <BookDemo />

          <TryFree />
        </motion.div>
      </motion.div>
      {/* Image Column */}

      <FadeIn duration={2}>
        <Image
          src="/assets/home/section-01/bg-content.svg"
          alt="Section 01 Content"
          className="mx-auto w-fit"
          width={100}
          height={100}
        />
      </FadeIn>
    </div>
  </section>
);
