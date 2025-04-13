import React from 'react';
import { DEV_MODE } from '../dev/dev.config';
import DebugOverlay from '../dev/DebugOverlay';

const NovaPanel: React.FC = () => {
  return (
    <div 
      className="absolute top-10 right-32 z-50 w-80 h-96 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
      data-panel="NovaPanel"
    >
      {DEV_MODE && <DebugOverlay label="NovaPanel" />}
      <div className="p-4">
        {/* NovaPanel content will go here */}
      </div>
    </div>
  );
};

export default NovaPanel;
