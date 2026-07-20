# TaskFlow Frontend

React 18 + TypeScript single-page application for the TaskFlow platform.

## Ownership
- **Samira Patel** — UI components, Redux state, routing, accessibility.

## Layout
- `src/main.tsx` — entry point (mounts `<App />`; TODO: Redux + Router wiring).
- `src/App.tsx` — scaffold shell rendering the TaskFlow heading (TODO: real UI).
- `src/store.ts` — Redux Toolkit store placeholder (TODO: slices + RTK Query).
- `src/index.css` — global styles placeholder.
- `index.html` — Vite HTML entry.
- `package.json`, `tsconfig.json`, `vite.config.ts`, `.eslintrc.cjs` — config.
- `Dockerfile` — container image stub for ECS/Fargate.
- `.env.example` — environment template (copy to `.env`, never commit secrets).

## Run (skeleton)
```bash
npm install
npm run dev
# Opens on http://localhost:3000 rendering the TaskFlow heading.
```

## What goes here (Sprint 1+)
- Material-UI theme + layout components, task board UI prototype.
- Redux Toolkit slices + RTK Query for API data fetching.
- React Router routes, Socket.io-client real-time updates.
- Integration with the backend `/api` and `/ws` endpoints.

> This directory is a **scaffold**. No feature UI, state, or API calls are
> implemented yet beyond the placeholder heading.
