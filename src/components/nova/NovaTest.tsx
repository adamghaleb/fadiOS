import React, { useEffect } from 'react';
import { NovaProvider, useNova } from '../../core/nova/NovaContext';
import { EscalationLevel, CurrentTask } from '../../core/nova/types';

/**
 * Component to test Nova functionality
 */
const NovaTestInner: React.FC = () => {
  const { state, sendMessage, setEscalationLevel, setCurrentTask } = useNova();
  
  // Set up a test task and message on mount
  useEffect(() => {
    // Create a test task
    const testTask: CurrentTask = {
      id: 'test-task-1',
      title: 'Build fadiOS Interface',
      startTime: new Date(),
      mode: 'focus'
    };
    
    // Set the current task
    setCurrentTask(testTask);
    
    // Set escalation level
    setEscalationLevel(EscalationLevel.Engaged);
    
    // Send a test message
    setTimeout(() => {
      sendMessage('Hello Nova! Can you help me with fadiOS?');
    }, 1000);
  }, [sendMessage, setEscalationLevel, setCurrentTask]);
  
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold mb-2">Nova Test Panel</h3>
      
      <div className="mb-4">
        <p className="text-sm mb-1">Escalation Level:</p>
        <div className="bg-gray-700 p-2 rounded">
          {state.escalationLevel}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm mb-1">Current Task:</p>
        <div className="bg-gray-700 p-2 rounded">
          {state.currentTask ? state.currentTask.title : 'No task'}
        </div>
      </div>
      
      <div>
        <p className="text-sm mb-1">Messages:</p>
        <div className="bg-gray-700 p-2 rounded max-h-40 overflow-y-auto">
          {state.messages.map(msg => (
            <div key={msg.id} className={`mb-2 p-2 rounded ${msg.sender === 'nova' ? 'bg-blue-900/50' : 'bg-gray-600'}`}>
              <p className="text-xs">{msg.sender}: {msg.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Wrapper component that provides Nova context
 */
const NovaTest: React.FC = () => {
  return (
    <NovaProvider>
      <NovaTestInner />
    </NovaProvider>
  );
};

export default NovaTest;
