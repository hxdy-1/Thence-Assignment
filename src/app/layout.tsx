import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Brunel | Thence Assignment",
	description: "An assignment from Thence done by Abdul Haadi",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={manrope.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
