"use client";
import { useState } from "react";

const AccordionItem = ({
	title,
	content,
}: {
	title: string;
	content: string;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div
			className={`${
				isOpen ? "border-none" : "border-b border-b-gray-300"
			} w-full transition ease-in-out`}
		>
			<div
				className="w-full flex items-center justify-between cursor-pointer py-6"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="text-xl font-bold mr-[14rem]">{title}</h3>
				<span className="text-3xl font-semibold">
					{isOpen ? "-" : "+"}
				</span>
			</div>
			{isOpen && (
				<div className="relative accordion-content pb-4 text-gray-500 border-b border-b-gray-300">
					<p>{content}</p>
				</div>
			)}
		</div>
	);
};

const Accordion = ({
	items,
}: {
	items: { title: string; content: string }[];
}) => {
	return (
		<div className="w-[45%] mr-24">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					content={item.content}
				/>
			))}
		</div>
	);
};

export default Accordion;
