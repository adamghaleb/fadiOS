import React, { useState } from 'react';
import { useDevMode } from '../dev/dev.config';
import DebugOverlay from '../dev/DebugOverlay';

// Define task type
type Task = {
  id: number;
  text: string;
  completed: boolean;
  overdue: boolean;
};

interface MainPanelProps {
  title?: string;
  tasks?: Task[];
}

const MainPanel: React.FC<MainPanelProps> = ({ 
  title = "fadiOS", 
  tasks: initialTasks = [] 
}) => {
  const isDevMode = useDevMode();
  
  // Sample tasks data - only used if no tasks are provided
  const defaultTasks: Task[] = [
    { id: 1, text: 'Brainstorm 5 Storm purpose variations (10 mins)', completed: false, overdue: true },
    { id: 2, text: 'Craft final purpose sentence using keywords', completed: false, overdue: true },
    { id: 3, text: 'Highlight 3 keywords from best purpose variation', completed: false, overdue: true },
    { id: 4, text: 'Define Storm\'s core purpose in 1 sentence', completed: false, overdue: true },
    { id: 5, text: 'Sketch Storm\'s user interface concept in Procreate/Blender', completed: false, overdue: true },
    { id: 6, text: 'Remember: The more tasks you have, the better Vectal gets.', completed: false, overdue: true },
  ];
  
  const [tasks, setTasks] = useState<Task[]>(initialTasks.length > 0 ? initialTasks : defaultTasks);

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  return (
    <div 
      className="h-full w-full flex flex-col"
      data-panel="MainPanel"
    >
      {isDevMode && <DebugOverlay label="MainPanel" />}
      
      <div className="flex flex-col h-full">
        {/* Header - Sticky */}
        <div className="sticky top-0 z-10 border-b border-gray-800">
          {/* Title bar */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">{title}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Task filter */}
          <div className="px-4 py-3 flex items-center text-sm text-gray-400">
            <span className="flex items-center">
              all tasks
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Task list - Scrollable */}
        <div className="flex-grow overflow-y-auto">
          {tasks.length > 0 ? (
            tasks.map(task => (
              <div 
                key={task.id} 
                className="px-4 py-3 border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-start">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center"
                  >
                    {task.completed && (
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                  </button>
                  <div className="flex-grow">
                    <p className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                      {task.text}
                    </p>
                    {task.overdue && (
                      <div className="mt-1 text-xs text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        overdue
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>No tasks available</p>
            </div>
          )}
        </div>
        
        {/* Version footer */}
        <div className="p-2 text-right text-xs text-gray-600">
          v52
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
