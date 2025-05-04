'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/motion/reveal-on-hover';

import { cn } from '@/lib/utils';

export const SectionTitle = ({
	title,
	className = 'text-white',
}: {
	title: string;
	className?: string;
}) => {
	return (
		<motion.h2
			whileHover={{ scale: 1.01 }}
			transition={{ type: 'spring', stiffness: 120 }}
			variants={fadeInUp}
			className={cn(
				'w-7/12',
				'mx-auto',
				'text-xl md:text-4xl font-bold text-center text-transparent ',
				className,
			)}
		>
			{/* bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text shimmer-text */}
			{title}
		</motion.h2>
	);
};
