import type { MetadataRoute } from 'next'
import { GetAllPostSlugs } from '@/lib/posts'

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://qingyang.ai'
  const now = new Date().toISOString()
  const posts = await GetAllPostSlugs()
  const postUrls = posts.map((slug) => ({ 
    url: `${base}/posts/${slug}`, 
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  return [
    { 
      url: base, 
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    { 
      url: `${base}/projects`, 
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    { 
      url: `${base}/posts`, 
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    ...postUrls,
    { 
      url: `${base}/about`, 
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    { 
      url: `${base}/contact`, 
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9
    },
    { 
      url: `${base}/links`, 
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    { 
      url: `${base}/advantages`, 
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    { 
      url: `${base}/certificates`, 
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }
  ]
}

