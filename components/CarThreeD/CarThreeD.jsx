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
  const [positionX] = useState(0.002);

  const reachedPositionX = useRef(false);

  useFrame(() => {
    if (!reachedPositionX.current) {
      modelRef.current.scale.x += positionX;
      modelRef.current.scale.y += positionX;
      modelRef.current.scale.z += positionX;
      if (modelRef.current.scale.x >= 0.4) {
        reachedPositionX.current = true;
      }
    } else {
      modelRef.current.rotation.y -= rotationSpeed;
    }
  });

  return (
    <>
      <primitive
        ref={modelRef}
        position={[0.1, -2, 0]}
        rotation={[6.28, 0.15, 0]}
        object={gltf.scene}
        scale={0.1}
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
      <directionalLight intensity={1} position={[0, 10, 0]} color={"white"} />
      <directionalLight intensity={1} position={[1, 50, 50]} color={"white"} />
      <directionalLight intensity={1} position={[-20, 0, 10]} color={"white"} />
      <directionalLight intensity={1} position={[0, 0, -90]} color={"white"} />
      <directionalLight intensity={1} position={[101, 10, 0]} color={"white"} />
      <directionalLight
        intensity={1}
        position={[-70, 20, 30]}
        color={"white"}
      />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <ModelX />
      </Suspense>
    </Canvas>
  );
};

export default CarCanvas;
