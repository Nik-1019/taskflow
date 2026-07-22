import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { Board } from '../board/Board'

export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <Board />
        </main>
      </div>
    </div>
  )
}
