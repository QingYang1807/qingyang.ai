import type { MetadataRoute } from 'next'
import { GetAllPostSlugs } from '@/lib/posts'

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://qingyang.ai'
  const now = new Date().toISOString()
  const posts = await GetAllPostSlugs()
  const postUrls = posts.map((slug) => ({ url: `${base}/posts/${slug}`, lastModified: now }))

  return [
    { url: base, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/posts`, lastModified: now },
    ...postUrls,
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/links`, lastModified: now }
  ]
}

