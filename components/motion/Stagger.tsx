'use client';

import { motion } from 'framer-motion';
import { staggerConfig, staggerContainerVariants } from './motionConfig';
import type { ReactNode } from 'react';

interface StaggerProps {
	children: ReactNode;
	className?: string;
}

const Stagger = ({ children, className = '' }: StaggerProps) => {
	return (
		<motion.div
			{...staggerConfig}
			variants={staggerContainerVariants}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default Stagger;
