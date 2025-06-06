import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingTetrahedron: React.FC = () => {
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} position={[0, -1, 0]} scale={[2, 2, 2]}>
      <tetrahedronGeometry args={[1.5]} />
      <meshBasicMaterial color="#e9ff47" wireframe />
    </mesh>
  );
};

const FloatingObjects: React.FC = () => {
  return (
    <Canvas className="floatingCanvas" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[-2.5, 1, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial color="#e9ff47" wireframe />
        </mesh>
      </Float>
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[2.5, -0.5, 0]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="#e9ff47" wireframe />
        </mesh>
      </Float>
      <RotatingTetrahedron />
    </Canvas>
  );
};

export default FloatingObjects;
