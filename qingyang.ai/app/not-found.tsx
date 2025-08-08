import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-md px-6 py-24 text-center">
      <h1 className="text-3xl font-bold">页面未找到</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">你访问的页面不存在或已移动。</p>
      <div className="mt-6">
        <Link href="/" className="px-4 py-2 rounded bg-brand text-white">返回首页</Link>
      </div>
    </main>
  )
}

