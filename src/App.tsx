import React, { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Scene } from './components/Scene';
import { Controls } from './components/ui/Controls';
import { InfoPanel } from './components/ui/InfoPanel';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full h-screen relative bg-black">
        <Suspense fallback={<LoadingSpinner />}>
          {/* Main 3D Scene */}
          <Scene />

          {/* UI Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="pointer-events-auto">
              <Controls />
              <InfoPanel />
            </div>

            {/* Welcome Message - Only shown initially */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pointer-events-none opacity-0 animate-fade-out">
              <h1 className="text-4xl font-bold mb-4">Welcome to Solar System Explorer</h1>
              <p className="text-lg">Click and drag to rotate, scroll to zoom</p>
            </div>
          </div>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;