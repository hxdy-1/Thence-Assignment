import Image from "next/image";
import React from "react";
import CloseImg from "../../public/Close.svg";
import { useRouter } from "next/navigation";

const Close = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/")}
			className="w-16 h-16 rounded-full border border-gray-300 flex justify-center items-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#F1F1F1]"
		>
			<Image src={CloseImg} alt="close registration" />
		</div>
	);
};

export default Close;
