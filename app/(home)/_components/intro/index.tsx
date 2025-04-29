"use client";

import { useState } from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideIn } from "@/components/motion/SlideIn";

import { cn } from "@/lib/utils";
import { section02Items } from "./constants";

export const Intro = () => {
  const [selected, setSelected] = useState(0);
  const { key, imgSrc, heading, description } = section02Items[selected];

  return (
    <section className="my-16">
      <div
        className={cn(
          "container mx-auto mt-16",
          "grid grid-cols-1 lg:grid-cols-3 gap-16",
          "text-white"
        )}
      >
        {/* Image Section */}
        <div className="px-4 col-span-2">
          <FadeIn duration={2} key={key}>
            <Image
              src={imgSrc}
              alt={heading}
              width={100}
              height={100}
              className="w-full h-[500px] rounded-3xl"
              priority
            />
          </FadeIn>
        </div>

        {/* Text & Menu Section */}
        <div className="flex flex-col justify-start px-4">
          <div className="mb-8">
            <SlideIn duration={1} slideFrom="right" key={key}>
              <h1 className="text-2xl font-bold text-yellow-500 md:text-3xl">
                {heading}
              </h1>
              <p className="mt-4 leading-7">{description}</p>
            </SlideIn>
            <Separator className="my-4 h-[1px] bg-gradient-to-r from-[#FFDD7E] to-[#000000]" />
          </div>

          <ul className="space-y-4 text-xl font-semibold">
            {section02Items.map(({ key, label }, idx) => (
              <li
                key={key}
                onClick={() => setSelected(idx)}
                className={cn(
                  "cursor-pointer px-3 py-1 rounded-lg transition-colors",
                  selected === idx
                    ? "bg-[#FFDD7E]/20 text-[#FFDD7E]"
                    : "text-white hover:text-[#FFDD7E] hover:bg-[#FFDD7E]/10"
                )}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
