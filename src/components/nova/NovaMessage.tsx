import React from 'react';
import { NovaMessage as NovaMessageType } from '../../core/nova/types';

interface NovaMessageProps {
  message: NovaMessageType;
}

/**
 * NovaMessage - Displays a single message in the Nova chat
 */
const NovaMessage: React.FC<NovaMessageProps> = ({ message }) => {
  const isNova = message.sender === 'nova';
  
  return (
    <div 
      className={`flex mb-3 ${isNova ? 'justify-start' : 'justify-end'}`}
    >
      <div 
        className={`
          max-w-[80%] rounded-lg px-4 py-2 
          ${isNova 
            ? 'bg-blue-500/20 text-blue-50' 
            : 'bg-gray-700/50 text-white'}
        `}
      >
        <div className="text-sm">{message.content}</div>
        <div className="text-xs opacity-70 mt-1 text-right">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default NovaMessage;
