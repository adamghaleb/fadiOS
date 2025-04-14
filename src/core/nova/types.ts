/**
 * Nova Panel Types
 * Defines the core types used in the Nova AI interface
 */

// Escalation levels represent Nova's engagement intensity
export enum EscalationLevel {
  Passive = 0,   // Minimal engagement, background monitoring
  Engaged = 1,   // Standard engagement, responsive to queries
  Focused = 2,   // Heightened attention, proactive suggestions
  Urgent = 3     // Maximum engagement, critical task focus
}

// Message types for the Nova conversation
export interface NovaMessage {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'nova';
  status?: 'sending' | 'sent' | 'error';
}

// Current task being worked on
export interface CurrentTask {
  id: string;
  title: string;
  startTime: Date;
  estimatedDuration?: number; // in minutes
  mode: 'focus' | 'explore' | 'review';
}

// Nova state interface
export interface NovaState {
  escalationLevel: EscalationLevel;
  messages: NovaMessage[];
  currentTask: CurrentTask | null;
  isTyping: boolean;
}

// Nova context actions
export type NovaAction = 
  | { type: 'SET_ESCALATION_LEVEL'; level: EscalationLevel }
  | { type: 'ADD_MESSAGE'; message: NovaMessage }
  | { type: 'SET_CURRENT_TASK'; task: CurrentTask | null }
  | { type: 'SET_TYPING'; isTyping: boolean }
  | { type: 'CLEAR_MESSAGES' };
