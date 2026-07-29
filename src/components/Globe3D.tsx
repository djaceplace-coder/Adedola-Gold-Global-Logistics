import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function RotatingGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={sphereRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial 
          color="#d97706" 
          wireframe={true} 
          transparent={true} 
          opacity={0.3} 
        />
      </Sphere>
      <Sphere args={[2.4, 64, 64]}>
        <meshStandardMaterial 
          color="#fef3c7" 
          roughness={0.4} 
          metalness={0.1}
        />
      </Sphere>
      {/* Route lines representation (Stylized arcs) */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 100, Math.PI]} />
        <meshBasicMaterial color="#b45309" />
      </mesh>
      <mesh rotation={[-0.5, 1, 0]}>
        <torusGeometry args={[2.7, 0.015, 16, 100, Math.PI * 1.5]} />
        <meshBasicMaterial color="#d97706" />
      </mesh>
    </group>
  );
}

export default function Globe3D({ className }: { className?: string }) {
  return (
    <div className={className || "absolute inset-0 w-full h-full"}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fef3c7" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
        <Environment preset="city" />
        <RotatingGlobe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
