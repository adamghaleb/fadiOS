import React from 'react';
import { useNova } from '../../core/nova/NovaContext';
import { EscalationLevel as EscalationLevelType } from '../../core/nova/types';

/**
 * EscalationLevel - Visual indicator of Nova's current engagement level
 */
const EscalationLevel: React.FC = () => {
  const { state, setEscalationLevel } = useNova();
  
  // Colors for different escalation levels
  const levelColors = {
    [EscalationLevelType.Passive]: 'bg-gray-400',
    [EscalationLevelType.Engaged]: 'bg-blue-400',
    [EscalationLevelType.Focused]: 'bg-yellow-400',
    [EscalationLevelType.Urgent]: 'bg-red-500'
  };
  
  // Labels for different escalation levels
  const levelLabels = {
    [EscalationLevelType.Passive]: 'Passive',
    [EscalationLevelType.Engaged]: 'Engaged',
    [EscalationLevelType.Focused]: 'Focused',
    [EscalationLevelType.Urgent]: 'Urgent'
  };
  
  // Handle click to cycle through escalation levels
  const handleClick = () => {
    const nextLevel = (state.escalationLevel + 1) % 4;
    setEscalationLevel(nextLevel as EscalationLevelType);
  };
  
  return (
    <div 
      onClick={handleClick}
      className="flex items-center space-x-2 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-700/50 transition-colors"
    >
      <div 
        className={`w-3 h-3 rounded-full ${levelColors[state.escalationLevel]}`} 
      />
      <span className="text-xs font-medium">
        {levelLabels[state.escalationLevel]}
      </span>
    </div>
  );
};

export default EscalationLevel;
