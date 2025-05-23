import { HeroSection } from './_components/HeroSection';
import { Intro } from './_components/intro';
import { CentralSystem } from './_components/CentralSystem';
import { FlowAnalysis } from './_components/FlowAnalysis';
import { TeamDown } from './_components/team-down';
import { Summarized } from './_components/summarized';
import { Section07Integrations } from './_components/section-07-integrations';
import { Section09Graphic } from './_components/section-09-graphic';
import { Section10Articles } from './_components/section-10-articles';

export default function Home() {
	return (
		<div className="flex flex-col relative">
			{/* Hero Section */}
			<HeroSection />

			<Intro />

			<CentralSystem />

			<FlowAnalysis />

			<TeamDown />

			<Summarized />

			<Section07Integrations />

			<Section09Graphic />

			<Section10Articles />
		</div>
	);
}
