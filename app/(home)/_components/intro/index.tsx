'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import {
	fadeInUp,
	staggerContainer,
} from '@/components/motion/reveal-on-hover';
import { cn } from '@/lib/utils';
import { section02Items } from './constants';
import { fadeSlide, fadeSlideRight } from '@/components/motion/motionConfig';

export const Intro = () => {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSelected((prev) => (prev + 1) % section02Items.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const { key, heading, description, imgSrc } = section02Items[selected];

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
					className="px-8 col-span-2 relative h-full
"
				>
					<AnimatePresence mode="wait">
						<motion.div key={key} {...fadeSlide}>
							<Image
								src={imgSrc}
								alt={heading}
								width={0}
								height={0}
								className="lg:rounded-3xl w-full h-auto outline outline-[16px] outline-[rgba(112,112,112,0.548)] rounded-3xl
"
								priority
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>

				{/* Text & Menu Section */}
				<motion.div
					variants={fadeInUp}
					className="flex flex-col justify-start px-4"
				>
					<div className="mb-8">
						<AnimatePresence mode="wait">
							<motion.div key={key} {...fadeSlideRight}>
								<h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
									{heading}
								</h1>
								<p className="mt-4 leading-7">{description}</p>
							</motion.div>
						</AnimatePresence>
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
