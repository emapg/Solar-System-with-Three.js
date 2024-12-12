import { useStore } from '../../store/useStore';

export function InfoPanel() {
  const selectedObject = useStore((state) => state.selectedObject);

  if (!selectedObject) return null;

  return (
    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-6 rounded-lg text-white max-w-md">
      <h2 className="text-2xl font-bold mb-2">{selectedObject.name}</h2>
      <div className="space-y-2">
        <p className="text-sm">{selectedObject.description}</p>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="text-gray-400">Type</dt>
          <dd className="capitalize">{selectedObject.type}</dd>
          <dt className="text-gray-400">Radius</dt>
          <dd>{selectedObject.radius.toLocaleString()} km</dd>
          <dt className="text-gray-400">Temperature</dt>
          <dd>{selectedObject.temperature}K</dd>
          {selectedObject.atmosphere && (
            <>
              <dt className="text-gray-400">Atmosphere</dt>
              <dd>{selectedObject.atmosphere.join(', ')}</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}