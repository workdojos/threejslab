/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/assets/StarWarsHologram/StarWars.glb -o features/StarWarsHologram/components/Models.tsx -t -r ./assets/StarWarsHologram 
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import DeathStar from "./DeathStar";
import { HologramMaterialT } from "@/components/materials/Hologram";
import { useControls } from "leva";
import XWing from "./XWing";
import ImperialFighter from "./ImperialFighter";

type GLTFResult = GLTF & {
	nodes: {
		DeathStar: THREE.Mesh;
		ImperialFighter: THREE.Mesh;
		ImperialFighterBeam: THREE.Mesh;
		XWing: THREE.Mesh;
		XWingBeam: THREE.Mesh;
		XWingBeam001: THREE.Mesh;
		XWingBeam002: THREE.Mesh;
		XWingBeam003: THREE.Mesh;
	};
	materials: {};
};

type ContextType = Record<
	string,
	React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function StarWarsScene(props: JSX.IntrinsicElements["group"]) {
	const { nodes } = useGLTF(
		"/assets/StarWarsHologram/StarWars.glb"
	) as GLTFResult;

	const materialRef = useRef<HologramMaterialT>(null);

	const { color, beamColor1, beamColor2 } = useControls({
		color: "#64e2ff",
		beamColor1: "#29cf37",
		beamColor2: "#fc1414",
	});

	const material = useMemo(() => {
		return (
			<hologramMaterial
				ref={materialRef}
				key={Date.now()}
				transparent
				side={THREE.DoubleSide}
				depthWrite={false}
				blending={THREE.AdditiveBlending}
				uniforms={{
					time: {
						value: 0,
					},
					color: {
						value: new THREE.Color(color),
					},
				}}
			/>
		);
	}, [color]);

	const beam1Material = useMemo(() => {
		return <meshBasicMaterial color={beamColor1} />;
	}, [beamColor1]);

	const beam2Material = useMemo(() => {
		return <meshBasicMaterial color={beamColor2} />;
	}, [beamColor2]);

	useFrame((state) => {
		const { elapsedTime } = state.clock;

		if (materialRef.current) {
			materialRef.current.time = elapsedTime;
		}
	});

	return (
		<group
			{...props}
			dispose={null}
		>
			<DeathStar
				nodes={nodes}
				material={material}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [5, 7, 3],
				}}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [-5, -7, 3],
				}}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [-55, -55, 0],
					rotation: [0, Math.PI / 4, 0],
				}}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [30, -55, 25],
					rotation: [0, Math.PI / 8, 0],
				}}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [32, -52, 30],
					rotation: [0, Math.PI / 2, 0],
				}}
			/>

			<ImperialFighter
				nodes={nodes}
				material={material}
				beamMaterial={beam2Material}
				knot={{
					position: [20, -48, 35],
					rotation: [Math.PI / 2, Math.PI / 4, 0],
				}}
			/>

			<XWing
				key={0}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [10, 15, 0],
				}}
			/>
			<XWing
				key={1}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [0, 0, 0],
				}}
			/>

			<XWing
				key={2}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [-50, -50, 0],
					rotation: [0, Math.PI / 2, 0],
				}}
			/>

			<XWing
				key={3}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [-45, -45, 0],
					rotation: [0, Math.PI / 2, 0],
				}}
			/>

			<XWing
				key={4}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [30, -50, 30],
					rotation: [0, Math.PI / 4, 0],
				}}
			/>

			<XWing
				key={4}
				nodes={nodes}
				material={material}
				beamMaterial={beam1Material}
				knot={{
					position: [20, -45, 40],
					rotation: [0, Math.PI / 5, 0],
				}}
			/>
		</group>
	);
}

useGLTF.preload("/assets/StarWarsHologram/StarWars.glb");
