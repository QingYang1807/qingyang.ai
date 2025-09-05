import { GetProfile } from './config'

export interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export async function GenerateSitemap(): Promise<SitemapEntry[]> {
  const baseUrl = 'https://qingyang.ai'
  const profile = await GetProfile()
  
  const staticPages: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/advantages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    }
  ]

  // 添加博客文章页面
  const blogPosts = [
    {
      slug: 'hello-qingyang',
      title: '你好，清扬 qingyang.ai',
      lastModified: new Date()
    }
  ]

  const blogPages: SitemapEntry[] = blogPosts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  return [...staticPages, ...blogPages]
}

export function GenerateSitemapXML(entries: SitemapEntry[]): string {
  const baseUrl = 'https://qingyang.ai'
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return xml
}
