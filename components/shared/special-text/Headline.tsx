import React from 'react';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/components/motion/reveal-on-hover';
import { cn } from '@/lib/utils';

function Headline({
	text,
	className = 'text-white',
}: {
	text: string;
	className?: string;
}) {
	return (
		<motion.h1
			variants={fadeInUp}
			className={cn('text-xl md:text-3xl font-bold', className)}
		>
			{text}
		</motion.h1>
	);
}

export default Headline;
