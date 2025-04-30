'use client';

import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '@/components/shared/section-title';

export const CentralSystem = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // only run once
		threshold: 0.2, // % of visibility before triggering
	});

	return (
		<section className="my-16" ref={ref}>
			<div className="container mx-auto flex flex-col gap-16">
				<SectionTitle title="Everything you need to secure code, cloud, and runtime– in one central system" />

				<div className="px-4">
					{inView && (
						<object
							type="image/svg+xml"
							data="/assets/home/section-03/content-with-bg-and-pic.svg"
						>
							svg-animation
						</object>
					)}
				</div>
			</div>
		</section>
	);
};
