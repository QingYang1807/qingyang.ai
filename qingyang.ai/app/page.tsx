import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 items-center">
          <div className="relative h-36 w-36 rounded-full overflow-hidden ring-2 ring-brand/30 bg-white/5">
            <Image src="/avatar.svg" alt="avatar" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">清扬 · AI 工程师</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              在 qingyang.ai 汇聚我的作品、动态、文章、开源仓库、演讲与社交链接。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="px-4 py-2 rounded bg-brand text-white">作品集</Link>
              <Link href="/posts" className="px-4 py-2 rounded border border-brand text-brand">文章</Link>
              <Link href="/about" className="px-4 py-2 rounded border">关于我</Link>
              <Link href="/contact" className="px-4 py-2 rounded border">联系</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-xl font-semibold mb-4">最近更新</h2>
        <ul className="space-y-3">
          <li className="rounded border p-4 hover:shadow">
            <Link href="/posts/hello-qingyang">发布站点 v0：在 Vercel 上的无后端个人门户</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

