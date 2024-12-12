import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 50, 150], fov: 60 }}
      performance={{ min: 0.5 }}
      style={{ background: '#000' }}
    >
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minDistance={5}
        maxDistance={500}
      />
      <Stars
        radius={300}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
      />
      <SolarSystem />
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </Canvas>
  );
}
