'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import { SectionTitle } from '@/components/shared/section-title';
import { staggerContainer } from '@/components/motion/reveal-on-hover';
import { fadeSlide, fadeSlideRight } from '@/components/motion/motionConfig';

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
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="my-16">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto flex flex-col gap-16"
			>
				<SectionTitle title="Everything you need to secure code, cloud, and runtime– in one central system" />

				<div className="relative flex justify-center gap-6 flex-wrap z-20">
					{cardConfig.map((item, index) => {
						const curveOffset = [100, 50, 0, 50, 100];
						const offset = curveOffset[index] ?? 0;

						const step = 0.1;
						const brightness = 0.6 + step * (cardConfig.length - 1 - index); // 1.4 → 1.3 → ... → 1.0

						return (
							<div
								key={index}
								className="flex flex-col rounded-3xl overflow-hidden outline outline-1 outline-[#857a4ea8] bg-[#0f0f0f] shadow-lg max-w-[250px]"
								style={{
									transform: `translateY(${offset}px)`,
									filter: `brightness(${brightness})`,
								}}
							>
								<div className="flex items-center justify-center h-48 bg-[#1c1c1c80]">
									<img
										src={item.icon}
										alt={item.icon}
										className="h-32 w-32 object-contain"
									/>
								</div>

								<div className="p-6 flex flex-col gap-2 text-white">
									<h2 className="text-lg font-semibold">{item.headline}</h2>
									<p className="text-sm text-gray-300">{item.para}</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="p-8 max-w-[1200px] mx-auto" ref={ref}>
					<div
						className="relative isolate grid grid-cols-1 lg:grid-cols-2 h-full z-10
							outline outline-[16px] outline-[rgba(112,112,112,0.548)] rounded-3xl
							before:content-[''] before:absolute before:inset-0 before:bg-[url('/assets/home/section-03/bg.svg')]
							before:bg-cover before:bg-center before:rounded-3xl before:z-[-1] before:bg-no-repeat"
					>
						{/* Glow Effect */}
						<div className="absolute top-0 left-[25%] w-1/2 h-1/2 rounded-full bg-[#ffbb00] blur-[8rem] pointer-events-none z-[-2]" />

						{/* Text Column */}
						<div className="flex flex-col gap-8 justify-center p-8 md:py-40 md:px-16">
							{textConfig.map((item, idx) => (
								<div key={idx}>
									<h1 className="text-xl md:text-2xl font-bold">
										{item.headline}
									</h1>
									<p className="text-sm md:text-base font-normal">
										{item.para}
									</p>
								</div>
							))}
						</div>

						{/* Animated Layers */}
						<div className="relative isolate">
							<motion.div
								{...fadeSlide}
								animate={inView ? { y: 0, opacity: 1 } : {}}
								className="absolute inset-0 z-[-2] bg-[url('/assets/home/section-03/layer-01.png')] bg-bottom bg-no-repeat bg-[length:100%] rounded-b-[8px]"
							/>
							<motion.div
								{...fadeSlideRight}
								animate={inView ? { x: 0, opacity: 1 } : {}}
								className="absolute inset-0 z-[-1] bg-[url('/assets/home/section-03/layer-02.svg')] bg-center bg-no-repeat bg-[length:100%]"
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
