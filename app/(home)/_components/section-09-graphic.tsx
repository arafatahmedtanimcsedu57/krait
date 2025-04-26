import Image from "next/image";
import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";

export const Section09Graphic = () => (
  <section className="relative z-20 -mt-10 overflow-hidden">
    <div className="relative grid items-center max-w-screen-xl grid-cols-12 gap-40 mx-auto text-white">
      <div className="col-span-5 px-4 text-center -mt-28">
        <h1
          style={{ textShadow: "0 0 8px rgba(255,255,255,0.6)" }}
          className="mb-6 text-4xl text-start md:text-6xl shimmer-text"
        >
          Ready to Secure Your Code with Krait?
        </h1>

        <p className="max-w-md mb-12 text-base leading-loose text-muted text-start md:text-lg">
          Protect your software and API endpoints with AI-powered scanning, API
          Inventory, and flow analysis. DevSecOps made simple and secure.
        </p>

        <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
          <div>
            <BookDemo />
          </div>
          <div>
            <TryFree />
          </div>
        </div>
      </div>

      <div className="col-span-7 mx-auto -ml-64 translate-x-24 pointer-events-none max-w-7xl">
        <Image
          src="/assets/home/section-09/content.svg"
          alt="Section 09 Content"
          className="object-contain w-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  </section>
);
