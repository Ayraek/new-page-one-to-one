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
    <mesh ref={ref} position={[0, -1, 0]}>
      <tetrahedronGeometry args={[0.8]} />
      <meshStandardMaterial color="#ff8c00" />
    </mesh>
  );
};

const FloatingObjects: React.FC = () => {
  return (
    <Canvas className="floatingCanvas" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[-1.5, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#e9ff47" />
        </mesh>
      </Float>
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[1.5, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#e9ff47" />
        </mesh>
      </Float>
      <RotatingTetrahedron />
    </Canvas>
  );
};

export default FloatingObjects;
