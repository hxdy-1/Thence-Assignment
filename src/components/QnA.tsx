import Image from "next/image";
import React from "react";
import Union from "../../public/Union.svg";
import { Covered_By_Your_Grace } from "next/font/google";
import Accordion from "./Accordion";

const covered_by_your_grace = Covered_By_Your_Grace({
	subsets: ["latin"],
	weight: ["400"],
});

interface Items {
	title: string;
	content: string;
}

const items: Items[] = [
	{
		title: "Do you offer freelancers?",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit molestiae! Eveniet temporibus dolorem quidem veniam suscipit odio, iusto mollitia officia, hic fuga commodi assumenda ea aliquid? Molestias, totam quo.",
	},
	{
		title: "What’s the guarantee that I will be satisfied with the hired talent?",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit molestiae! Eveniet temporibus dolorem quidem veniam suscipit odio, iusto mollitia officia, hic fuga commodi assumenda ea aliquid? Molestias, totam quo.",
	},
	{
		title: "Can I hire multiple talents at once?",
		content:
			"If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
	},
	{
		title: "Why should I not go to an agency directly?",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit molestiae! Eveniet temporibus dolorem quidem veniam suscipit odio, iusto mollitia officia, hic fuga commodi assumenda ea aliquid? Molestias, totam quo.",
	},
	{
		title: "Who can help me pick a right skill-set and duration for me?",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit molestiae! Eveniet temporibus dolorem quidem veniam suscipit odio, iusto mollitia officia, hic fuga commodi assumenda ea aliquid? Molestias, totam quo.",
	},
];

const QnA = () => {
	return (
		<div className="bg-[#E8EEE7] w-full rounded-[40px] flex items-center justify-between">
			<div className="ask">
				<div className=" p-20">
					<p
						className={`${covered_by_your_grace.className} text-3xl mb-4 text-gray-400`}
					>
						What’s on your mind
					</p>
					<h3 className="font-semibold text-6xl">Ask Questions</h3>
				</div>
				<Image src={Union} alt="Union arrow" />
			</div>
			<Accordion items={items} />
		</div>
	);
};

export default QnA;
