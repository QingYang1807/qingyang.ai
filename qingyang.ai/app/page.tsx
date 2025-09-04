import Link from 'next/link'
import Image from 'next/image'
import { GetProfile } from '@/lib/config'

export default async function HomePage() {
  const profile = await GetProfile();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="relative container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                现在可预约咨询
              </div>
              <h1 className="text-hero text-white mb-6">
                {profile.name}<br />
                <span className="text-gradient">AI 工程师</span>
              </h1>
              <p className="text-lead text-blue-100 mb-8 max-w-lg">
                {profile.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary btn-lg">
                  预约咨询
                </Link>
                <Link href="/projects" className="btn-secondary btn-lg border-white text-white hover:bg-white hover:text-brand-900">
                  查看案例
                </Link>
              </div>
            </div>
            <div className="relative lg:order-last">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl blur-2xl opacity-30 animate-pulse-soft"></div>
                <div className="relative bg-white/10 backdrop-blur-glass rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden ring-4 ring-white/30">
                      <Image src={profile.avatar || "/avatar.svg"} alt={profile.name} fill className="object-cover" />
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-semibold">{profile.name}</h3>
                      <p className="text-blue-200">{profile.title}</p>
                      {profile.email && (
                        <div className="flex items-center gap-2 mt-2">
                          <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${profile.email}`} className="text-sm text-blue-200 hover:text-white transition-colors">
                            {profile.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-blue-100">
                    {profile.skills?.map((skill, index) => {
                      const colors = ['bg-green-400', 'bg-blue-400', 'bg-purple-400', 'bg-orange-400', 'bg-pink-400', 'bg-yellow-400'];
                      const colorClass = colors[index % colors.length];
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <span className={`w-2 h-2 ${colorClass} rounded-full`}></span>
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">核心服务</h2>
            <p className="section-description">
              基于5年企业级开发经验，为企业和个人提供专业的 AI 解决方案与数据平台建设服务
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover group">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI 数据处理平台</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                企业级AI数据处理平台建设，覆盖数据采集、清洗、标注、增强、合成、评估全链路，支持多模态数据处理与自动化管线。
              </p>
              <Link href="/contact" className="text-brand font-medium hover:text-brand-dark">
                了解更多 →
              </Link>
            </div>
            
            <div className="card-hover group">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">RAG+Agent应用开发</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                基于大语言模型的智能应用开发，包括知识库问答、智能客服、文档生成、代码生成等19+AI应用场景落地。
              </p>
              <Link href="/contact" className="text-brand font-medium hover:text-brand-dark">
                预约咨询 →
              </Link>
            </div>
            
            <div className="card-hover group">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">数据治理与中台</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                企业级数据治理平台与数据中台建设，涵盖元数据管理、数据标准、血缘分析、数据质量、安全管控等核心模块。
              </p>
              <Link href="/contact" className="text-brand font-medium hover:text-brand-dark">
                了解课程 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand">5+</div>
              <div className="text-gray-600 dark:text-gray-400">年开发经验</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand">30万+</div>
              <div className="text-gray-600 dark:text-gray-400">数据集交付</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand">19+</div>
              <div className="text-gray-600 dark:text-gray-400">AI应用落地</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand">6大</div>
              <div className="text-gray-600 dark:text-gray-400">行业场景</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="section-container">
          <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                准备开启您的 AI 项目？
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                让我们一起讨论您的需求，制定专属的 AI 解决方案。首次咨询免费，24小时内回复。
              </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/contact" className="btn-lg px-8 py-4 bg-white text-brand hover:bg-gray-100 hover:shadow-lg">
                   免费咨询
                 </Link>
                 <Link href="/advantages" className="btn-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand">
                   了解优势
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}