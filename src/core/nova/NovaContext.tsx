import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { generateUUID } from '../../lib/uuid';
import { NovaState, NovaAction, EscalationLevel, NovaMessage, CurrentTask } from './types';

// Initial state for Nova
const initialNovaState: NovaState = {
  escalationLevel: EscalationLevel.Engaged, // Default to level 1 (Engaged)
  messages: [],
  currentTask: null,
  isTyping: false
};

// Create context
const NovaContext = createContext<{
  state: NovaState;
  dispatch: React.Dispatch<NovaAction>;
  sendMessage: (content: string) => void;
  setEscalationLevel: (level: EscalationLevel) => void;
  setCurrentTask: (task: CurrentTask | null) => void;
} | undefined>(undefined);

// Reducer function to handle state updates
function novaReducer(state: NovaState, action: NovaAction): NovaState {
  switch (action.type) {
    case 'SET_ESCALATION_LEVEL':
      return {
        ...state,
        escalationLevel: action.level
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case 'SET_CURRENT_TASK':
      return {
        ...state,
        currentTask: action.task
      };
    case 'SET_TYPING':
      return {
        ...state,
        isTyping: action.isTyping
      };
    case 'CLEAR_MESSAGES':
      return {
        ...state,
        messages: []
      };
    default:
      return state;
  }
}

// Provider component
export const NovaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(novaReducer, initialNovaState);

  // Helper function to send a message
  const sendMessage = (content: string) => {
    // Create user message
    const userMessage: NovaMessage = {
      id: generateUUID(),
      content,
      timestamp: new Date(),
      sender: 'user'
    };
    
    // Add user message to state
    dispatch({ type: 'ADD_MESSAGE', message: userMessage });
    
    // Set Nova to typing state
    dispatch({ type: 'SET_TYPING', isTyping: true });
    
    // Simulate Nova response (in a real app, this would call an API)
    setTimeout(() => {
      // Create Nova response
      const novaMessage: NovaMessage = {
        id: generateUUID(),
        content: `I received your message: "${content}"`,
        timestamp: new Date(),
        sender: 'nova'
      };
      
      // Add Nova message to state
      dispatch({ type: 'ADD_MESSAGE', message: novaMessage });
      
      // Set Nova to not typing
      dispatch({ type: 'SET_TYPING', isTyping: false });
    }, 1000);
  };

  // Helper function to set escalation level
  const setEscalationLevel = (level: EscalationLevel) => {
    dispatch({ type: 'SET_ESCALATION_LEVEL', level });
  };

  // Helper function to set current task
  const setCurrentTask = (task: CurrentTask | null) => {
    dispatch({ type: 'SET_CURRENT_TASK', task });
  };

  // Create value object
  const value = {
    state,
    dispatch,
    sendMessage,
    setEscalationLevel,
    setCurrentTask
  };

  return <NovaContext.Provider value={value}>{children}</NovaContext.Provider>;
};

// Custom hook to use the Nova context
export const useNova = () => {
  const context = useContext(NovaContext);
  if (context === undefined) {
    throw new Error('useNova must be used within a NovaProvider');
  }
  return context;
};
