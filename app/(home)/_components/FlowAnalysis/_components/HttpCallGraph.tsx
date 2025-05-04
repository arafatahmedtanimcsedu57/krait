'use client';
import Stagger from '@/components/motion/Stagger';
import Headline from '@/components/shared/special-text/Headline';
import Paragraph from '@/components/shared/special-text/Paragraph';
import { SPACE_STYLE } from '@/constant/space-style';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const HttpCallGraph = () => {
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
			{/* Graph Section */}
			<div className="bg-slate-500/10 lg:rounded-2xl rounded-xl">
				<div className="relative bg-[radial-gradient(circle,rgba(255,255,255,.4)_1px,transparent_1px)] bg-[length:20px_20px] rounded-xl p-6">
					{/* Dotted vertical line */}
					<div className="absolute left-1/2 top-[20px] bottom-[20px] w-[2px] bg-dashed bg-slate-300 z-[0]" />

					{/* Nodes */}
					<div className="relative z-10 space-y-8 flex flex-col items-center">
						{/* Node 1 */}
						<div className="border-2 border-slate-400 rounded-xl px-4 py-2 bg-white w-fit">
							<div className="text-orange-500 text-xs font-medium mb-1 bg-orange-100 w-fit rounded-full px-4">
								Module ...
							</div>
							<div className="text-xs font-medium text-gray-700">
								repos/polar/server/polar/exceptions.py
							</div>
						</div>

						{/* Node 2 */}
						<div className="border-2 border-slate-400 rounded-xl px-4 py-2 bg-white w-fit">
							<div className="text-xs font-medium text-gray-700">
								function_definition
							</div>
							<div className="text-orange-500 text-xs font-medium mb-1 bg-orange-100 w-fit rounded-full px-4">
								Module ...
							</div>
						</div>

						{/* Node 3 */}
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.1 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							}}
							className="border-2 border-red-600 rounded-xl px-4 py-2 bg-red-200 w-fit"
						>
							<div className="text-xs font-medium text-gray-700">
								Http Status Code
							</div>
							<div className="text-xs font-medium text-gray-700">
								Status 401
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			{/* Description */}
			<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				<Headline text="Call Graph for HTTP Lifecycle" />
				<Paragraph
					className="text-sm text-gray-400"
					text="Issues are auto-flagged and color-coded right on the graph. Understand
					context instantly— no more scanning logs or clicking blindly."
				/>
			</Stagger>
		</div>
	);
};
