import Image from "next/image";
import React from "react";
import HeroImage from "../../public/Hero-image.png";
import AchievedReductionCard from "./AchievedReductionCard";
import StaffDeploymentCard from "./StaffDeploymentCard";
import ExpensesReductionCard from "./ExpensesReductionCard";
import Tiles from "../../public/Tiles.svg";
import RightArrow from "../../public/RightArr.svg";
import Carousel from "./Carousel";

const slides = [
	<div key={1} className="h-64">
		Enhance fortune 50 company&apos;s insights teams research capabilities
	</div>,
	<div key={2} className="h-64">
		Strengthen Fortune 50 enterprise&apos;s data analytics division&apos;s
		research acumen.
	</div>,
	<div key={3} className="h-64">
		Boost multinational conglomerate&apos;s strategic insights team
		proficiency.
	</div>,
];

const Hero = () => {
	return (
		<div className="hero-container flex justify-between gap-8 w-[80%]">
			<div className="hero-image relative">
				<Image
					className="rounded-[40px]"
					src={HeroImage}
					alt="Hero image"
				/>
				<AchievedReductionCard />
				<StaffDeploymentCard />
				<ExpensesReductionCard />
			</div>
			<div className="hero-text relative w-[35%] flex flex-col justify-around items-start">
				<Image
					className="absolute -z-10 left-[39%] top-[-12%]"
					src={Tiles}
					alt="Tiles"
				/>
				<Carousel slides={slides} />
				<button className="btn-primary btn-exp flex items-center gap-4">
					Explore More{" "}
					<span className="right-arr">
						<Image src={RightArrow} alt="Right arrow" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Hero;
