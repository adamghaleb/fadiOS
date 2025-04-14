import React, { useRef, useEffect } from 'react';
import { useNova } from '../../core/nova/NovaContext';
import NovaMessage from './NovaMessage';

/**
 * NovaMessageList - Displays the conversation history with Nova
 */
const NovaMessageList: React.FC = () => {
  const { state } = useNova();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);
  
  return (
    <div className="flex-grow overflow-y-auto p-4">
      {state.messages.length === 0 ? (
        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
          <p>No messages yet. Start a conversation with Nova.</p>
        </div>
      ) : (
        <>
          {state.messages.map(message => (
            <NovaMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
      
      {state.isTyping && (
        <div className="flex justify-start mb-3">
          <div className="bg-blue-500/20 text-blue-50 rounded-lg px-4 py-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NovaMessageList;
