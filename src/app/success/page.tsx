import Image from "next/image";
import React from "react";
import Check from "../../../public/Check-green.svg";
import { Covered_By_Your_Grace } from "next/font/google";
import Redirect from "@/components/Redirect";

const covered_by_your_grace = Covered_By_Your_Grace({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div className="w-1/2 mt-20 flex flex-col items-center gap-6 mx-auto relative">
			<Image
				className="success-check"
				src={Check}
				alt="Successfully registered"
			/>
			<p
				className={`${covered_by_your_grace.className} secondary-title text-green-500 text-4xl mt-8`}
			>
				Successfully Submitted
			</p>
			<h1 className="hero-title text-6xl font-semibold">
				Congratulations
			</h1>
			<p className="text-[#727272] font-medium text-center text-xl">
				Your request has been successfully submitted to us. We will
				validate your information and reach out to your shortly with
				updates
			</p>
			<Redirect />
		</div>
	);
};

export default page;
