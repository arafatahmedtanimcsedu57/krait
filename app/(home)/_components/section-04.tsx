import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";

export const Section04 = () => (
  <section className="my-16">
    <div className="container mx-auto flex flex-col">
      <SectionTitle title="Pinpoint API Weaknesses Through Visual Code Flow Analysis" />

      <div className="px-4">
        <Image
          src="/assets/home/section-04/_content.svg"
          alt="Section 04 Content"
          className="object-contain w-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  </section>
);
