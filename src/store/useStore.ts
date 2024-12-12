import { create } from 'zustand';
import { CelestialObjectData } from '../types/celestial';

interface SolarSystemStore {
  selectedObject: CelestialObjectData | null;
  setSelectedObject: (object: CelestialObjectData | null) => void;
  cameraPosition: { x: number; y: number; z: number };
  setCameraPosition: (position: { x: number; y: number; z: number }) => void;
  timeScale: number;
  setTimeScale: (scale: number) => void;
}

export const useStore = create<SolarSystemStore>((set) => ({
  selectedObject: null,
  setSelectedObject: (object) => set({ selectedObject: object }),
  cameraPosition: { x: 0, y: 50, z: 150 },
  setCameraPosition: (position) => set({ cameraPosition: position }),
  timeScale: 1,
  setTimeScale: (scale) => set({ timeScale: scale })
}));