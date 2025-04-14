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
 * Styled after Vectal interface
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
      className="h-full w-full bg-gray-900 flex flex-col overflow-hidden"
      data-panel="NovaPanel"
    >
      {isDevMode && <DebugOverlay label="NovaPanel" />}
      
      {/* Header with buttons and options */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Message area */}
      <div className="flex-grow flex flex-col justify-center items-center p-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4L4 8l8 4 8-4-8-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 12l8 4 8-4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l8 4 8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">What can I help with?</h3>
            <p className="text-gray-400 text-sm max-w-xs mb-8">Ask me anything about your tasks, projects, or ideas.</p>
            
            <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
              <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-3 rounded-lg text-left">
                Create a task
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-3 rounded-lg text-left">
                Find notes
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-3 rounded-lg text-left">
                Summarize project
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 px-3 rounded-lg text-left">
                Generate ideas
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full">
            {messages.map(message => (
              <div 
                key={message.id}
                className={`flex mb-4 ${message.sender === 'nova' ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`
                    max-w-[80%] rounded-lg px-4 py-3 
                    ${message.sender === 'nova' 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-blue-600 text-white'}
                  `}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className="text-xs opacity-70 mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-800 bg-gray-900">
        <div className="flex items-center bg-gray-800 rounded-lg">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Nova..."
            className="flex-grow bg-transparent text-white px-4 py-3 focus:outline-none text-sm"
          />
          <div className="flex items-center pr-2">
            <button className="p-2 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-2 text-gray-400 hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div className="flex items-center">
            <span className="mr-4">Llama 4 Scout</span>
            <div 
              onClick={toggleEscalationLevel}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <div className={`w-2 h-2 rounded-full ${getEscalationColor()}`} />
              <span>Level {escalationLevel}</span>
            </div>
          </div>
          <button className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <span>Ultra Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovaPanel;
