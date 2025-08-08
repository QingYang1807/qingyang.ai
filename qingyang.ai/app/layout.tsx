import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://qingyang.ai'),
  title: {
    default: '清扬 AI | qingyang.ai',
    template: '%s | 清扬 AI'
  },
  description: '清扬的个人门户：作品、动态、文章、社交链接与联系渠道。',
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
              <a href="/" className="font-semibold">清扬 AI</a>
              <nav className="flex items-center gap-5 text-sm">
                <a href="/projects">作品</a>
                <a href="/posts">文章</a>
                <a href="/about">关于</a>
                <a href="/contact">联系</a>
                <a href="/links">社交</a>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="border-t">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm flex flex-col md:flex-row items-center gap-3 md:justify-between">
              <p>© {new Date().getFullYear()} 清扬</p>
              <div className="flex gap-4">
                <a href="/rss">RSS</a>
                <a href="/sitemap.xml">Sitemap</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

