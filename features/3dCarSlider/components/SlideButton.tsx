"use client";

import useStore from "../store/useStore";

type Props = {
	isNext?: boolean;
};

export default function SlideButton({ isNext = false }: Props) {
	const { setCurrentSlide } = useStore();

	return (
		<button
			title={isNext ? "Next" : "Previous"}
			className={`top-1/2 bg-red w-24 absolute pointer-events-auto fill-white duration-200 opacity-30 hover:scale-110  hover:opacity-100 ${
				isNext ? "rotate-180 right-8" : "left-8"
			}`}
			onClick={() => setCurrentSlide(isNext ? 1 : -1)}
		>
			<svg
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm212.65-91.36a16,16,0,0,1,.09,22.63L208.42,240H342a16,16,0,0,1,0,32H208.42l52.32,52.73A16,16,0,1,1,238,347.27l-79.39-80a16,16,0,0,1,0-22.54l79.39-80A16,16,0,0,1,260.65,164.64Z" />
			</svg>
		</button>
	);
}
