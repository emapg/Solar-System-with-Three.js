import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh, TextureLoader } from 'three';

interface CelestialBodyProps {
  position: [number, number, number];
  radius: number;
  textureUrl: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  emissive?: string;
  emissiveIntensity?: number;
}

export function CelestialBody({
  position,
  radius,
  textureUrl,
  orbitRadius = 0,
  orbitSpeed = 0,
  emissive = '#000000',
  emissiveIntensity = 0,
}: CelestialBodyProps) {
  const meshRef = useRef<Mesh>(null);
  const texture = new TextureLoader().load(textureUrl);

  useFrame((state, delta) => {
    if (meshRef.current && orbitRadius > 0) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
      meshRef.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[radius, 32, 32]} position={position}>
      <meshStandardMaterial
        map={texture}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </Sphere>
  );
}