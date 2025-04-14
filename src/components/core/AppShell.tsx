import React, { useState, useRef, useEffect } from 'react';
import NovaPanel from '../../panels/NovaPanel';
import MainPanel from '../../panels/MainPanel';
import Sidebar from '../../panels/Sidebar';
import DevToolsPanel from '../panels/DevToolsPanel';
import PanelOutline from '../../dev/PanelOutline';

/**
 * AppShell - Main layout container for fadiOS
 * 
 * Vectal-style layout with:
 * - NovaPanel: Left side, resizable width (25% initially)
 * - MainPanel: Center, fixed max width (768px)
 * - Sidebar: Right side, fixed width (w-24)
 */
const AppShell: React.FC = () => {
  // Calculate initial width based on window size
  const getInitialWidth = () => window.innerWidth * 0.25;
  const [novaPanelWidth, setNovaPanelWidth] = useState(getInitialWidth);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartWidth = useRef(0);
  const SIDEBAR_WIDTH = 96; // 24rem * 4px (Tailwind's w-24)
  const MAIN_PANEL_WIDTH = 768; // max-w-[768px]

  // Recalculate min/max width constraints based on window size
  const getMinWidth = () => window.innerWidth * 0.25;
  const getMaxWidth = () => window.innerWidth - SIDEBAR_WIDTH - MAIN_PANEL_WIDTH;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const minWidth = getMinWidth();
      const maxWidth = getMaxWidth();
      // Ensure current width stays within new constraints
      setNovaPanelWidth(prev => Math.max(minWidth, Math.min(maxWidth, prev)));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartWidth.current = novaPanelWidth;
    e.preventDefault();
  };

  // Handle mouse move for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - dragStartX.current;
      const minWidth = getMinWidth();
      const maxWidth = getMaxWidth();
      const newWidth = Math.max(minWidth, Math.min(maxWidth, dragStartWidth.current + deltaX));
      
      setNovaPanelWidth(newWidth);
      e.preventDefault();
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-900 text-white">
      {/* NovaPanel - Left side with resizable width */}
      <div style={{ width: `${novaPanelWidth}px` }} className="h-full flex-shrink-0">
        <PanelOutline panelName="NovaPanel">
          <NovaPanel />
        </PanelOutline>
      </div>

      {/* Drag handle */}
      <div
        className="w-1 h-full bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={handleDragStart}
      />

      {/* MainPanel - Center with fixed max width */}
      <div className="flex-grow h-full flex justify-center">
        <PanelOutline panelName="MainPanel">
          <div className="h-full w-full max-w-[768px] pl-6 py-6 pr-0">
            <div className="h-full w-full rounded-xl shadow bg-gray-800 overflow-hidden">
              <MainPanel title="vectal.ai" />
            </div>
          </div>
        </PanelOutline>
      </div>

      {/* Sidebar - Right side with fixed width */}
      <div className="w-24 h-full flex-shrink-0">
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
