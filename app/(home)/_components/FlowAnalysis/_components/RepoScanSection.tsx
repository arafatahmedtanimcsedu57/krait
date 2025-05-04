'use client';

import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SPACE_STYLE } from '@/constant/space-style';
import Headline from '@/components/shared/special-text/Headline';
import Stagger from '@/components/motion/Stagger';
import Paragraph from '@/components/shared/special-text/Paragraph';

const repos = [
	{
		name: 'the-algorithm',
		description: "Source code for twitter's recommendation algorithm",
		selected: true,
		disabled: false,
	},
	{
		name: 'the-algorithm',
		description: "Source code for twitter's recommendation algorithm",
		selected: true,
		disabled: false,
	},
	{
		name: 'the-algorithm',
		description: "Source code for twitter's recommendation algorithm",
		selected: true,
		disabled: false,
	},
];

export const RepoScanSection = () => {
	const [repoStates, setRepoStates] = useState(repos);

	useEffect(() => {
		const interval = setInterval(() => {
			setRepoStates((prev) => {
				const updatable = prev
					.map((r, i) => (!r.disabled ? i : null))
					.filter((x) => x !== null);

				if (updatable.length < 2) return prev;

				const selectedIndex =
					updatable[Math.floor(Math.random() * updatable.length)];
				let unselectedIndex = selectedIndex;

				// Ensure different indexes
				while (unselectedIndex === selectedIndex) {
					unselectedIndex =
						updatable[Math.floor(Math.random() * updatable.length)];
				}

				return prev.map((r, i) => {
					if (i === selectedIndex) return { ...r, selected: true };
					if (i === unselectedIndex) return { ...r, selected: false };
					return r;
				});
			});
		}, 1000); // Every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={cn(
				'bg-black/60 h-full',
				'text-white',
				'flex flex-col justify-center lg:rounded-3xl rounded-xl',

				SPACE_STYLE.PADDING.MID.HORIZONTAL,
				SPACE_STYLE.PADDING.MID.VERTICAL,
				SPACE_STYLE.GAP.MID,
			)}
		>
			{/* Repo List */}
			<div className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				{repoStates.map((repo, index) => (
					<motion.div
						layout
						key={index}
						initial={false}
						animate={{
							scale: repo.selected ? 1.01 : 1,
							boxShadow: repo.selected
								? '0px 8px 24px #857a4ea8'
								: '0px 0px 0px rgba(0,0,0,0)',
							transition: { type: 'spring', stiffness: 100, damping: 10 },
						}}
						className={cn(
							'flex items-center justify-between',
							SPACE_STYLE.GAP.SMALL,
							'rounded-xl',
							repo.disabled
								? 'bg-slate-500 text-white/50 cursor-not-allowed'
								: 'cursor-pointer',
							repo.selected ? 'bg-white text-black' : 'bg-slate-700/50',
							SPACE_STYLE.PADDING.SMALL.HORIZONTAL,
							SPACE_STYLE.PADDING.SMALL.VERTICAL,
						)}
					>
						<div className={cn('flex items-center', SPACE_STYLE.GAP.SMALL)}>
							<div
								className={`min-w-8 h-8 rounded-full flex items-center justify-center ${
									repo.disabled ? 'bg-black/30' : 'bg-black'
								}`}
							>
								<span className="text-white font-bold text-xs">GH</span>
							</div>

							<div className="flex flex-col">
								<span
									className={`font-semibold ${
										repo.disabled ? 'text-white/80' : ''
									}`}
								>
									{repo.name}
								</span>
								<span
									className={`text-xs  overflow-hidden  ${
										repo.disabled ? 'text-white/60' : 'text-gray-500'
									}`}
								>
									{repo.description}
								</span>
							</div>
						</div>

						<div
							className={`min-w-5 min-h-5 border-2 rounded-sm flex items-center justify-center ${
								repo.disabled
									? 'border-white/30 bg-transparent'
									: repo.selected
									? 'border-black bg-black'
									: 'border-gray-500 bg-white'
							}`}
						>
							{repo.selected && !repo.disabled && (
								<Check className="w-3 h-3 text-white" />
							)}
						</div>
					</motion.div>
				))}
			</div>

			{/* Footer */}
			<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				<Headline text="Repo Scan" />
				<Paragraph
					className="text-gray-400"
					text="Get a full visual breakdown of your API components and dependencies.
					Highlight outdated packages, vulnerable versions, and nested risk
					areas."
				/>
			</Stagger>
		</div>
	);
};
