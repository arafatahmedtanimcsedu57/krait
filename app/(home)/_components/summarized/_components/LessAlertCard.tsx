export const LessAlertsCard = () => {
	return (
		<div className="bg-[#111113] border border-yellow-500/20 rounded-2xl overflow-hidden w-full max-w-md">
			{/* Top Section */}
			<div className="bg-[#1a1a1a] p-6 flex items-center justify-between">
				{/* Left: Alert Tags */}
				<div className="flex flex-col gap-2">
					<span className="flex items-center gap-2 text-xs font-medium text-white bg-red-200/70 text-red-900 rounded px-2 py-1">
						<span className="w-2 h-2 rounded-full bg-red-500" />
						Critical
					</span>
					<span className="flex items-center gap-2 text-xs font-medium text-white bg-orange-200/70 text-orange-900 rounded px-2 py-1">
						<span className="w-2 h-2 rounded-full bg-orange-500" />
						Major
					</span>
					<span className="flex items-center gap-2 text-xs font-medium text-white bg-yellow-200/70 text-yellow-800 rounded px-2 py-1">
						<span className="w-2 h-2 rounded-full bg-yellow-500" />
						Minor (20)
					</span>
					<span className="flex items-center gap-2 text-xs font-medium text-white bg-green-200/70 text-green-800 rounded px-2 py-1">
						<span className="w-2 h-2 rounded-full bg-green-500" />
						Low
					</span>
				</div>

				{/* Right: CVSS Stack */}
				<div className="flex flex-col items-center">
					<div className="w-14 h-20 rounded overflow-hidden shadow-inner">
						<div className="h-1/4 bg-red-300" />
						<div className="h-1/4 bg-orange-300" />
						<div className="h-1/4 bg-yellow-300" />
						<div className="h-1/4 bg-purple-300" />
					</div>
					<p className="text-xs text-white/70 mt-2">CVSS Score</p>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="p-6 text-white flex flex-col gap-2">
				<h3 className="text-lg font-bold">Less alerts, more signal</h3>
				<p className="text-sm text-white/70 leading-relaxed">
					Auto-assign, auto-resolve, and automate triage to free your team from
					repetitive tasks.
				</p>
			</div>
		</div>
	);
};
