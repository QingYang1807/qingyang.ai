import Link from 'next/link'

type Project = {
  slug: string
  name: string
  description: string
  href?: string
}

const projects: Project[] = [
  {
    slug: 'qingyang-ai-portal',
    name: '清扬 AI 门户',
    description: '个人统一门户，部署于 Vercel，无服务器依赖。',
    href: '/'
  }
]

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-2xl font-bold">作品集</h1>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <li key={p.slug} className="rounded border p-4">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.description}</p>
            <div className="mt-3">
              <Link href={p.href ?? `/projects/${p.slug}`} className="text-brand">查看</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

