'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { BookDemo } from '@/components/shared/buttons/BookDemo';
import { TryFree } from '@/components/shared/buttons/TryFree';
import {
	fadeInUp,
	staggerContainer,
} from '@/components/motion/reveal-on-hover';
import { FadeIn } from '@/components/motion/FadeIn';

export const HeroSection = () => (
	<section className="relative py-16">
		{/* Background Decoration */}
		<Image
			src="/assets/home/section-01/bg-lines.svg"
			alt="Background lines"
			fill
			className="absolute inset-0 w-full h-full object-contain opacity-60"
			sizes="(max-width: 1024px) 100vw, 50vw"
			priority
		/>

		<div className="container mx-auto grid gap-16 lg:grid-cols-2 text-white relative mt-16">
			{/* Text Column */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="flex flex-col justify-center gap-6 px-4"
			>
				<motion.h1
					variants={fadeInUp}
					whileHover={{ scale: 1.01 }}
					transition={{ type: 'spring', stiffness: 150 }}
					className="text-4xl md:text-6xl font-medium"
				>
					Understand, Prioritize &amp; Fix Security Issues Faster
				</motion.h1>

				<motion.p
					variants={fadeInUp}
					whileHover={{ scale: 1.01 }}
					transition={{ type: 'spring', stiffness: 120 }}
					className="text-base md:text-lg leading-loose mb-6"
				>
					Protect your software and API endpoints with AI-powered scanning, API
					Inventory, and flow mapping. DevSecOps made simple and secure.
				</motion.p>

				<motion.div
					variants={fadeInUp}
					className="flex flex-col sm:flex-row gap-4 mt-8"
				>
					<BookDemo />
					<TryFree />
				</motion.div>
			</motion.div>

			{/* Image Column */}
			<FadeIn duration={2}>
				<div className="relative w-full h-full flex items-center justify-center isolate px-4">
					{/* Blur Glow Effects */}
					<div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#fa8d34] blur-[10rem] pointer-events-none z-[-1]" />
					<div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-[#ffbb00] blur-[8rem] pointer-events-none z-[-1]" />

					<Image
						src="/assets/home/section-01/bg-content.svg"
						alt="Security workflow visual"
						width={1000}
						height={1000}
						className="w-full h-auto relative"
						sizes="(max-width: 1024px) 100vw, 50vw"
						priority
					/>
				</div>
			</FadeIn>
		</div>
	</section>
);
