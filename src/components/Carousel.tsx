"use client";
import React, { useState, useEffect } from "react";

const Carousel: React.FC<{ slides: JSX.Element[] }> = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	const changeSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const nextSlide = () => {
		const nextIndex = (currentSlide + 1) % slides.length;
		setCurrentSlide(nextIndex);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div className="relative overflow-hidden w-full">
			<div
				className="flex transition-transform duration-300 font-semibold text-4xl leading-[48px]"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="w-full"
						style={{ flex: "0 0 auto" }}
					>
						{slide}
					</div>
				))}
			</div>
			<div className="absolute bottom-[5%] left-[-1%] flex justify-center">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`${
							index === currentSlide
								? "bg-green-500"
								: "bg-gray-200 transition-colors duration-200 ease-in-out hover:bg-[#CAD0CB]"
						} h-2.5 w-2.5 mx-2 rounded-full`}
						onClick={() => changeSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
