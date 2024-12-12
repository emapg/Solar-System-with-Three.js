import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import { Mesh, TextureLoader } from 'three';
import { CelestialObjectData } from '../../types/celestial';
import { useStore } from '../../store/useStore';

interface CelestialBodyProps {
  data: CelestialObjectData;
}

export function CelestialBody({ data }: CelestialBodyProps) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(data.textureUrl);
  const setSelectedObject = useStore((state) => state.setSelectedObject);
  const timeScale = useStore((state) => state.timeScale);

  useFrame((state, delta) => {
    if (meshRef.current && data.orbitRadius > 0) {
      const time = state.clock.getElapsedTime() * timeScale;
      meshRef.current.position.x = Math.cos(time * data.orbitSpeed) * data.orbitRadius * 50;
      meshRef.current.position.z = Math.sin(time * data.orbitSpeed) * data.orbitRadius * 50;
      meshRef.current.rotation.y += delta * (2 * Math.PI) / (data.rotationPeriod * 3600);
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[data.radius / 6371, 32, 32]} // Scale relative to Earth
        position={[data.orbitRadius * 50, 0, 0]}
        onClick={() => setSelectedObject(data)}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <meshStandardMaterial
          map={texture}
          emissive={data.type === 'star' ? '#ff9800' : '#000000'}
          emissiveIntensity={data.type === 'star' ? 2 : 0}
        />
      </Sphere>
      {data.moons?.map((moon) => (
        <CelestialBody key={moon.id} data={moon} />
      ))}
    </group>
  );
}