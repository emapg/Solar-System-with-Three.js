import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing';
import { DirectionalLight, AmbientLight, PointLight, SpotLight } from 'three';

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 50, 150], fov: 60 }}
      performance={{ min: 0.5 }}
      style={{ background: '#000' }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.2} />

      {/* Directional Light (Simulating the Sun) */}
      <DirectionalLight
        position={[100, 100, 100]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={200}
        shadow-camera-near={0.5}
      />

      {/* Point Lights for more complex lighting */}
      <PointLight
        position={[0, 50, 0]}
        intensity={0.3}
        color="#ffffff"
        distance={500}
        decay={2}
        castShadow
      />
      
      {/* Spotlights */}
      <SpotLight
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

      {/* Environment lighting with HDRI texture */}
      <Environment
        files="https://cdn.jsdelivr.net/gh/niess/threejs-assets/environment/hdri/space.hdr"
        background={true}
      />

      {/* Orbit Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minDistance={5}
        maxDistance={500}
      />

      {/* Stars */}
      <Stars
        radius={300}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
      />

      {/* Solar System */}
      <SolarSystem />

      {/* Post-processing Effects */}
      <EffectComposer>
        {/* Bloom to simulate bright light effects */}
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />

        {/* Depth of Field for a realistic camera effect */}
        <DepthOfField
          focusDistance={0.1}
          focalLength={1.5}
          bokehScale={2}
          height={480}
        />

        {/* Tone Mapping for better color grading */}
        <ToneMapping exposure={1.0} />
      </EffectComposer>
    </Canvas>
  );
}
