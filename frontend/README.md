# TaskFlow Frontend

React-based frontend for TaskFlow, an AI-powered project management platform.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Storybook** for component documentation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Run Storybook (http://localhost:6006)
npm run storybook

# Run linter
npm run lint

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/           # Redux store configuration
├── components/    # Reusable UI components
│   ├── board/     # Board, Column, TaskCard
│   └── layout/    # AppLayout, Sidebar, TopBar
├── features/      # Feature-specific components and logic
├── hooks/         # Custom React hooks
├── pages/         # Page-level components
├── styles/        # Global styles and Tailwind config
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Components

### Layout Components
- **AppLayout**: Main application layout with sidebar and top bar
- **Sidebar**: Navigation sidebar with links to Board, Backlog, Reports, Settings
- **TopBar**: Top navigation bar with workspace switcher, notifications, and user menu

### Board Components
- **Board**: Kanban board container with multiple columns
- **Column**: Individual column (To Do, In Progress, Done)
- **TaskCard**: Task card with title, description, priority badge, assignee, and due date

## Features

- ✅ React 18 + TypeScript + Vite setup
- ✅ Redux Toolkit configured
- ✅ Tailwind CSS with custom design tokens
- ✅ Base layout components (AppLayout, Sidebar, TopBar)
- ✅ Board components (Board, Column, TaskCard)
- ✅ Storybook for component documentation
- ✅ ESLint + Prettier configured
- ✅ Accessible components with ARIA attributes

## Next Steps (Sprint 2)

- Connect to backend API
- Implement authentication
- Add drag-and-drop functionality
- Real-time updates via WebSocket
- Task creation and editing
- User management

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines.

## License

Proprietary - TaskFlow Team
