'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/motion/reveal-on-hover';

export const SectionTitle = ({ title }: { title: string }) => {
	return (
		<motion.h2
			whileHover={{ scale: 1.01 }}
			transition={{ type: 'spring', stiffness: 120 }}
			variants={fadeInUp}
			className="w-7/12 mx-auto text-4xl font-bold text-center text-transparent bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text shimmer-text"
		>
			{title}
		</motion.h2>
	);
};
