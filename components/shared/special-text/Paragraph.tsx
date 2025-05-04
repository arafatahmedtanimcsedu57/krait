import React from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/components/motion/reveal-on-hover';
import { cn } from '@/lib/utils';

function Paragraph({
	text,
	className = 'text-white',
}: {
	text: string;
	className?: string;
}) {
	return (
		<motion.p
			variants={fadeInUp}
			className={cn('text-base md:text-lg', className)}
		>
			{text}
		</motion.p>
	);
}

export default Paragraph;
