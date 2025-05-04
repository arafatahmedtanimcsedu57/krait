'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import { fadeInUp } from '@/components/motion/reveal-on-hover';
import { fadeSlide, fadeSlideRight } from '@/components/motion/motionConfig';
import Stagger from '@/components/motion/Stagger';
import Paragraph from '@/components/shared/special-text/Paragraph';
import Headline from '@/components/shared/special-text/Headline';

import { cn } from '@/lib/utils';
import { section02Items } from './constants';
import { SPACE_STYLE } from '@/constant/space-style';

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
		<section className={cn(SPACE_STYLE.MARGIN.EXTRA_LARGE.VERTICAL)}>
			<Stagger
				className={cn(
					'container mx-auto',
					'grid grid-cols-1 lg:grid-cols-3',
					SPACE_STYLE.PADDING.MID.HORIZONTAL,
					SPACE_STYLE.GAP.LARGE,
				)}
			>
				{/* Image Section */}
				<motion.div
					variants={fadeInUp}
					className="col-span-2 relative h-full
"
				>
					<AnimatePresence mode="wait">
						<motion.div key={key} {...fadeSlide}>
							<Image
								src={imgSrc}
								alt={heading}
								width={0}
								height={0}
								className={cn(
									'w-full h-auto',
									'lg:rounded-3xl rounded-xl',
									'border-8 border-gray-700/50',
								)}
								priority
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>

				{/* Text & Menu Section */}
				<Stagger className="flex flex-col justify-start">
					<AnimatePresence mode="wait">
						<motion.div key={key} {...fadeSlideRight}>
							<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.MID)}>
								<Headline text={heading} className="text-yellow-500" />
								<Paragraph text={description} />
								<Separator className="h-[1px] bg-gradient-to-r from-yellow-500 to-black" />
							</Stagger>
						</motion.div>
					</AnimatePresence>

					<Stagger
						className={cn(
							'flex flex-col',
							SPACE_STYLE.PADDING.MID.VERTICAL,
							SPACE_STYLE.GAP.SMALL,
						)}
					>
						{section02Items.map(({ key, label }, idx) => {
							const isActive = selected === idx;
							return (
								<Paragraph
									key={key}
									text={label}
									className={isActive ? 'text-yellow-500' : ''}
								/>
							);
						})}
					</Stagger>
				</Stagger>
			</Stagger>
		</section>
	);
};
