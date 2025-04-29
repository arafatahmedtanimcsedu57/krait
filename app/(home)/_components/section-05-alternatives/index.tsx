"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";

import { CardItem } from "./components/CardItem";

import { cards } from "./constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

export const Section05Alternatives = () => {
  const initialCardsCount = 4;
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleCards = isExpanded ? cards : cards.slice(0, initialCardsCount);

  const handleToggle = () => {
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded((prev) => !prev);
  };

  return (
    <section ref={sectionRef} className="my-16">
      <div className="container mx-auto flex flex-col gap-16 px-4 w-fit">
        <div>
          <SectionTitle title="Security Tools Shouldn’t Slow Your Dev Team Down" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-center">
            But juggling scanners, triage, fixes, and reports? That’s a
            full-time job
          </p>

          <h3 className=" text-2xl text-yellow-400 text-center">
            <span className="font-bold">Krait makes it automatic</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <>
            {visibleCards.map((card, idx) => (
              <CardItem key={card.title} index={idx} card={card} />
            ))}
          </>

          {cards.length > initialCardsCount && (
            <div className="flex justify-center mt-4 md:col-span-2">
              <Button
                variant="outline"
                onClick={handleToggle}
                className="px-8 py-4 shadow-lg"
              >
                {isExpanded ? "Hide" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
