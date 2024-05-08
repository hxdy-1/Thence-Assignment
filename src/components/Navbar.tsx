"use client";

import Image from "next/image";
import React from "react";
import GetProjectsBtn from "./GetProjectsBtn";
import Brunel from "../../public/Brunel-logo.svg";
import { usePathname } from "next/navigation";
import Close from "./Close";

const Navbar = () => {
	const pathName = usePathname();
	return (
		<nav
			className={`w-full rounded-full border border-gray-200 p-4 flex justify-between ${
				pathName === "/register" || pathName === "/success"
					? "border-none pt-0"
					: ""
			} ${pathName === "/success" ? "pt-4" : ""}`}
		>
			<Image className="ml-6" src={Brunel} alt="Brunel logo" />
			{pathName === "/" && (
				<div className="flex gap-4">
					<GetProjectsBtn />
					<button className="btn-primary">Onboard Talent</button>
				</div>
			)}
			{pathName === "/register" && <Close />}
		</nav>
	);
};

export default Navbar;
