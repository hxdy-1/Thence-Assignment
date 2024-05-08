import Image from "next/image";
import React from "react";
import Sparkle from "../../public/Sparkle.svg";

const AchievedReductionCard = () => {
	return (
		<div className="absolute flex flex-col justify-start gap-4 top-[20%] left-[-25%] w-[48%] bg-white p-8 rounded-2xl shadow-xl">
			<h2 className="relative text-6xl font-semibold mt-4">
				40%
				<Image
					className="absolute top-[-100%] left-[-26%]"
					src={Sparkle}
					alt="Sparkle"
				/>
			</h2>
			<p className="text-gray-400">
				Achieved reduction in project execution time by optimising team
				availability
			</p>
		</div>
	);
};

export default AchievedReductionCard;
