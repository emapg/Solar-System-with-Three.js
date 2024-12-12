import { Torus } from '@react-three/drei';

export function TorusStructure() {
  return (
    <Torus args={[100, 2, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color="#1a237e"
        opacity={0.1}
        transparent
        wireframe
      />
    </Torus>
  );
}