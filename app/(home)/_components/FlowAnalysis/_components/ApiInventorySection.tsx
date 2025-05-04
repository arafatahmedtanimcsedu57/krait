'use client';

import Stagger from '@/components/motion/Stagger';
import Headline from '@/components/shared/special-text/Headline';
import Paragraph from '@/components/shared/special-text/Paragraph';
import { SPACE_STYLE } from '@/constant/space-style';
import { cn } from '@/lib/utils';

const apiData = [
	{
		method: 'Post',
		path: '_API / Details / {id}',
		highlight: [],
		description: 'Create',
		color: 'bg-orange-400 text-white',
		bg: 'bg-white',
	},
	{
		method: 'Delete',
		path: '_API / Details / {id}',
		highlight: [],
		description: 'Remove',
		color: 'bg-yellow-400 text-black',
		bg: 'bg-slate-200',
	},
	{
		method: 'Get',
		path: '_API / Details / {id}',
		highlight: [],
		description: 'Fetch',
		color: 'bg-green-400 text-black',
		bg: 'bg-slate-300',
	},
	{
		method: 'Post',
		path: '_API / Details / {id}',
		highlight: '{id}',
		description: 'Create',
		color: 'bg-orange-400 text-white',
		bg: 'bg-slate-600',
	},
	{
		method: 'Post',
		path: '_API / Details / {id}',
		highlight: '{id}',
		description: 'Create',
		color: 'bg-orange-400 text-white',
		bg: 'bg-slate-800',
	},
];

export const ApiInventorySection = () => {
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
			{/* Header */}
			<Stagger className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				<Headline text="API Inventory Generation" />
				<Paragraph
					text="Get a full visual breakdown of your API components and dependencies.
					Highlight outdated packages, vulnerable versions, and nested risk
					areas."
				/>
			</Stagger>

			{/* API List */}
			<div className={cn('flex flex-col', SPACE_STYLE.GAP.SMALL)}>
				{apiData.map((item, index) => (
					<div
						key={index}
						className={`rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 ${item.bg}`}
					>
						<div className="flex flex-wrap gap-4">
							<span
								className={`text-xs font-semibold px-4 py-1 rounded-full w-[72px] text-center ${item.color}`}
							>
								{item.method}
							</span>

							<span className="text-sm whitespace-nowrap text-white/90">
								{item.path.split(' ').map((seg, i) => {
									const highlight = Array.isArray(item.highlight)
										? item.highlight
										: [item.highlight];

									const isBold = highlight.includes(seg);
									return (
										<span
											key={i}
											className={
												isBold ? 'font-semibold text-white' : 'text-gray-400'
											}
										>
											{seg + ' '}
										</span>
									);
								})}
							</span>
						</div>

						<span className="text-xs text-gray-500">{item.description}</span>
					</div>
				))}
			</div>
		</div>
	);
};
