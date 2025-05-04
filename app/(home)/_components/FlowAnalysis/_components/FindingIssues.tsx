'use client';

import Stagger from '@/components/motion/Stagger';
import Headline from '@/components/shared/special-text/Headline';
import Paragraph from '@/components/shared/special-text/Paragraph';
import { SPACE_STYLE } from '@/constant/space-style';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export const FindingIssues = () => {
	return (
		<div
			className={cn(
				'bg-black/30 h-full',
				'text-white',
				'flex flex-col justify-center lg:rounded-3xl rounded-xl',

				SPACE_STYLE.PADDING.MID.HORIZONTAL,
				SPACE_STYLE.PADDING.MID.VERTICAL,
				SPACE_STYLE.GAP.MID,
			)}
		>
			{' '}
			{/* Header */}
			<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				<Headline text="Finding Issues" />
				<Paragraph
					className="text-gray-400 text-sm md:text-base max-w-lg"
					text="Get a full visual breakdown of your API components and dependencies.
					Highlight outdated packages, vulnerable versions, and nested risk
					areas."
				/>
			</Stagger>
			{/* API Error Modal Style Box */}
			<div className="rounded-2xl bg-slate-800/50 p-6 md:p-8 space-y-4">
				{/* Header */}
				<div className="flex items-center gap-2 text-white/80">
					<span className="text-sm font-medium">API Map</span>
				</div>

				{/* Title */}
				<h3 className="text-lg md:text-xl font-semibold text-white">
					API Error Details
				</h3>

				{/* Instruction */}
				<p className="text-green-500 text-xs font-medium">
					Clicking on an error node (e.g., HTTP 401) should open this modal.
				</p>

				{/* Details Grid */}
				<div className="text-sm space-y-2 text-white/90">
					<p>
						<span className="font-semibold text-white">Error ID :</span>{' '}
						<motion.span
							className="text-red-500 inline-block"
							initial={{ scale: 1 }}
							animate={{ scale: 1.1 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							}}
						>
							ERR-401-REQ-0021
						</motion.span>
					</p>
					<p>
						<span className="font-semibold text-white">Endpoint :</span> GET
						/api/albums
					</p>
					<p>
						<span className="font-semibold text-white">GET /api/albums:</span>{' '}
						<span className="text-white/80">401 Unauthorized</span>
					</p>
					<p>
						<span className="font-semibold text-white">Error Message :</span>{' '}
						<span className="text-white/80">
							Authentication credentials are missing or invalid.
						</span>
					</p>
					<p>
						<span className="font-semibold text-white">Affected Module :</span>{' '}
						<span className="text-white/80">
							repos/polar/server/polar/exceptions.py
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
