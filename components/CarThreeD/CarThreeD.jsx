"use client";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ModelX = () => {
  const gltf = useLoader(GLTFLoader, "./car/scene.gltf");
  return (
    <>
      <primitive
        position={[0, -3.3, 0]}
        rotation={[6.3, -0.1, 0]}
        object={gltf.scene}
        scale={0.4}
      />
    </>
  );
};

const CarCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [-20, 50, -120],
        fov: 3,
        background: 0xffffff,
      }}
    >
      <directionalLight intensity={13} position={[0, 10, 0]} color={"white"} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <hemisphereLight intensity={1} />

      <Suspense fallback={null}>
        <ModelX />
      </Suspense>
    </Canvas>
  );
};

export default CarCanvas;
