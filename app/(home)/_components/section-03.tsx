import Image from "next/image";
import { SectionTitle } from "@/components/shared/section-title";

export const Section03 = () => (
  <section className="my-16">
    <div className="container mx-auto flex flex-col gap-16">
      <SectionTitle title="Everything you need to secure code, cloud, and runtime– in one central system" />

      <div className="px-4">
        <Image
          src="/assets/home/section-03/content-with-bg-and-pic.svg"
          alt="Everything in one system"
          className="object-contain w-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  </section>
);
