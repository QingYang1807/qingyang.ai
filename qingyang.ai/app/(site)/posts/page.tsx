import Link from 'next/link'
import { GetAllPosts } from '@/lib/posts'

export const revalidate = 60

export default async function PostsPage() {
  const posts = await GetAllPosts()
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold">文章</h1>
      <ul className="mt-6 space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="rounded border p-4">
            <Link href={`/posts/${p.slug}`} className="text-lg font-semibold">{p.title}</Link>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

