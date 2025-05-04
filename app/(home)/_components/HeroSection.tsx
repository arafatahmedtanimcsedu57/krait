'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { BookDemo } from '@/components/shared/buttons/BookDemo';
import { TryFree } from '@/components/shared/buttons/TryFree';

import { fadeInUp } from '@/components/motion/reveal-on-hover';
import Stagger from '@/components/motion/Stagger';
import Branding from '@/components/shared/special-text/Branding';
import Paragraph from '@/components/shared/special-text/Paragraph';

import { cn } from '@/lib/utils';
import { SPACE_STYLE } from '@/constant/space-style';

export const HeroSection = () => (
	<section className={cn('relative', SPACE_STYLE.MARGIN.EXTRA_LARGE.VERTICAL)}>
		{/* Background Decoration */}
		<Image
			src="/assets/home/section-01/bg-lines.svg"
			alt="Background lines"
			fill
			className="absolute inset-0 w-full h-full object-contain opacity-60"
			sizes="(max-width: 1024px) 100vw, 50vw"
			priority
		/>

		<div
			className={cn(
				'container mx-auto relative',
				'grid lg:grid-cols-2',
				SPACE_STYLE.GAP.LARGE,
			)}
		>
			{/* Text Column */}
			<Stagger
				className={cn(
					'flex flex-col justify-center',
					SPACE_STYLE.PADDING.MID.HORIZONTAL,
					SPACE_STYLE.GAP.MID,
				)}
			>
				<Branding />
				<Paragraph text="Protect your software and API endpoints with AI-powered scanning, API Inventory, and flow mapping. DevSecOps made simple and secure." />

				<motion.div
					variants={fadeInUp}
					className={cn('flex flex-col sm:flex-row', SPACE_STYLE.GAP.MID)}
				>
					<BookDemo />
					<TryFree />
				</motion.div>
			</Stagger>

			{/* Image Column */}
			<Stagger
				className={cn(
					'relative isolate',
					'w-full h-full',
					'flex items-center justify-center ',
					SPACE_STYLE.PADDING.MID.HORIZONTAL,
				)}
			>
				{/* Blur Glow Effects */}
				<motion.div
					variants={fadeInUp}
					className={cn(
						'absolute z-[-1]',
						'top-0 right-0',
						'w-1/2 h-1/2',
						'bg-[#fa8d34] blur-[10rem]',
						'rounded-full pointer-events-none',
					)}
				/>
				<motion.div
					variants={fadeInUp}
					className={cn(
						'absolute z-[-1]',
						'bottom-0 left-0',
						'w-1/2 h-1/2',
						'bg-[#ffbb00] blur-[8rem]',
						'rounded-full pointer-events-none',
					)}
				/>

				<motion.div variants={fadeInUp} className="relative">
					<Image
						src="/assets/home/section-01/bg-content.svg"
						alt="Security workflow visual"
						width={1000}
						height={1000}
						className="w-full h-auto relative"
						sizes="(max-width: 1024px) 100vw, 50vw"
						priority
					/>
				</motion.div>
			</Stagger>
		</div>
	</section>
);
