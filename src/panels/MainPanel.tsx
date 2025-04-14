import React from 'react';
import { useDevMode } from '../dev/dev.config';
import DebugOverlay from '../dev/DebugOverlay';

const MainPanel: React.FC = () => {
  const isDevMode = useDevMode();
  
  return (
    <div 
      className="h-full w-full bg-gray-800 p-6"
      data-panel="MainPanel"
    >
      {isDevMode && <DebugOverlay label="MainPanel" />}
      
      <div className="h-full w-full rounded-xl bg-gray-700/50 p-4">
        {/* MainPanel content will go here */}
        <h1 className="text-2xl font-bold text-white">fadiOS</h1>
      </div>
    </div>
  );
};

export default MainPanel;
