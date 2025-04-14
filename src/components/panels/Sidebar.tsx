import React from 'react';

/**
 * Sidebar - Right side navigation panel with fixed width
 */
const Sidebar: React.FC = () => {
  return (
    <div 
      className="h-full w-full bg-gray-800 flex flex-col items-center py-6"
      data-panel="Sidebar"
    >
      <div className="flex flex-col items-center space-y-6">
        <SidebarItem icon="H" label="Home" />
        <SidebarItem icon="A" label="Apps" />
        <SidebarItem icon="S" label="Settings" />
        {/* More sidebar items can be added here */}
      </div>
    </div>
  );
};

// Simple sidebar item component
const SidebarItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer">
      <div className="text-white text-xl mb-1">{icon}</div>
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
};

export default Sidebar;
