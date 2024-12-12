import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { DirectionalLight, AmbientLight } from 'three';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 50, 150], fov: 60 }}
      performance={{ min: 0.5 }}
      style={{ background: '#000' }}
    >
      {/* Add Ambient Light */}
      <ambientLight intensity={0.2} />

      {/* Add Directional Light (simulating the Sun) */}
      <DirectionalLight
        position={[100, 100, 100]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={200}
        shadow-camera-near={0.5}
      />

      {/* Add more spotlight to enhance the effect */}
      <spotLight
        position={[0, 50, 150]}
        intensity={0.5}
        angle={0.15}
        penumbra={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={200}
        shadow-camera-near={1}
      />

      {/* Add Orbit Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minDistance={5}
        maxDistance={500}
      />

      {/* Add Stars */}
      <Stars
        radius={300}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
      />

      {/* Solar System */}
      <SolarSystem />

      {/* Post-Processing Effects */}
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
