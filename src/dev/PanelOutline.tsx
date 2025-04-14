import React, { useState } from 'react';
import { useDevMode } from './dev.config';

interface PanelOutlineProps {
  children: React.ReactNode;
  panelName: string;
}

/**
 * PanelOutline - Adds debug outlines to panels when in dev mode
 * Only visible when dev mode is enabled (toggle with "=" key)
 */
const PanelOutline: React.FC<PanelOutlineProps> = ({ children, panelName }) => {
  const isDevMode = useDevMode();
  const [isHovered, setIsHovered] = useState(false);
  
  // If not in dev mode, just render children without outline
  if (!isDevMode) {
    return <>{children}</>;
  }
  
  // In dev mode, add hover effects and outline
  return (
    <div 
      className={`relative transition-all duration-200 ${
        isHovered ? 'outline outline-2 outline-blue-500' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Panel name label that appears on hover */}
      {isHovered && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-50 font-mono">
          {panelName}
        </div>
      )}
      {children}
    </div>
  );
};

export default PanelOutline;
