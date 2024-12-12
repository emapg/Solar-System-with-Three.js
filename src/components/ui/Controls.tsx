import { Settings, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useState } from 'react';

export function Controls() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const { timeScale, setTimeScale } = useStore();

  return (
    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Speed</span>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={timeScale}
            onChange={(e) => setTimeScale(parseFloat(e.target.value))}
            className="w-24"
          />
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}