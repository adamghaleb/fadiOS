# 📊 Current System State

## 🔧 Tech Stack

- React  
- Tailwind CSS  
- TypeScript  
- React Scripts  

## 🧠 Core Modules

- `/src/components/core/AppShell.tsx`  
- `/src/ui/`  
- `/src/panels/NovaPanel.tsx`, `MainPanel.tsx`, `Sidebar.tsx`  
- `/src/core/nova/types.ts`, `NovaContext.tsx`  
- `/src/dev/PanelOutline.tsx`, `DebugOverlay.tsx`, `dev.config.ts`  
- `/src/components/panels/DevToolsPanel.tsx`
- `/src/components/nova/` (message components)

## 🧩 Data Objects

- `NovaMessage`, `CurrentTask`, `EscalationLevel`
- `realms` (creative + humanOS)  
- `tasks`, `notes`, `projects`, `tags`  
- `being` table for humanOS check-ins  

## 🎨 Layout

[NovaPanel] [MainPanel] [Sidebar]

- NovaPanel on left with fixed width (w-72)
- MainPanel in center with flex-grow
- Sidebar on right with fixed width (w-28)
- DevToolsPanel floating in bottom-right corner (dev mode only)

## 🌱 Progress

- [x] Git + GitHub repository created  
- [x] File structure initialized  
- [x] Tailwind CSS installed  
- [x] AppShell scaffolded  
- [x] Basic panel components created
- [x] Dev tools implemented (panel outlines, DevToolsPanel, dev mode toggle)
- [x] Nova Panel with chat functionality
- [x] Escalation level indicator
- [x] Current task display
- [ ] Next.js + Supabase integration  
- [ ] Nova proxy implementation  
- [ ] Initial data seeding  
