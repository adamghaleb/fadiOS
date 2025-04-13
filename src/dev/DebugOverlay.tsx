import React from 'react';

interface DebugOverlayProps {
  label: React.ReactNode;
}

const DebugOverlay: React.FC<DebugOverlayProps> = ({ label }) => {
  return (
    <div className="absolute top-0 left-0 bg-black/70 text-white text-xs px-2 py-1 rounded-br z-50">
      {label}
    </div>
  );
};

export default DebugOverlay;
