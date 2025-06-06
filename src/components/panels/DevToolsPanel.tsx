import React from 'react';
import { useDevMode } from '../../dev/dev.config';

/**
 * DevToolsPanel - Floating debug panel that displays in development mode
 * Shows system information and layout details
 * Only visible when dev mode is enabled (toggle with "=" key)
 */
const DevToolsPanel: React.FC = () => {
  const isDevMode = useDevMode();
  
  // Only render when dev mode is enabled
  if (!isDevMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-4 text-white max-w-xs">
        <h3 className="text-sm font-bold mb-2 text-blue-400">Dev Tools</h3>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Current Realm:</span>
            <span className="font-mono">New Eden</span>
          </div>
          
          <div className="space-y-1">
            <span className="text-gray-400">Layout Widths:</span>
            <div className="pl-2 space-y-1">
              <div className="flex justify-between">
                <span>NovaPanel</span>
                <span className="font-mono text-green-400">w-72</span>
              </div>
              <div className="flex justify-between">
                <span>MainPanel</span>
                <span className="font-mono text-green-400">flex-grow</span>
              </div>
              <div className="flex justify-between">
                <span>Sidebar</span>
                <span className="font-mono text-green-400">w-24</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Escalation Level:</span>
            <span className="font-mono text-yellow-400">1</span>
          </div>
          
          <div className="mt-2 pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-400 italic">
              Press "=" to toggle dev mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevToolsPanel;
