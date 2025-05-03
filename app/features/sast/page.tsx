import Image from "next/image";
import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";

export default function FeatureSast() {
  return (
    <div className="container mx-auto py-12 md:py-24">
      {/* Intro */}
      <div className="text-center mb-36">
        <h1 className="font-medium text-6xl mb-10">
          Streamlined Code Security with Built-In Fixes
        </h1>
        <p className="text-base">
          Krait identifies real security issues in your code and delivers clear,
          actionable fixes. Integrated directly into your workflow, using
          AI-generated pull requests
        </p>
      </div>

      {/* Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-36">
        <div>
          <h1 className="font-bold text-5xl mb-10">
            Scheduled and on demand security scans on your code
          </h1>
          <p className="text-base font-semibold">
            Perform scheduled and on-demand security scans on your code to
            detect vulnerabilities such as SQL injection, XSS, and RCE, helping
            you safeguard your codebase.
          </p>
        </div>

        <div></div>
      </div>

      {/* Security Risk */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-36">
        <div></div>

        <div>
          <h1 className="font-bold text-5xl mb-10">
            Security Risk Prioritization
          </h1>
          <p className="text-base font-semibold">
            Assigns severity levels and provides recommendations for remediation
            and  helps teams prioritize fixing high-risk vulnerabilities
          </p>
        </div>
      </div>

      {/* Language Support */}
      <div className="grid grid-cols-1 mb-36">
        <div className="text-center">
          <h1 className="font-bold text-5xl mb-10">Languages Supported</h1>
          <p className="text-xs">and many more...</p>
        </div>
      </div>

      {/* Protect */}
      <div className="relative rounded-3xl  min-h-[900px] flex items-center justify-center overflow-hidden">
        <Image
          src="/glow.svg"
          alt="gold-plate"
          fill
          className="object-fit z-[0] rounded-3xl"
          priority
        />
        <div className="relative rounded-3xl min-h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="/gold-plate.svg"
            alt="gold-plate"
            fill
            className="object-cover z-[1] rounded-3xl"
            priority
          />

          <div className="relative flex flex-wrap items-center justify-between  gap-8 p-8 z-10">
            <h1 className="font-medium text-5xl flex-1 max-w-[800px] min-w-[250px]">
              Protect everything from code to cloud with Krait
            </h1>

            <div className="flex gap-4 flex-wrap justify-end min-w-[250px]">
              <BookDemo />
              <TryFree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
