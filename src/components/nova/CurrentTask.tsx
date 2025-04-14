import React, { useState, useEffect } from 'react';
import { useNova } from '../../core/nova/NovaContext';

/**
 * CurrentTask - Displays the current task with timer
 */
const CurrentTask: React.FC = () => {
  const { state } = useNova();
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Update elapsed time every second if there's a current task
  useEffect(() => {
    if (!state.currentTask) {
      setElapsedTime(0);
      return;
    }
    
    // Calculate initial elapsed time
    const initialElapsed = Math.floor(
      (new Date().getTime() - state.currentTask.startTime.getTime()) / 1000
    );
    setElapsedTime(initialElapsed);
    
    // Set up interval to update elapsed time
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, [state.currentTask]);
  
  // Format elapsed time as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // If no current task, show placeholder
  if (!state.currentTask) {
    return (
      <div className="px-4 py-2 text-gray-400 text-sm">
        No active task
      </div>
    );
  }
  
  // Mode colors
  const modeColors = {
    focus: 'bg-purple-500',
    explore: 'bg-green-500',
    review: 'bg-yellow-500'
  };
  
  return (
    <div className="px-4 py-2 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${modeColors[state.currentTask.mode]}`} />
          <span className="font-medium text-sm truncate max-w-[150px]">
            {state.currentTask.title}
          </span>
        </div>
        <div className="text-xs font-mono bg-gray-700/50 px-2 py-1 rounded">
          {formatTime(elapsedTime)}
        </div>
      </div>
    </div>
  );
};

export default CurrentTask;
