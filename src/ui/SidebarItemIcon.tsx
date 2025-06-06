import React from 'react';

interface SidebarItemIconProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const SidebarItemIcon: React.FC<SidebarItemIconProps> = ({ icon, label, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="text-white text-xl mb-1">
        {/* Placeholder for icon - in a real app, you'd use an icon library */}
        <div className="w-6 h-6 flex items-center justify-center">{icon[0].toUpperCase()}</div>
      </div>
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
};

export default SidebarItemIcon;
