import type { Task } from '../../types'
import { TaskCard } from './TaskCard'

interface ColumnProps {
  title: string
  tasks: Task[]
  onAddTask?: () => void
}

export function Column({ title, tasks, onAddTask }: ColumnProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-700">
          {title}
          <span className="ml-2 text-sm text-gray-500">({tasks.length})</span>
        </h2>
      </div>
      
      <div className="space-y-3 mb-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      
      <button
        onClick={onAddTask}
        className="w-full py-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center"
        aria-label={`Add task to ${title}`}
      >
        <span className="mr-1">+</span> Add Task
      </button>
    </div>
  )
}
