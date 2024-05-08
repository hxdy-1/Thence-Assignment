import Form from "@/components/Form";
import { Covered_By_Your_Grace } from "next/font/google";

const covered_by_your_grace = Covered_By_Your_Grace({
	subsets: ["latin"],
	weight: ["400"],
});

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center pt-10">
			<p
				className={`${covered_by_your_grace.className} secondary-title text-green-500 text-4xl mb-2`}
			>
				Registration Form
			</p>
			<h1 className="hero-title font-semibold text-6xl leading-[67.2px] text-center">
				Start your success <br /> Journey here!
			</h1>
			<Form />
		</main>
	);
}
