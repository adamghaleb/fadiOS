import React from 'react';
import NovaPanel from '../../panels/NovaPanel';
import MainPanel from '../panels/MainPanel';
import Sidebar from '../panels/Sidebar';
import DevToolsPanel from '../panels/DevToolsPanel';
import PanelOutline from '../../dev/PanelOutline';

/**
 * AppShell - Main layout container for fadiOS
 * 
 * Layout structure:
 * - NovaPanel: Left side, fixed width
 * - MainPanel: Center, flexible width
 * - Sidebar: Right side, fixed width
 */
const AppShell: React.FC = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-900 text-white">
      {/* NovaPanel - Left side with fixed width */}
      <div className="w-72 h-full">
        <PanelOutline panelName="NovaPanel">
          <NovaPanel />
        </PanelOutline>
      </div>

      {/* MainPanel - Center with flex-grow */}
      <div className="flex-grow h-full">
        <PanelOutline panelName="MainPanel">
          <MainPanel />
        </PanelOutline>
      </div>

      {/* Sidebar - Right side with fixed width */}
      <div className="w-28 h-full">
        <PanelOutline panelName="Sidebar">
          <Sidebar />
        </PanelOutline>
      </div>
      
      {/* Dev Tools Panel - Only visible in development mode */}
      <DevToolsPanel />
    </div>
  );
};

export default AppShell;
