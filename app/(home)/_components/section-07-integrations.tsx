import { SectionTitle } from '@/components/shared/special-text/SectionTitle';
import Image from 'next/image';

export const Section07Integrations = () => (
	<section className="my-16">
		<div className="container mx-auto flex flex-col gap-16">
			<SectionTitle title="Seamless Integrations for Your DevSecOps Workflow" />

			<div className="px-4">
				<Image
					src="/assets/home/section-07/content.svg"
					alt="Section 07 Content"
					className="object-contain w-full"
					width={100}
					height={100}
				/>
			</div>
		</div>
	</section>
);
