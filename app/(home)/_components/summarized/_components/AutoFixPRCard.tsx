export const AutoFixPRCard = () => {
	return (
		<div className="bg-[#111113] border border-yellow-500/20 rounded-2xl overflow-hidden w-full max-w-md">
			{/* Top Section */}
			<div className="bg-[#1a1a1a] relative flex items-center justify-center p-6 h-40">
				{/* Mocked Code Preview */}
				<div className="w-40 h-24 bg-zinc-700 rounded-md opacity-60 relative" />

				{/* High Confidence Badge */}
				<span className="absolute bottom-4 left-6 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium shadow">
					High Confidence
				</span>

				{/* Create PR Badge */}
				<span className="absolute top-3 right-4 bg-yellow-300 text-yellow-900 text-xs font-medium px-3 py-1 rounded shadow border border-yellow-500">
					✂ Create PR
				</span>
			</div>

			{/* Bottom Section */}
			<div className="p-6 text-white flex flex-col gap-2">
				<h3 className="text-lg font-bold">AutoFix PRs</h3>
				<p className="text-sm text-white/70 leading-relaxed">
					Putting our customers at the heart of everything we do, we strive to
					deliver exceptional experiences.
				</p>
			</div>
		</div>
	);
};
