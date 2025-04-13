// Layout constants and helper functions

export const LAYOUT = {
  // Panel dimensions
  SIDEBAR_WIDTH: 112, // 28rem = 112px
  NOVA_PANEL_WIDTH: 320, // 80rem = 320px
  
  // Spacing
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  
  // Breakpoints
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
  }
};

// Helper functions for responsive layouts
export const getResponsiveWidth = (baseWidth: number, screenWidth: number): number => {
  if (screenWidth < LAYOUT.BREAKPOINTS.SM) {
    return Math.min(baseWidth, screenWidth * 0.9);
  }
  return baseWidth;
};

// Z-index management
export const Z_INDEX = {
  BASE: 0,
  PANELS: 10,
  OVERLAYS: 20,
  MODALS: 30,
  NOVA: 50,
  DEBUG: 100,
};
