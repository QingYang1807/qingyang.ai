import { GetPostBySlug, GetAllPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'

export const dynamicParams = true
export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await GetAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await GetPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose dark:prose-invert">
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  )
}

