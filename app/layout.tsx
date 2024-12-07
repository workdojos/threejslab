import "./globals.css";
import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-headers",
});

export const metadata: Metadata = {
	title: "OnePlace 3D Lab",
	description: "3D assets for creators and web developers.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${vt323.variable}`}>{children}</body>
		</html>
	);
}
