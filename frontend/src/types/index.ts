export interface Task {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  assignee?: {
    id: string
    name: string
    avatar?: string
  }
  dueDate?: string
  createdAt: string
  updatedAt: string
}

export interface Column {
  id: string
  title: string
  taskIds: string[]
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'manager' | 'member' | 'viewer'
}
