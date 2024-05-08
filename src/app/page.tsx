import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import QnA from "@/components/QnA";
import { Covered_By_Your_Grace } from "next/font/google";

const covered_by_your_grace = Covered_By_Your_Grace({
	subsets: ["latin"],
	weight: ["400"],
});

export default function Home() {
	return (
		<main className="py-16 pb-8 flex justify-center items-center flex-col gap-32">
			<div className="w-1/2">
				<p
					className={`${covered_by_your_grace.className} secondary-title text-3xl text-green-500 text-center mb-2`}
				>
					Success stories
				</p>
				<h1 className="hero-title text-6xl text-center font-semibold tracking-[-2%] leading-[67.2px]">
					Every success journey we’ve encountered.
				</h1>
			</div>
			<Hero />
			<div className="flex flex-col gap-12">
				<QnA />
				<Footer />
			</div>
		</main>
	);
}
