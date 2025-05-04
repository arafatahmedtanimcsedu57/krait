import { fadeInUp } from '@/components/motion/reveal-on-hover';
import Stagger from '@/components/motion/Stagger';
import Paragraph from '@/components/shared/special-text/Paragraph';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SPACE_STYLE } from '@/constant/space-style';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardItemProps {
	index: number;
	card: {
		title: string;
		description: string;
		alternatives?: Array<{
			logo: string;
			alt: string;
			name: string;
		}>;
	};
}

export const CardItem = ({ index, card }: CardItemProps) => {
	return (
		<Card
			key={index}
			className="border-0 bg-slate-700/30 text-foreground mx-auto w-full lg:rounded-3xl rounded-xl max-w-[450px]"
		>
			<CardHeader>
				<CardTitle
					className={cn(
						'font-semibold text-white text-start line-clamp-1',
						SPACE_STYLE.MARGIN.SMALL.BOTTOM,
					)}
				>
					{card.title}
				</CardTitle>
				<CardDescription className="text-start line-clamp-2">
					{card.description}
				</CardDescription>
			</CardHeader>

			<Separator className="mb-6 h-[1px] bg-gradient-to-tl from-black via-yellow-500 to-black" />

			<CardFooter>
				<Stagger className="flex flex-wrap items-center gap-4">
					{card?.alternatives?.length ? (
						<Paragraph className="text-yellow-500" text="Alternative of" />
					) : null}
					<motion.div
						variants={fadeInUp}
						className={cn('flex flex-wrap items-center', SPACE_STYLE.GAP.SMALL)}
					>
						{card?.alternatives?.map((alt, altIndex) => (
							<div
								key={altIndex}
								className={cn(
									'rounded-full flex items-center bg-slate-400/30',
									'ps-1',
									'pe-4',
									'py-1',
									SPACE_STYLE.GAP.SMALL,
								)}
							>
								<img
									src={alt.logo}
									alt={alt.alt}
									className="object-scale-down w-6 h-6 rounded-full"
								/>
								<p>{alt.name}</p>
							</div>
						))}
					</motion.div>
				</Stagger>
			</CardFooter>
		</Card>
	);
};
