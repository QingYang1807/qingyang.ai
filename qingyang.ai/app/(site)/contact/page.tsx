"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [status, setStatus] = useState<string>("")

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('提交中...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('提交失败')
      setStatus('感谢您的咨询！我会在24小时内回复您。')
      e.currentTarget.reset()
    } catch (err: unknown) {
      setStatus((err as Error).message)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-narrow">
          <div className="section-header">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              开始您的 AI 项目
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              无论是技术咨询、产品开发还是团队培训，我都准备好为您提供专业的 AI 解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">技术咨询</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                AI 技术方案评估、架构设计建议、技术选型指导
              </p>
              <div className="text-brand font-medium text-sm">
                首次咨询免费
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">产品开发</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                从 MVP 到生产级产品的完整开发服务
              </p>
              <div className="text-brand font-medium text-sm">
                7天内提供方案
              </div>
            </div>

            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">企业培训</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                团队 AI 技能提升、内训课程定制
              </p>
              <div className="text-brand font-medium text-sm">
                定制化课程设计
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                发送咨询请求
              </h2>
              <form onSubmit={HandleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      您的姓名 *
                    </label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-colors" 
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      联系邮箱 *
                    </label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-colors" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    咨询类型
                  </label>
                  <select 
                    name="type" 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-colors"
                  >
                    <option value="consultation">技术咨询</option>
                    <option value="development">产品开发</option>
                    <option value="training">企业培训</option>
                    <option value="collaboration">项目合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    项目预算（可选）
                  </label>
                  <select 
                    name="budget" 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-colors"
                  >
                    <option value="">请选择预算范围</option>
                    <option value="under-10k">1万以下</option>
                    <option value="10k-50k">1万-5万</option>
                    <option value="50k-100k">5万-10万</option>
                    <option value="100k-500k">10万-50万</option>
                    <option value="over-500k">50万以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    项目描述 *
                  </label>
                  <textarea 
                    name="message" 
                    required 
                    rows={6} 
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-colors" 
                    placeholder="请详细描述您的需求、项目背景、期望目标等..."
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-primary btn-lg w-full"
                  disabled={status === '提交中...'}
                >
                  {status === '提交中...' ? '提交中...' : '发送咨询请求'}
                </button>

                {status && (
                  <div className={`p-4 rounded-lg text-sm ${
                    status.includes('感谢') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info and rest of the page will be in the next edit */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  联系方式
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">邮箱联系</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">hi@qingyang.ai</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
        </div>
        <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">响应时间</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">工作日 24 小时内</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">周末可能延迟至下个工作日</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
        </div>
        <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">服务区域</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">全球远程服务</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">北京地区可线下面谈</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

