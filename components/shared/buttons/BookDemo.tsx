"use client";

import { PopIn } from "@/components/motion/PopIn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BookDemo = () => {
  return (
    <PopIn>
      <Button
        variant="secondary"
        size="lg"
        className={cn(
          "text-yellow-700 font-bold text-base",
          "border border-t-0 border-x-yellow-500 border-b-yellow-500 border-b-4",
          "bg-gradient-to-b from-white from-5% via-[#FFF7B7] via-[percentage:5%_90%] to-[#FFEA9B]",
          "hover:brightness-105 transition"
        )}
      >
        Book a Demo
      </Button>
    </PopIn>
  );
};
