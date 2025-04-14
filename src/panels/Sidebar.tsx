import React from 'react';
import SidebarItemIcon from '../ui/SidebarItemIcon';
import { useDevMode } from '../dev/dev.config';
import DebugOverlay from '../dev/DebugOverlay';

const Sidebar: React.FC = () => {
  const isDevMode = useDevMode();
  
  return (
    <div 
      className="h-full w-full bg-gray-900 flex flex-col items-center py-6"
      data-panel="Sidebar"
    >
      {isDevMode && <DebugOverlay label="Sidebar" />}
      
      <div className="flex flex-col items-center space-y-4">
        <SidebarItemIcon icon="f" label="" />
        <SidebarItemIcon icon="ffff" label="" />
        <SidebarItemIcon icon="f" label="" />
        <SidebarItemIcon icon="ff" label="" />
        <SidebarItemIcon icon="f" label="" />
        <SidebarItemIcon icon="f" label="" />
      </div>
    </div>
  );
};

export default Sidebar;
