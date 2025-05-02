import Image from "next/image";

import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";
import { cn } from "@/lib/utils";

export default function FeatureSecretScanning() {
  return (
    <div className="py-12 flex flex-col">
      {/* Intro */}

      <div
        className={cn(
          "px-4 mt-12 md:px-10",
          "container mx-auto",
          "text-center",
          "flex flex-col gap-4 md:gap-10 justify-center items-center",
          "relative z-[1]"
        )}
      >
        <h1 className={cn("font-medium text-xl md:text-6xl max-w-[900px]")}>
          Prevent Secret Leaks Before They Become Breaches{" "}
        </h1>
        <p className={cn("text-xs md:text-base", "max-w-[700px]")}>
          Scans code and configs for exposed credentials like API keys, tokens,
          and passwords. It helps prevent leaks by alerting developers in
          real-time, assigning severity, and offering remediation tips.
        </p>
      </div>

      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col items-center justify-between",
          "relative"
        )}
      >
        <Image
          src="/assets/secret-scanning/api_list.svg"
          alt="gold-plate"
          width={0}
          height={0}
          priority
          className={cn(
            "w-full",
            "container mx-auto max-w-[1200px]",
            "z-[1] rounded-xl md:rounded-3xl"
          )}
        />
      </div>

      {/* Protect */}
      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col items-center justify-center",
          "relative",
          "container mx-auto",
          "min-h-[50vh]"
        )}
      >
        <Image
          src="/glow.svg"
          alt="Background glow"
          fill
          priority
          className="object-cover z-[2] border absolute left-36 overflow-hidden"
        />

        <div className="flex flex-wrap gap-6 justify-between items-center">
          <h1
            className={cn(
              "font-medium text-xl md:text-5xl",
              "flex-1",
              "max-w-[750px] min-w-[250px]",
              "relative"
            )}
          >
            Protect everything from code to cloud with Krait
          </h1>

          <div className="flex gap-4 flex-wrap md:justify-end min-w-[250px] relative">
            <BookDemo />
            <TryFree />
          </div>
        </div>
      </div>
    </div>
  );
}
