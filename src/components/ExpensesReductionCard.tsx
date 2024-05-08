import React from "react";

const ExpensesReductionCard = () => {
	return (
		<div className="absolute w-[50%] top-[70%] left-[70%] test rounded-2xl text-gray-300 bg-green-950 p-6 flex flex-col justify-start gap-4">
			<h2 className="text-white font-semibold text-6xl">
				$0.5 <span className="text-gray-300 text-sm">MILLION</span>
			</h2>
			<p>
				Reduced client expenses by saving on hiring and employee costs.
			</p>
		</div>
	);
};

export default ExpensesReductionCard;
