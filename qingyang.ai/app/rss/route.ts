import { NextResponse } from 'next/server'
import { GetAllPosts, GetPostBySlug } from '@/lib/posts'

export const revalidate = 300

export async function GET() {
  const items = await GetAllPosts()
  const base = 'https://qingyang.ai'
  const entries = await Promise.all(
    items.map(async (p) => {
      const full = await GetPostBySlug(p.slug)
      const content = full?.html ?? ''
      return `\n    <item>\n      <title><![CDATA[${p.title}]]></title>\n      <link>${base}/posts/${p.slug}</link>\n      <description><![CDATA[${content}]]></description>\n      <guid>${base}/posts/${p.slug}</guid>\n    </item>`
    })
  )

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>清扬 AI</title>
      <link>${base}</link>
      <description>清扬的文章订阅</description>${entries.join('')}
    </channel>
  </rss>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}

