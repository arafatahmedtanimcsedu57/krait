'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { SectionTitle } from '@/components/shared/section-title';
import {
	fadeInUp,
	staggerContainer,
} from '@/components/motion/reveal-on-hover';

export const FlowAnalysis = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // only run once
		threshold: 0.1, // % of visibility before triggering
	});

	return (
		<section className="my-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto flex flex-col gap-16 px-4"
			>
				<SectionTitle title="Pinpoint API Weaknesses Through Visual Code Flow Analysis" />

				<div className="px-4" ref={ref}>
					{inView && (
						<object
							type="image/svg+xml"
							data="/assets/home/section-04/_content.svg"
						>
							svg-animation
						</object>
					)}
				</div>
			</motion.div>
		</section>
	);
};
