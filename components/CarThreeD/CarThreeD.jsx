"use client";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

const ModelX = () => {
  const gltf = useLoader(GLTFLoader, "./car/scene.gltf");
  const modelRef = useRef();
  const [rotationSpeed] = useState(0.005);

  useFrame(() => {
    modelRef.current.rotation.y -= rotationSpeed;
  });

  return (
    <>
      <primitive
        ref={modelRef}
        position={[0.5, -2, 0]}
        rotation={[6.28, -0.2, 0]}
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
