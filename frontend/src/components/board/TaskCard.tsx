import type { Task } from '../../types'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  }

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
      
      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}
      
      <div className="flex items-center justify-between">
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
        
        {task.assignee && (
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
              {task.assignee.name[0]}
            </div>
          </div>
        )}
      </div>
      
      {task.dueDate && (
        <div className="mt-3 text-xs text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}
