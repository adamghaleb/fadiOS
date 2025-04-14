# fadiOS Changelog

## [0.3.0] - 2025-04-13

### Added
- Vectal-style layout implementation
  - Resizable NovaPanel with dynamic constraints
  - Rounded MainPanel container with sticky header
  - Compact sidebar with simplified icons
  - Task list interface with interactive checkboxes
  - Proper spacing and visual hierarchy

### Improved
- Dev mode toggle now persists across component unmounts
- MainPanel styling with consistent color scheme
- Sidebar width reduced for better space utilization
- Container structure with proper rounded corners

### Fixed
- Fixed import paths for panel components
- Resolved event listener cleanup issues in dev tools
- Improved scrolling behavior in task list

## [0.2.0] - 2025-04-13

### Added
- Nova Panel with chat functionality
  - Message input and history
  - Simulated AI responses
  - Escalation level indicator (toggleable)
  - Current task display

- Debug Tools
  - DevToolsPanel in bottom-right corner
  - Panel hover outlines in dev mode
  - Dev mode toggle with "=" key
  - Layout information display

### Changed
- Updated project structure with proper component organization
- Improved styling with Tailwind CSS
- Fixed CSS validation warnings in VSCode

### Fixed
- Resolved component import path issues
- Fixed TypeScript errors in message handling
