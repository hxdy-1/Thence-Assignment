import Image from "next/image";
import React from "react";
import Rocket_Image from "../../public/Rocket.svg";

const StaffDeploymentCard = () => {
	return (
		<div className="absolute top-[75%] left-[-12%] w-[47%] rounded-full shadow-xl bg-white flex justify-between items-center gap-1 px-6 py-4">
			<div className="rocket-container bg-gray-200 rounded-full w-[3rem] h-[3rem] flex justify-center items-center">
				<Image src={Rocket_Image} alt="Rocket" />
			</div>
			<div>
				<h4 className="text-2xl font-bold">10 DAYS</h4>
				<p className="text-gray-400">Staff Deployment</p>
			</div>
		</div>
	);
};

export default StaffDeploymentCard;
