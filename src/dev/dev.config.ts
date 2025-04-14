// Using Node.js process environment
// The @types/node package should be installed for this to work correctly
import { useState, useEffect } from 'react';

// Default state based on Node.js environment
const DEFAULT_DEV_MODE = process.env.NODE_ENV === 'development';

// Create a store for dev mode state
let devModeEnabled = DEFAULT_DEV_MODE;
let listeners: Array<(isEnabled: boolean) => void> = [];

// Global event handler to avoid multiple listeners
let isEventListenerAttached = false;

// Toggle function
export const toggleDevMode = (): boolean => {
  devModeEnabled = !devModeEnabled;
  // Notify all listeners
  listeners.forEach(listener => listener(devModeEnabled));
  console.log('Dev mode toggled:', devModeEnabled); // Debug log
  return devModeEnabled;
};

// Get current state
export const isDevModeEnabled = (): boolean => devModeEnabled;

// Hook for components to use dev mode
export const useDevMode = (): boolean => {
  const [isEnabled, setIsEnabled] = useState(devModeEnabled);
  
  useEffect(() => {
    // Add listener
    const listener = (enabled: boolean) => setIsEnabled(enabled);
    listeners.push(listener);
    
    // Setup keyboard shortcut for "=" key - only once globally
    if (!isEventListenerAttached) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === '=') {
          toggleDevMode();
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      isEventListenerAttached = true;
      
      // We never remove this listener since it's global
    }
    
    // Cleanup component listener
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);
  
  return isEnabled;
};
