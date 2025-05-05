export const WorkflowAutomationCard = () => {
	return (
		<div className="bg-[#111113] border border-yellow-500/20 rounded-2xl overflow-hidden w-full max-w-md">
			{/* Top Visual Section */}
			<div className="bg-[#1a1a1a] flex flex-col items-center justify-center p-6 gap-3">
				{/* Step Tag */}
				<span className="bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded-full">
					Step 1
				</span>

				{/* Trigger Box */}
				<div className="bg-white px-4 py-2 rounded shadow text-center text-sm font-medium text-black">
					<span className="text-xs text-purple-500 block font-mono">
						Trigger
					</span>
					New Repository Added
				</div>

				{/* Arrow Down */}
				<div className="w-px h-4 bg-yellow-300" />

				{/* + Condition */}
				<button className="text-yellow-900 bg-yellow-200 text-xs font-medium px-3 py-1 rounded shadow">
					+ Condition
				</button>

				{/* Arrow Down */}
				<div className="w-px h-4 bg-yellow-300" />

				{/* + Action */}
				<button className="text-green-900 bg-green-200 text-xs font-medium px-3 py-1 rounded shadow">
					+ Action
				</button>
			</div>

			{/* Text Content */}
			<div className="p-6 text-white flex flex-col gap-2">
				<h3 className="text-lg font-bold">Workflow Automation</h3>
				<p className="text-sm text-white/70 leading-relaxed">
					Auto-assign, auto-resolve, and automate triage to free your team from
					repetitive tasks.
				</p>
			</div>
		</div>
	);
};
