import Image from "next/image";

import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";
import { cn } from "@/lib/utils";

export default function FeatureSecretScanning() {
  return (
    <>
      {/* Intro */}

      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col min-h-[50vh] items-center justify-between",
          "relative"
        )}
      >
        <div
          className={cn(
            "container mx-auto",
            "text-center",
            "flex flex-col gap-4 md:gap-10 justify-center items-center mb-20 md:mb-40",
            "relative z-[1]"
          )}
        >
          <h1 className={cn("font-medium text-xl md:text-6xl max-w-[900px]")}>
            Prevent Secret Leaks Before They Become Breaches{" "}
          </h1>
          <p className={cn("text-xs md:text-base", "max-w-[700px]")}>
            Scans code and configs for exposed credentials like API keys,
            tokens, and passwords. It helps prevent leaks by alerting developers
            in real-time, assigning severity, and offering remediation tips.
          </p>
        </div>

        {/* Background glow image */}
        <Image
          src="/assets/secret-scanning/glow.svg" // Replace with your glowing image
          alt="Background glow"
          fill
          priority
          className="object-cover z-[0] rounded-3xl opacity-50"
        />

        {/* Overlay content (the white list box) */}
        <Image
          src="/assets/secret-scanning/api-list.svg"
          alt="gold-plate"
          width={0}
          height={0}
          priority
          className={cn(
            "object-fit w-full",
            "container mx-auto",
            "z-[1] rounded-xl md:rounded-3xl relative"
          )}
        />
      </div>

      {/* Protect */}
      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col min-h-[100vh] items-center justify-center",
          "relative"
        )}
      >
        <Image
          src="/glow.svg"
          alt="gold-plate"
          fill
          className="object-fit z-[0] rounded-3xl"
          priority
        />

        <div
          className={cn(
            "container mx-auto",
            "relative  min-h-[360px]",
            "flex items-center justify-center",
            "rounded-3xl border border-orange-300"
          )}
        >
          <Image
            src="/gold-plate.svg"
            alt="gold-plate"
            fill
            className="object-cover z-[1] rounded-3xl"
            priority
          />

          <div
            className={cn(
              "relative z-10",
              "p-4 md:p-8",
              "flex flex-wrap items-center justify-between gap-8"
            )}
          >
            <h1
              className={cn(
                "font-medium text-xl md:text-5xl",
                "flex-1",
                "max-w-[750px] min-w-[250px]"
              )}
            >
              Protect everything from code to cloud with Krait
            </h1>

            <div className="flex gap-4 flex-wrap md:justify-end min-w-[250px]">
              <BookDemo />
              <TryFree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
