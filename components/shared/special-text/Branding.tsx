import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/motion/reveal-on-hover';

function Branding() {
	return (
		<motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-medium">
			Understand, Prioritize &amp; Fix Security Issues Faster
		</motion.h1>
	);
}

export default Branding;
