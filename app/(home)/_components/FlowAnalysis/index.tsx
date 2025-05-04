'use client';

import { motion } from 'framer-motion';

import Stagger from '@/components/motion/Stagger';
import { fadeInUp } from '@/components/motion/reveal-on-hover';

import { HttpCallGraph } from './_components/HttpCallGraph';
import { FindingIssues } from './_components/FindingIssues';
import { ApiInventorySection } from './_components/ApiInventorySection';
import { RepoScanSection } from './_components/RepoScanSection';
import { cn } from '@/lib/utils';
import { SPACE_STYLE } from '@/constant/space-style';

export const FlowAnalysis = () => {
	return (
		<section
			className={cn(
				'relative isolate container mx-auto',

				SPACE_STYLE.MARGIN.EXTRA_LARGE.VERTICAL,
				SPACE_STYLE.PADDING.MID.HORIZONTAL,
			)}
		>
			<div className="absolute top-[25%] right-[25%] w-1/3 h-1/3 rounded-full bg-[#ffbb0073] blur-[10rem] pointer-events-none z-[-1]" />

			<Stagger
				className={cn(
					'container mx-auto grid grid-cols-1 lg:grid-cols-5',
					SPACE_STYLE.GAP.MID,
				)}
			>
				<motion.div variants={fadeInUp} className="col-span-1 lg:col-span-3">
					<RepoScanSection />
				</motion.div>
				<motion.div variants={fadeInUp} className="col-span-1 lg:col-span-2">
					<ApiInventorySection />
				</motion.div>
				<motion.div variants={fadeInUp} className="col-span-1 lg:col-span-2">
					<HttpCallGraph />
				</motion.div>
				<motion.div variants={fadeInUp} className="col-span-1 lg:col-span-3">
					<FindingIssues />
				</motion.div>
			</Stagger>
		</section>
	);
};
