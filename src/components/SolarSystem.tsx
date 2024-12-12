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

      {/* Mercury */}
      <CelestialBody
        position={[20, 0, 0]}
        radius={1.2}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/a/a0/Mercury_in_true_color.jpg"
        orbitRadius={20}
        orbitSpeed={0.2}
      />

      {/* Venus */}
      <CelestialBody
        position={[30, 0, 0]}
        radius={3}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/4/4a/Venus_%28planet%29.jpg"
        orbitRadius={30}
        orbitSpeed={0.15}
      />

      {/* Earth */}
      <CelestialBody
        position={[45, 0, 0]}
        radius={3.8}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Earth_from_Space.jpg"
        orbitRadius={45}
        orbitSpeed={0.1}
      />

      {/* Mars */}
      <CelestialBody
        position={[60, 0, 0]}
        radius={2}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/e/e5/Mars_2020_logo.png"
        orbitRadius={60}
        orbitSpeed={0.08}
      />

      {/* Jupiter */}
      <CelestialBody
        position={[90, 0, 0]}
        radius={7}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_Amalthea_Laplace.jpg"
        orbitRadius={90}
        orbitSpeed={0.05}
      />

      {/* Saturn */}
      <CelestialBody
        position={[120, 0, 0]}
        radius={6}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/Saturn_during_Equinox.jpg"
        orbitRadius={120}
        orbitSpeed={0.04}
      />

      {/* Uranus */}
      <CelestialBody
        position={[160, 0, 0]}
        radius={5}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/8/8c/Uranus_-_NASA.png"
        orbitRadius={160}
        orbitSpeed={0.03}
      />

      {/* Neptune */}
      <CelestialBody
        position={[200, 0, 0]}
        radius={5.5}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/5/5f/Neptune_Full.png"
        orbitRadius={200}
        orbitSpeed={0.02}
      />

      {/* Pluto (Dwarf Planet) */}
      <CelestialBody
        position={[240, 0, 0]}
        radius={2.5}
        textureUrl="https://upload.wikimedia.org/wikipedia/commons/d/d9/Pluto_in_true_color.jpg"
        orbitRadius={240}
        orbitSpeed={0.01}
      />
    </group>
  );
}
