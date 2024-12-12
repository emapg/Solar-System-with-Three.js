import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { CelestialBody } from './CelestialBody';
import { solarSystemData } from '../../data/solarSystem';
import { useStore } from '../../store/useStore';

export function SolarSystem() {
  const groupRef = useRef<Group>(null);
  const timeScale = useStore((state) => state.timeScale);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05 * timeScale;
    }
  });

  return (
    <group ref={groupRef}>
      {solarSystemData.map((celestialObject) => (
        <CelestialBody
          key={celestialObject.id}
          data={celestialObject}
        />
      ))}
    </group>
  );
}