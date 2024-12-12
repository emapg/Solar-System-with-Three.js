import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import { CelestialBody } from './CelestialBody';
import { Group } from 'three';

export function SolarSystem() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Toroidal Structure */}
      <Torus args={[100, 2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#1a237e" opacity={0.1} transparent />
      </Torus>

      {/* Sun */}
      <CelestialBody
        position={[0, 0, 0]}
        radius={10}
        textureUrl="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&q=80"
        emissive="#ff9800"
        emissiveIntensity={2}
      />

      {/* Planets */}
      <CelestialBody
        position={[20, 0, 0]}
        radius={3.8}
        textureUrl="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&q=80"
        orbitRadius={20}
        orbitSpeed={0.5}
      />
      
      {/* Add more planets... */}
    </group>
  );
}