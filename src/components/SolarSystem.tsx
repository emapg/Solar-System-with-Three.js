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
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_sun.jpg"
        emissive="#ff9800"
        emissiveIntensity={2}
      />

      {/* Mercury */}
      <CelestialBody
        position={[20, 0, 0]}
        radius={1.2}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_mercury.jpg"
        orbitRadius={20}
        orbitSpeed={0.2}
      />

      {/* Venus */}
      <CelestialBody
        position={[30, 0, 0]}
        radius={3}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_venus_surface.jpg"
        orbitRadius={30}
        orbitSpeed={0.15}
      />

      {/* Earth */}
      <CelestialBody
        position={[45, 0, 0]}
        radius={3.8}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_earth_daymap.jpg"
        orbitRadius={45}
        orbitSpeed={0.1}
      />

      {/* Mars */}
      <CelestialBody
        position={[60, 0, 0]}
        radius={2}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_mars.jpg"
        orbitRadius={60}
        orbitSpeed={0.08}
      />

      {/* Jupiter */}
      <CelestialBody
        position={[90, 0, 0]}
        radius={7}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_jupiter.jpg"
        orbitRadius={90}
        orbitSpeed={0.05}
      />

      {/* Saturn */}
      <CelestialBody
        position={[120, 0, 0]}
        radius={6}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_saturn.jpg"
        orbitRadius={120}
        orbitSpeed={0.04}
      />

      {/* Uranus */}
      <CelestialBody
        position={[160, 0, 0]}
        radius={5}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_uranus.jpg"
        orbitRadius={160}
        orbitSpeed={0.03}
      />

      {/* Neptune */}
      <CelestialBody
        position={[200, 0, 0]}
        radius={5.5}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_neptune.jpg"
        orbitRadius={200}
        orbitSpeed={0.02}
      />

      {/* Pluto (Dwarf Planet) */}
      <CelestialBody
        position={[240, 0, 0]}
        radius={2.5}
        textureUrl="https://solar-system-with-three-js.pages.dev/2k_moon.jpg"
        orbitRadius={240}
        orbitSpeed={0.01}
      />
    </group>
  );
}
