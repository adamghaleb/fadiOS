import React, { useState } from 'react';
import { useDevMode } from '../dev/dev.config';
import DebugOverlay from '../dev/DebugOverlay';

// Define message type
type MessageType = {
  id: number;
  text: string;
  sender: 'user' | 'nova';
};

/**
 * NovaPanel - Left side panel for Nova AI interaction
 * This is a simplified version without the full context implementation
 */
const NovaPanel: React.FC = () => {
  const isDevMode = useDevMode();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputText, setInputText] = useState('');
  const [escalationLevel, setEscalationLevel] = useState(1);
  
  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const newUserMessage: MessageType = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    const currentInput = inputText;
    setInputText('');
    
    // Simulate Nova response
    setTimeout(() => {
      const novaResponse: MessageType = {
        id: Date.now(),
        text: `I received your message: "${currentInput}"`,
        sender: 'nova'
      };
      setMessages(prev => [...prev, novaResponse]);
    }, 1000);
  };
  
  // Handle pressing Enter in the input field
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Toggle escalation level
  const toggleEscalationLevel = () => {
    setEscalationLevel(prev => (prev % 4) + 1);
  };
  
  // Get color for current escalation level
  const getEscalationColor = () => {
    switch(escalationLevel) {
      case 1: return 'bg-blue-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-orange-500';
      case 4: return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };
  
  return (
    <div 
      className="h-full w-full bg-gray-800 flex flex-col rounded-r-xl overflow-hidden"
      data-panel="NovaPanel"
    >
      {isDevMode && <DebugOverlay label="NovaPanel" />}
      
      {/* Header with escalation level */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <h2 className="text-lg font-bold text-white">Nova</h2>
        <div 
          onClick={toggleEscalationLevel}
          className="flex items-center space-x-2 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-700/50 transition-colors"
        >
          <div className={`w-3 h-3 rounded-full ${getEscalationColor()}`} />
          <span className="text-xs font-medium">Level {escalationLevel}</span>
        </div>
      </div>
      
      {/* Current task bar */}
      <div className="px-4 py-2 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="font-medium text-sm truncate max-w-[150px]">
              Current Task
            </span>
          </div>
          <div className="text-xs font-mono bg-gray-700/50 px-2 py-1 rounded">
            00:00
          </div>
        </div>
      </div>
      
      {/* Message list */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            <p>No messages yet. Start a conversation with Nova.</p>
          </div>
        ) : (
          messages.map(message => (
            <div 
              key={message.id}
              className={`flex mb-3 ${message.sender === 'nova' ? 'justify-start' : 'justify-end'}`}
            >
              <div 
                className={`
                  max-w-[80%] rounded-lg px-4 py-2 
                  ${message.sender === 'nova' 
                    ? 'bg-blue-500/20 text-blue-50' 
                    : 'bg-gray-700/50 text-white'}
                `}
              >
                <div className="text-sm">{message.text}</div>
                <div className="text-xs opacity-70 mt-1 text-right">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Input area */}
      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Nova..."
            className="flex-grow bg-gray-700/50 text-white rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovaPanel;
