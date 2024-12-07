"use client";


import Links from "./Links";
import Experience from "./Experience";

import "./layout.css";

export default function Layout() {
	return (
		<div className="bg-indigo-100 min-h-screen">
			<div className="max-w-[1200px] mx-auto px-4 py-16 relative ">
				<p className="text-right text-lg text-gray-600 font-bold uppercase">
					Leonardo AI works
				</p>

				<div className="user-select-none">
					<Links />
				</div>
			</div>


		</div>
	);
}
