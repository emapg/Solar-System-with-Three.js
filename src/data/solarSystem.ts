import { CelestialObjectData } from '../types/celestial';

export const solarSystemData: CelestialObjectData[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    radius: 696340,
    mass: 1.989e30,
    orbitalPeriod: 0,
    rotationPeriod: 609.12,
    temperature: 5778,
    description: 'The Sun is the star at the center of our Solar System.',
    textureUrl: 'https://images.unsplash.com/photo-1532578498858-e27dd066c44c?auto=format&fit=crop&q=80',
    orbitRadius: 0,
    orbitSpeed: 0
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    radius: 6371,
    mass: 5.972e24,
    orbitalPeriod: 365.26,
    rotationPeriod: 23.93,
    temperature: 288,
    atmosphere: ['Nitrogen', 'Oxygen', 'Argon'],
    description: 'Our home planet, the only known planet to harbor life.',
    textureUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80',
    orbitRadius: 1,
    orbitSpeed: 1,
    moons: [
      {
        id: 'moon',
        name: 'Moon',
        type: 'moon',
        radius: 1737,
        mass: 7.34767309e22,
        orbitalPeriod: 27.32,
        rotationPeriod: 655.72,
        temperature: 250,
        description: "Earth's only natural satellite.",
        textureUrl: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80',
        orbitRadius: 0.00257,
        orbitSpeed: 1.022
      }
    ]
  }
  // Add more planets...
];