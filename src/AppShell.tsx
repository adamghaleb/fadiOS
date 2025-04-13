import React, { ReactNode } from 'react';
import Sidebar from './panels/Sidebar';
import MainPanel from './panels/MainPanel';
import NovaPanel from './panels/NovaPanel';

interface AppShellProps {
  children?: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden">
      <div className="flex-grow">
        <MainPanel />
      </div>
      <div className="w-28">
        <Sidebar />
      </div>
      {/* NovaPanel is floating with absolute positioning */}
      <NovaPanel />
      {children}
    </div>
  );
};

export default AppShell;
