'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { SectionTitle } from '@/components/shared/section-title';
import {
	fadeInUp,
	staggerContainer,
} from '@/components/motion/reveal-on-hover';

export const CentralSystem = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // only run once
		threshold: 0.3, // % of visibility before triggering
	});

	return (
		<section className="my-16" ref={ref}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto flex flex-col gap-16"
			>
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
			</motion.div>
		</section>
	);
};
