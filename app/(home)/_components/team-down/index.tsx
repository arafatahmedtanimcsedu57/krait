'use client';

import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/shared/special-text/SectionTitle';

import { CardItem } from './components/CardItem';

import { cards } from './constants';
import { motion } from 'framer-motion';
import {
	staggerConfig,
	staggerContainerVariants,
} from '@/components/motion/motionConfig';
import { fadeInUp } from '@/components/motion/reveal-on-hover';
import { cn } from '@/lib/utils';
import { SPACE_STYLE } from '@/constant/space-style';
import Stagger from '@/components/motion/Stagger';
import Paragraph from '@/components/shared/special-text/Paragraph';
import Headline from '@/components/shared/special-text/Headline';

export const TeamDown = () => {
	const initialCardsCount = 4;
	const [isExpanded, setIsExpanded] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	const visibleCards = isExpanded ? cards : cards.slice(0, initialCardsCount);

	const handleToggle = () => {
		if (isExpanded) {
			sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
		setIsExpanded((prev) => !prev);
	};

	return (
		<section className={cn(SPACE_STYLE.MARGIN.EXTRA_LARGE.VERTICAL)}>
			<Stagger
				className={cn(
					'container mx-auto',
					'flex flex-col',
					SPACE_STYLE.GAP.MID,
				)}
			>
				<SectionTitle title="Security Tools Shouldn’t Slow Your Dev Team Down" />

				<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
					<Paragraph
						className="text-center"
						text="But juggling scanners, triage, fixes, and reports? That’s a
						full-time job"
					/>

					<Headline
						className="text-yellow-500 text-center"
						text="Krait makes it automatic"
					/>
				</Stagger>
			</Stagger>

			<div className="container mx-auto">
				<Stagger
					className={cn(
						'w-fit mx-auto  relative',
						'grid grid-cols-1 md:grid-cols-2',
						SPACE_STYLE.MARGIN.BIG.VERTICAL,
						SPACE_STYLE.GAP.SMALL,
					)}
				>
					<>
						{visibleCards.map((card, idx) => (
							<CardItem key={card.title} index={idx} card={card} />
						))}
					</>

					{cards.length > initialCardsCount && (
						<div className="flex justify-center items-center container  absolute bottom-0 md:col-span-2 bg-gradient-to-t from-black to-transparent h-48">
							<Button
								variant="outline"
								onClick={handleToggle}
								className={cn(
									'border border-yellow-400',
									'text-yellow-400 font-bold text-base',
									'bg-transparent',
									'hover:brightness-125 hover:bg-transparent hover:text-yellow-400 transition',
								)}
							>
								{isExpanded ? 'Hide' : 'Show More'}
							</Button>
						</div>
					)}
				</Stagger>
			</div>
		</section>
	);
};
