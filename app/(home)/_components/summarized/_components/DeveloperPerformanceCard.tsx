export const DeveloperPerformanceCard = () => {
	return (
		<div className="bg-[#111113] border border-yellow-500/20 rounded-2xl overflow-hidden w-full max-w-md">
			{/* Top Section */}
			<div className="bg-[#1a1a1a] p-6 relative flex flex-col items-center justify-center h-48">
				{/* Profile Avatars + Stats */}
				<div className="relative flex flex-col items-center">
					<div className="flex items-center gap-2 mb-1">
						<img
							src="https://randomuser.me/api/portraits/men/75.jpg"
							alt="avatar"
							className="w-8 h-8 rounded-full border border-white"
						/>
						<span className="text-white font-semibold text-xl">+15%</span>
						<img
							src="https://randomuser.me/api/portraits/men/76.jpg"
							alt="avatar"
							className="w-8 h-8 rounded-full border border-white"
						/>
					</div>
					<p className="text-white/60 text-sm">Improvement from last month</p>
				</div>

				{/* Chart Line */}
				<div className="absolute bottom-2 w-4/5 h-16 flex items-end justify-center">
					<svg viewBox="0 0 100 30" className="w-full h-full">
						<path
							d="M0,20 C20,10 40,25 60,15 80,10 100,20 120,15"
							stroke="#00FF99"
							strokeWidth="2"
							fill="none"
							className="drop-shadow-[0_0_8px_#00FF99]"
						/>
					</svg>

					{/* Inline avatars on the curve */}
					<div className="absolute left-[10%] bottom-6">
						<img
							src="https://randomuser.me/api/portraits/men/77.jpg"
							className="w-6 h-6 rounded-full border border-white"
						/>
					</div>
					<div className="absolute left-[45%] bottom-10">
						<img
							src="https://randomuser.me/api/portraits/women/77.jpg"
							className="w-6 h-6 rounded-full border border-white"
						/>
					</div>
					<div className="absolute right-[10%] bottom-6">
						<img
							src="https://randomuser.me/api/portraits/men/78.jpg"
							className="w-6 h-6 rounded-full border border-white"
						/>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="p-6 text-white flex flex-col gap-2">
				<h3 className="text-lg font-bold">Developer Performance Insights</h3>
				<p className="text-sm text-white/70 leading-relaxed">
					Putting our customers at the heart of everything we do, we strive to
					deliver exceptional experiences.
				</p>
			</div>
		</div>
	);
};
