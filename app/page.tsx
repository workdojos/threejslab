import FeatureCard from "@/components/FeatureCard";
import { projects } from "./data";

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col p-8  md:p-24 max-w-7xl mx-auto">
			<h1 className="text-6xl font-medium mb-8 text-center font-headline">
				OnePlace 3D Lab
				<span className="text-orange-700 underline block">
					<a
						href={"https://github.com/SerMedvid/threejslab"}
						target="_blank"
					>
						Creator
					</a>
				</span>
			</h1>

			<h2 className="text-3xl font-bold mt-12 mb-4 ">3D Toolbox</h2>
			<ul className="justify-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
				{projects.reverse().map((project) => (
					<li
						key={project.headline}
						className="h-full"
					>
						<FeatureCard {...project} />
					</li>
				))}
			</ul>
		</main>
	);
}
