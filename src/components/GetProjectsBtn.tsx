import { useRouter } from "next/navigation";
import React from "react";

const GetProjectsBtn = () => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push("/register")}
			className="btn-secondary"
		>
			Get Projects
		</button>
	);
};

export default GetProjectsBtn;
