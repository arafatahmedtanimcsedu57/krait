'use client';

import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import { SectionTitle } from '@/components/shared/special-text/SectionTitle';
import { fadeSlide, fadeSlideRight } from '@/components/motion/motionConfig';
import Stagger from '@/components/motion/Stagger';

import { cn } from '@/lib/utils';
import { SPACE_STYLE } from '@/constant/space-style';
import { fadeInUp } from '@/components/motion/reveal-on-hover';
import Paragraph from '@/components/shared/special-text/Paragraph';
import Headline from '@/components/shared/special-text/Headline';

const textConfig = [
	{
		headline: 'Deep Code Analysis',
		para: 'Scan for OWASP Top 10, logic flaws, secrets in code, and more.',
	},
	{
		headline: 'Standard Compliance',
		para: 'Generate reports aligned with SOC2, ISO 27001, HIPAA, and PCI-DSS instantly.',
	},
	{
		headline: 'Precise Issue Mapping',
		para: 'Get line-by-line issue breakdown with file path, severity, and suggested fix.',
	},
];

const cardConfig = [
	{
		headline: 'Code Scan',
		para: 'Support for various content types such as articles, blogs, videos, and more. Rich text ',
		icon: '/assets/home/section-03/icons/binary.svg',
	},

	{
		headline: 'Code Scan',
		para: 'Support for various content types such as articles, blogs, videos, and more. Rich text ',
		icon: '/assets/home/section-03/icons/cloud.svg',
	},

	{
		headline: 'Code Scan',
		para: 'Support for various content types such as articles, blogs, videos, and more. Rich text ',
		icon: '/assets/home/section-03/icons/stacks.svg',
	},

	{
		headline: 'Code Scan',
		para: 'Support for various content types such as articles, blogs, videos, and more. Rich text ',
		icon: '/assets/home/section-03/icons/settings.svg',
	},

	{
		headline: 'Code Scan',
		para: 'Support for various content types such as articles, blogs, videos, and more. Rich text ',
		icon: '/assets/home/section-03/icons/globe.svg',
	},
];

export const CentralSystem = () => {
	return (
		<section className={cn(SPACE_STYLE.MARGIN.EXTRA_LARGE.VERTICAL)}>
			<Stagger
				className={cn(
					'container mx-auto',
					'flex flex-col gap-16',
					SPACE_STYLE.GAP.LARGE,
					SPACE_STYLE.PADDING.MID.HORIZONTAL,
				)}
			>
				<SectionTitle title="Everything you need to secure code, cloud, and runtime– in one central system" />

				<motion.div
					variants={fadeInUp}
					className="relative hidden lg:grid lg:grid-cols-5 gap-6 flex-wrap z-20"
				>
					{cardConfig.map((item, index) => {
						const curveOffset = [100, 50, 0, 50, 100];
						const offset = curveOffset[index] ?? 0;

						const step = 0.1;
						const brightness = 0.6 + step * (cardConfig.length - 1 - index); // 1.4 → 1.3 → ... → 1.0

						return (
							<div
								key={index}
								className={cn(
									'flex flex-col',
									'rounded-3xl',
									'overflow-hidden',
									'border border-yellow-500/30 bg-black/50',
								)}
								style={{
									transform: `translateY(${offset}px)`,
									filter: `brightness(${brightness})`,
								}}
							>
								<div className="flex items-center justify-center h-48 bg-zinc-700/20">
									<img
										src={item.icon}
										alt={item.icon}
										className="h-32 w-32 object-contain"
									/>
								</div>

								<div className="p-6 flex flex-col gap-2 text-white">
									<Paragraph className="font-semibold" text={item.headline} />
									<Paragraph className="text-gray-300" text={item.para} />
								</div>
							</div>
						);
					})}
				</motion.div>

				<motion.div
					variants={fadeInUp}
					className={cn(SPACE_STYLE.PADDING.MID.HORIZONTAL)}
				>
					<Stagger
						className={cn(
							'relative isolate grid grid-cols-1 lg:grid-cols-2 h-full z-10',
							'border-8 border-gray-700/50 lg:rounded-3xl rounded-xl',
							"before:content-[''] before:absolute before:inset-0 before:bg-[url('/assets/home/section-03/bg.svg')]",
							'before:bg-cover before:bg-center before:lg:rounded-2xl before:rounded-sm before:z-[-1] before:bg-no-repeat',
						)}
					>
						{/* Glow Effect */}
						<motion.div
							variants={fadeInUp}
							className="absolute top-0 left-[25%] w-1/2 h-1/2 rounded-full bg-[#ffbb00] blur-[8rem] pointer-events-none z-[-2]"
						/>

						{/* Text Column */}
						<Stagger
							className={cn(
								'flex flex-col justify-center',
								SPACE_STYLE.GAP.MID,
								SPACE_STYLE.PADDING.LARGE.VERTICAL,
								SPACE_STYLE.PADDING.BIG.HORIZONTAL,
							)}
						>
							{textConfig.map((item, idx) => (
								<motion.div
									variants={fadeInUp}
									key={idx}
									className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}
								>
									<Headline className="font-bold" text={item.headline} />
									<Paragraph className="" text={item.para} />
								</motion.div>
							))}
						</Stagger>

						{/* Animated Layers */}
						<AnimatePresence mode="wait">
							<Stagger className="relative isolate">
								<motion.div
									variants={fadeInUp}
									className="absolute inset-0 z-[-2] bg-[url('/assets/home/section-03/layer-01.png')] bg-bottom bg-no-repeat bg-[length:100%] rounded-br-[8px]"
								/>
								<motion.div
									variants={fadeInUp}
									className="absolute inset-0 z-[-1] bg-[url('/assets/home/section-03/layer-02.svg')] bg-center bg-no-repeat bg-[length:100%]"
								/>
							</Stagger>
						</AnimatePresence>
					</Stagger>
				</motion.div>
			</Stagger>
		</section>
	);
};
