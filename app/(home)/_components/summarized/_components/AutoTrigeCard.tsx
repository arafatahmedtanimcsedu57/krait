import { Card } from '@/components/ui/card';

export const AutoTriageCard = () => {
	return (
		<Card className="flex flex-col lg:flex-row items-center justify-between bg-[#0F0F10] border border-yellow-500/20 rounded-2xl overflow-hidden p-6 lg:p-10 gap-8 text-white">
			{/* Left: Charts */}
			<div className="flex flex-col items-center gap-4 bg-black rounded-xl p-6 w-full lg:w-1/2">
				<div className="flex flex-row justify-center gap-8 w-full">
					{/* Block 1 */}
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-xl font-bold">590</h3>
						<p className="text-sm text-muted-foreground">Total Issues</p>
						<div className="w-20 h-16 rounded overflow-hidden bg-gradient-to-b from-red-300 via-yellow-300 to-green-300" />
					</div>
					{/* Block 2 */}
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-xl font-bold">590</h3>
						<p className="text-sm text-muted-foreground text-center">
							Krait Prioritize
						</p>
						<div className="w-20 h-16 rounded overflow-hidden bg-gradient-to-b from-red-300 via-yellow-300 to-green-300" />
					</div>
				</div>
			</div>

			{/* Right: Text */}
			<div className="flex flex-col justify-center items-start w-full lg:w-1/2 text-left">
				<h2 className="text-xl md:text-2xl font-semibold mb-2">
					Auto-Triage, Smartly prioritized
				</h2>
				<p className="text-sm md:text-base text-muted-foreground">
					Putting our customers at the heart of everything we do, we strive to
					deliver exceptional experiences.
				</p>
			</div>
		</Card>
	);
};
