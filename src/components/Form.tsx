"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Form: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log(formData);

		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitted(true);
		setIsLoading(true);
		if (!isFormValid || isLoading) return;

		const isEmailValid = validateEmail(formData.email);

		setTimeout(() => {
			setIsLoading(false);
			if (isEmailValid) {
				console.log("Success");
				router.push("/success");
			} else {
				console.error("Invalid email");
			}
		}, 800);
	};

	const validateEmail = (email: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	useEffect(() => {
		const isNameValid = formData.name.trim() !== "";
		const isEmailValid = formData.email.trim() !== "";
		setIsFormValid(isNameValid && isEmailValid);
	}, [formData, isSubmitted]);

	return (
		<form
			className="flex flex-col items-center w-[30%] gap-6 mt-16"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Enter your name"
				name="name"
				id="name"
				value={formData.name}
				onChange={handleInputChange}
			/>
			<input
				type="email"
				placeholder="Enter your email"
				name="email"
				id="email"
				value={formData.email}
				onChange={handleInputChange}
			/>
			{isSubmitted && !validateEmail(formData.email) && (
				<p className="text-red-600 flex items-center mr-auto gap-4 font-medium">
					<span>
						<svg
							width="15"
							height="14"
							viewBox="0 0 15 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z"
								fill="#FF0808"
							/>
						</svg>
					</span>
					Enter a valid email address
				</p>
			)}
			<button
				className={`btn-primary w-full py-6 font-semibold ${
					isSubmitted && !validateEmail(formData.email)
						? "mt-4"
						: "mt-8"
				} ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
				disabled={!isFormValid || isLoading}
			>
				{isLoading ? "Submitting..." : "Submit"}
			</button>
		</form>
	);
};

export default Form;
