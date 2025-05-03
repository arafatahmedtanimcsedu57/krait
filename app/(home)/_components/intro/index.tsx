'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/motion/FadeIn';
import { SlideIn } from '@/components/motion/SlideIn';
import {
	fadeInUp,
	staggerContainer,
} from '@/components/motion/reveal-on-hover';

import { cn } from '@/lib/utils';
import { section02Items } from './constants';

export const Intro = () => {
	const [selected, setSelected] = useState(0);

	// Auto-change selected index every 10 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((prev) => (prev + 1) % section02Items.length);
		}, 5000); // 5 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<section className="my-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16 text-white"
			>
				{/* Image Section */}
				<motion.div
					variants={fadeInUp}
					className="px-4 col-span-2 relative h-full"
				>
					<FadeIn duration={2} key={section02Items[selected].key}>
						<Image
							src={section02Items[selected].imgSrc}
							alt={section02Items[selected].heading}
							width={0}
							height={0}
							className="rounded-xl lg:rounded-3xl w-full h-auto "
							priority
						/>
					</FadeIn>
				</motion.div>

				{/* Text & Menu Section */}
				<motion.div
					variants={fadeInUp}
					className="flex flex-col justify-start px-4"
				>
					<div className="mb-8">
						<SlideIn
							duration={1}
							slideFrom="right"
							key={section02Items[selected].key}
						>
							<h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
								{section02Items[selected].heading}
							</h1>
							<p className="mt-4 leading-7">
								{section02Items[selected].description}
							</p>
						</SlideIn>
						<Separator className="my-4 h-[1px] bg-gradient-to-r from-[#FFDD7E] to-black" />
					</div>

					<ul className="space-y-4 text-xl font-semibold">
						{section02Items.map(({ key, label }, idx) => {
							const isActive = selected === idx;
							return (
								<li
									key={key}
									onClick={() => setSelected(idx)}
									role="button"
									aria-selected={isActive}
									tabIndex={0}
									className={cn(
										'cursor-pointer px-3 py-1 rounded-lg transition-colors outline-none',
										isActive
											? 'bg-[#FFDD7E]/20 text-[#FFDD7E]'
											: 'text-white hover:text-[#FFDD7E] hover:bg-[#FFDD7E]/10',
									)}
								>
									{label}
								</li>
							);
						})}
					</ul>
				</motion.div>
			</motion.div>
		</section>
	);
};
