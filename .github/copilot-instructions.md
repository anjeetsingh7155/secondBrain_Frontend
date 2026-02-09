# Copilot Instructions for SecondBrain (MERN + TypeScript)

## Overview
- **SecondBrain** is a full-stack MERN + TypeScript app for saving and managing links, notes, images, and resources.
- The project is split into two folders:
  - `secondBrain_Frontend/`: React + TypeScript + Vite frontend
  - `secondBrain/`: Node.js + Express + TypeScript backend

## Architecture & Data Flow
- **Frontend** (`secondBrain_Frontend/src/`):
  - Uses React components, with UI elements in `components/ui/` (e.g., `Button.tsx`).
  - Entry: `main.tsx` → `App.tsx`.
  - State management and API calls are handled in component files (see `App.tsx`).
- **Backend** (`secondBrain/src/`):
  - Express server with REST API endpoints for CRUD operations.
  - Data types and middleware are defined in `types.ts` and `middleware.ts`.
  - Database logic in `db.ts` (TypeScript) and legacy JS in `JsFiles/`.

## Developer Workflows
- **Frontend**:
  - Start dev server: `npm run dev` (in `secondBrain_Frontend/`)
  - Build: `npm run build`
  - Lint: `npm run lint` (uses ESLint, see `eslint.config.js`)
- **Backend**:
  - Start server: `npm start` or `ts-node src/index.ts` (check `package.json` for scripts)
  - Type checking: `tsc`
- **Shared**:
  - TypeScript configs: `tsconfig.json` in each folder
  - No monorepo tooling; treat frontend and backend as separate projects

## Project-Specific Conventions
- **TypeScript-first**: Prefer `.ts`/`.tsx` over `.js`/`.jsx`. Legacy JS in `JsFiles/` is being migrated.
- **UI Components**: Place reusable UI in `src/components/ui/`.
- **API Integration**: Use RESTful patterns; endpoints are defined in backend `src/`.
- **Styling**: Frontend uses Tailwind CSS (see `App.css`).

## Integration & Patterns
- **Frontend ↔ Backend**: Communicate via REST API (see backend `src/index.ts`).
- **Database**: MongoDB, accessed via backend `db.ts`.
- **No global state management**: State is local to components unless otherwise noted.

## Examples
- Add a new UI button: `src/components/ui/Button.tsx`
- Add a backend route: `secondBrain/src/index.ts`
- Add a new data type: `secondBrain/src/types.ts`

---

For more details, see the `README.md` files in each folder.
