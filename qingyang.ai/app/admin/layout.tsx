import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '管理后台 - 清扬AI',
  description: '网站内容管理后台',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* 侧边栏 */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">管理后台</h1>
          </div>
          <nav className="px-6 pb-6">
            <ul className="space-y-2">
              <li>
                <a href="/admin" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  个人信息
                </a>
              </li>
              <li>
                <a href="/admin/projects" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  项目管理
                </a>
              </li>
              <li>
                <a href="/admin/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  网站设置
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* 主内容区 */}
        <div className="flex-1">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
