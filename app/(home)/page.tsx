import { HeroSection } from "./_components/HeroSection";
import { Section02 } from "./_components/section-02";
import { Section03 } from "./_components/section-03";
import { Section04 } from "./_components/section-04";
import { Section05Alternatives } from "./_components/section-05-alternatives";
import { Section06Summarized } from "./_components/section-06-summarized";
import { Section07Integrations } from "./_components/section-07-integrations";
import { Section09Graphic } from "./_components/section-09-graphic";
import { Section10Articles } from "./_components/section-10-articles";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Hero Section */}
      <HeroSection />

      <Section02 />

      <Section03 />

      <Section04 />

      <Section05Alternatives />

      <Section06Summarized />

      <Section07Integrations />

      <Section09Graphic />

      <Section10Articles />
    </div>
  );
}
