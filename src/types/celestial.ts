export interface CelestialObjectData {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'asteroid';
  radius: number; // km
  mass: number; // kg
  orbitalPeriod: number; // days
  rotationPeriod: number; // hours
  temperature: number; // Kelvin
  atmosphere?: string[];
  description: string;
  textureUrl: string;
  orbitRadius: number; // AU
  orbitSpeed: number;
  moons?: CelestialObjectData[];
}