import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-[#F5F5F5] rounded-[40px] flex justify-between items-center px-8 py-12 font-medium">
			<p>&#169; Talup 2023. All rights reserved</p>
			<p className="flex gap-10 underline font-normal">
				<a href="#">Terms & Conditions</a>
				<a href="#">Privacy Policy</a>
			</p>
		</footer>
	);
};

export default Footer;
