import { SectionTitle } from '@/components/shared/special-text/SectionTitle';

import { CardItem } from './components/CardItem';

import { cardData } from './constants';
import Link from 'next/link';

export const Section10Articles = () => {
	return (
		<section className="flex flex-col w-full max-w-screen-xl gap-8 mx-auto text-white">
			<div>
				<SectionTitle title="Latest Articles & Industry Insights" />
			</div>

			<div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
				{cardData.map((card) => (
					<Link key={card.id} href={`/blogs/${card.slug}`} className="block">
						<div key={card.id}>
							<CardItem data={card} />
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};
