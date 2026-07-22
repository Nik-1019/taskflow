export function Sidebar() {
  const navItems = [
    { id: 'board', label: 'Board', icon: '📋' },
    { id: 'backlog', label: 'Backlog', icon: '📝' },
    { id: 'reports', label: 'Reports', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-600">TaskFlow</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="flex items-center w-full px-4 py-2 text-left text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={item.label}
              >
                <span className="mr-3" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
