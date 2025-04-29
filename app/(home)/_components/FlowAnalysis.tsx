"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { SectionTitle } from "@/components/shared/section-title";

export const FlowAnalysis = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.2, // % of visibility before triggering
  });

  return (
    <section className="my-16" ref={ref}>
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <SectionTitle title="Pinpoint API Weaknesses Through Visual Code Flow Analysis" />

        <div className="px-4">
          {inView && (
            <object
              type="image/svg+xml"
              data="/assets/home/section-04/_content.svg"
            >
              svg-animation
            </object>
          )}
        </div>
      </div>
    </section>
  );
};
