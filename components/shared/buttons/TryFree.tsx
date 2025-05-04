'use client';

import { motion } from 'framer-motion';

import { hoverScaleSpring } from '@/components/motion/motionConfig';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
export const TryFree = () => {
	return (
		<motion.div {...hoverScaleSpring}>
			<Button
				variant="outline"
				size="lg"
				className={cn(
					'border border-yellow-400',
					'text-yellow-400 font-bold text-base',
					'bg-transparent',
					'hover:brightness-125 hover:bg-transparent hover:text-yellow-400 transition',
				)}
			>
				Try Free
			</Button>
		</motion.div>
	);
};
