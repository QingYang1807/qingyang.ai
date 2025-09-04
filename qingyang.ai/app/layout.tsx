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
          <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-brand transition-colors">
                  清扬 AI
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-8">
                <a href="/advantages" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  个人优势
                </a>
                <a href="/projects" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  项目案例
                </a>
                <a href="/about" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  关于我
                </a>
                <a href="/certificates" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  荣誉证书
                </a>
                <a href="/posts" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  技术文章
                </a>
                <a href="/links" className="text-gray-600 hover:text-brand dark:text-gray-300 dark:hover:text-brand-400 transition-colors font-medium">
                  社交媒体
                </a>
                <a href="/contact" className="btn-primary btn-sm">
                  开始咨询
                </a>
              </nav>
              <button className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="border-t bg-gray-50 dark:bg-gray-900/50">
            <div className="mx-auto max-w-7xl px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-gray-900 dark:text-gray-100">清扬 AI</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mb-4">
                    5年Java & 数据平台开发、3年AI数据应用经验，主导企业级数据处理平台建设，覆盖采集-清洗-标注-增强-合成-评估-安全-回流全链路。累计交付30万+数据集，落地运营商、文旅、金融、医疗等6大场景。
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📍 北京，中国</span>
                    <span>⚡ 24小时响应</span>
                    <span>✅ 19+ AI应用落地</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">服务</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="https://data.qingyang.ai" className="hover:text-brand transition-colors">AI数据处理平台</a></li>
                    <li><a href="https://chatbi.qingyang.ai" className="hover:text-brand transition-colors">ChatBI数据分析平台</a></li>
                    <li><a href="https://work.qingyang.ai" className="hover:text-brand transition-colors">高效办公平台</a></li>
                    <li><a href="/contact" className="hover:text-brand transition-colors">RAG+Agent应用开发</a></li>
                    <li><a href="/contact" className="hover:text-brand transition-colors">数据治理与中台</a></li>
                    <li><a href="/projects" className="hover:text-brand transition-colors">项目案例</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">资源</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="/about" className="hover:text-brand transition-colors">关于我</a></li>
                    <li><a href="/posts" className="hover:text-brand transition-colors">技术文章</a></li>
                    <li><a href="/links" className="hover:text-brand transition-colors">社交媒体</a></li>
                    <li><a href="/rss" className="hover:text-brand transition-colors">RSS 订阅</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>© {new Date().getFullYear()} 清扬 AI. 保留所有权利.</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <a href="/sitemap.xml" className="hover:text-brand transition-colors">站点地图</a>
                  <span>•</span>
                  <span>京ICP备xxxxxxxx号</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

