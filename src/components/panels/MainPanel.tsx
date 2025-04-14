import React from 'react';

/**
 * MainPanel - Central content area with flexible width
 */
const MainPanel: React.FC = () => {
  return (
    <div 
      className="h-full w-full bg-gray-900 p-6 overflow-y-auto"
      data-panel="MainPanel"
    >
      <h2 className="text-2xl font-bold mb-4">Main Content</h2>
      <div className="bg-gray-800 rounded-xl p-6">
        <p className="text-gray-300">Main panel content area placeholder</p>
      </div>
    </div>
  );
};

export default MainPanel;
