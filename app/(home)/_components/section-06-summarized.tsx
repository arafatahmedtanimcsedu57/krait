import Image from 'next/image';
import { SectionTitle } from '@/components/shared/special-text/SectionTitle';

export const Section06Summarized = () => (
	<section className="my-16">
		<div className="container mx-auto flex flex-col gap-16">
			<SectionTitle title="Designed to be the First Line of Defense Against Software Threats" />

			<div className="px-4">
				<Image
					src="/assets/home/section-06/content.svg"
					alt="Section 06 Content"
					className="object-contain w-full"
					width={100}
					height={100}
				/>
			</div>
		</div>
	</section>
);
