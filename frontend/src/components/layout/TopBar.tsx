export function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Switch workspace"
        >
          Workspace ▾
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Notifications"
        >
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="User menu"
        >
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </div>
          <span className="text-sm font-medium text-gray-700">User</span>
        </button>
      </div>
    </header>
  )
}
