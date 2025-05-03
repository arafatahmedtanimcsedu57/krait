import Image from "next/image";

import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";
import { cn } from "@/lib/utils";

const cardConfig = [
  {
    headline: "Dependency Discovery",
    para: [
      "Auto-assign, auto-resolve, and automate triage to free your team from repetitive tasks.",
      "Supports multiple ecosystems (e.g., npm, pip, Maven, Go modules, Docker images).",
    ],
  },

  {
    headline: "Vulnerability Detection",
    para: [
      "Identifies known vulnerabilities (CVEs) in third-party libraries.",
      "Maps issues to authoritative databases (e.g., NVD, GitHub Advisory DB, OSV).",
      "Highlights severity (CVSS score), exportability, and fix availability.-assign, auto-resolve, and automate triage to free your team from repetitive tasks.",
    ],
  },

  {
    headline: "License Compliance",
    para: [
      "Analyzes dependencies for their open-source licenses (e.g., MIT, GPL, Apache).",
      "Flags potential legal risks from restrictive or incompatible licenses.",
      "Supports custom license policies.",
    ],
  },

  {
    headline: "Version Recommendations",
    para: [
      "Suggests secure and compatible versions to upgrade vulnerable dependencies.",
      "Includes change-log and breaking change indicators when available.",
    ],
  },
];

export default function FeatureSecretScanning() {
  return (
    <div className="py-12 flex flex-col gap-32">
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
          Secure every dependency, before it breaks your app{" "}
        </h1>
        <p className={cn("text-xs md:text-base", "max-w-[700px]")}>
          Identifies vulnerabilities and license risks in open-source
          dependencies by analyzing both direct and transitive packages. We
          ensure secure and compliant software by detecting CVEs, flagging
          license issues, and recommending safe versions
        </p>
      </div>

      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col items-center justify-between",
          "relative"
        )}
      >
        {/* Background glow image */}
        <Image
          src="/assets/sca/glow.svg" // Replace with your glowing image
          alt="Background glow"
          width={0}
          height={0}
          priority
          className="w-full  z-[0] rounded-3xl opacity-50 absolute -translate-y-[30%]"
        />

        {/* Overlay content (the white list box) */}
        <Image
          src="/assets/sca/api-list.svg"
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

      {/* Secure Code */}
      <div
        className={cn(
          "px-4 py-12 md:px-10 md:py-24",
          "flex flex-col items-center justify-center gap-16",
          "container mx-auto"
        )}
      >
        <h1
          className={cn(
            "font-medium text-xl md:text-6xl text-center",
            "max-w-[900px]"
          )}
        >
          Everything you need to secure code, cloud, and runtime– in one central
          system{" "}
        </h1>

        <div className="flex flex-wrap md:flex-nowrap gap-4 ">
          {cardConfig.map((card) => {
            return (
              <div
                className={cn(
                  "border border-orange-200 rounded-xl md:rounded-3xl p-6 flex flex-col gap-4 w-full md:w-1/2"
                )}
              >
                <h1 className="font-bold text-xl">{card.headline}</h1>
                {card.para.map((item) => (
                  <p className="text-xs">{item}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
