import { FC, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingTetrahedron: FC = () => {
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} position={[0, -1, 0]} scale={[3, 3, 3]}>
      <tetrahedronGeometry args={[2]} />
      <meshBasicMaterial color="#6c5ce7" wireframe />
    </mesh>
  );
};

const FloatingObjects: FC = () => {
  return (
    <Canvas className="floatingCanvas" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[-3.5, 1.5, 0]}>
          <boxGeometry args={[5, 5, 5]} />
          <meshBasicMaterial color="#6c5ce7" wireframe />
        </mesh>
      </Float>
      <Float floatIntensity={2} rotationIntensity={1}>
        <mesh position={[3.5, -1, 0]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshBasicMaterial color="#6c5ce7" wireframe />
        </mesh>
      </Float>
      <RotatingTetrahedron />
    </Canvas>
  );
};

export default FloatingObjects;
