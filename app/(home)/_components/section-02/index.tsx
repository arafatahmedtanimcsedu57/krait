"use client";
import { useState } from "react";

import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { section02Items } from "./constants";
import Image from "next/image";

export const Section02 = () => {
  const [selected, setSelected] = useState(0);
  const current = section02Items[selected];

  return (
    <section className="my-16">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 relative gap-16",
          "text-white",
          "container mx-auto mt-16"
        )}
      >
        {/* Animated Image */}

        <div className="px-4">
          <Image
            key={current.key}
            src={current.imgSrc}
            alt={current.heading}
            width={100}
            height={100}
            className="w-full max-w-full max-h-full"
            priority
          />
        </div>

        {/* Text & Menu */}
        <div className="flex flex-col justify-start px-4">
          <div className="mb-8">
            <h1
              key={current.key}
              className="text-2xl font-bold text-yellow-500 md:text-3xl"
            >
              {current.heading}
            </h1>
            <p className="mt-4 leading-7 text-white max-w-72">
              {current.description}
            </p>

            <Separator
              className={cn(
                "my-4 h-[1px]",
                "bg-gradient-to-r from-[#FFDD7E] to-[#000000]"
              )}
            />
          </div>

          <ul className="space-y-4 text-xl font-semibold">
            {section02Items.map((item, idx) => (
              <li
                key={item.key}
                onClick={() => setSelected(idx)}
                className={cn(
                  "cursor-pointer px-3 py-1 rounded-lg transition-colors",
                  selected === idx &&
                    "bg-[#FFDD7E]/20 text-[#FFDD7E] font-semibold",
                  selected !== idx &&
                    "text-white hover:text-[#FFDD7E] hover:bg-[#FFDD7E]/10"
                )}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
