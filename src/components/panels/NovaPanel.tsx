import React from 'react';

/**
 * NovaPanel - Left side panel for Nova AI interaction
 */
const NovaPanel: React.FC = () => {
  return (
    <div 
      className="h-full w-full bg-gray-800 p-4"
      data-panel="NovaPanel"
    >
      <h2 className="text-xl font-bold mb-4">Nova</h2>
      <div className="bg-gray-700 rounded-lg p-4 h-[calc(100%-2rem)]">
        <p className="text-gray-300">Nova AI interface placeholder</p>
      </div>
    </div>
  );
};

export default NovaPanel;
