"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Redirect = () => {
	const router = useRouter();
	const [countdown, setCountdown] = useState(5);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCount) => prevCount - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (countdown === 0) {
			router.push("/");
		}
	}, [countdown, router]);

	return (
		<p className="absolute bottom-[-55%] text-[#727272]">
			Redirecting you to Homepage in{" "}
			<span className="text-black font-medium">{countdown} Seconds</span>
		</p>
	);
};

export default Redirect;
