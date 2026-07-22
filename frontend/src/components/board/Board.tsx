import { Column } from './Column'
import type { Task } from '../../types'

// Mock data for demonstration
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Setup React project',
    description: 'Initialize React app with Vite and TypeScript',
    status: 'done',
    priority: 'high',
    assignee: { id: '1', name: 'Samira Patel' },
    dueDate: '2024-01-20',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Create layout components',
    description: 'Build AppLayout, Sidebar, TopBar components',
    status: 'in-progress',
    priority: 'high',
    assignee: { id: '1', name: 'Samira Patel' },
    dueDate: '2024-01-22',
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-15T11:00:00Z',
  },
  {
    id: '3',
    title: 'Setup authentication',
    description: 'Implement login and registration flow',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-01-25',
    createdAt: '2024-01-15T12:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z',
  },
]

export function Board() {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      tasks: mockTasks.filter((t) => t.status === 'todo'),
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: mockTasks.filter((t) => t.status === 'in-progress'),
    },
    {
      id: 'done',
      title: 'Done',
      tasks: mockTasks.filter((t) => t.status === 'done'),
    },
  ]

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Project Board</h1>
        <p className="text-gray-600">Manage your tasks with drag-and-drop</p>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            tasks={column.tasks}
            onAddTask={() => console.log(`Add task to ${column.title}`)}
          />
        ))}
      </div>
    </div>
  )
}
