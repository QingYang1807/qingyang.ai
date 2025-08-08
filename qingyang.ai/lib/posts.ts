import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type PostItem = {
  slug: string
  title: string
  excerpt: string
  html: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export async function GetAllPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR)
    return files.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export async function GetAllPosts(): Promise<Array<Pick<PostItem, 'slug' | 'title' | 'excerpt'>>> {
  const slugs = await GetAllPostSlugs()
  const results = await Promise.all(slugs.map(async slug => {
    const full = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
    const { data, content } = matter(full)
    const title: string = data.title ?? slug
    const excerpt: string = data.excerpt ?? content.slice(0, 100)
    return { slug, title, excerpt }
  }))
  return results.sort((a, b) => a.slug < b.slug ? 1 : -1)
}

export async function GetPostBySlug(slug: string): Promise<PostItem | null> {
  try {
    const full = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
    const { data, content } = matter(full)
    const processed = await remark().use(html).process(content)
    const htmlContent = processed.toString()
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? content.slice(0, 100),
      html: htmlContent
    }
  } catch {
    return null
  }
}

