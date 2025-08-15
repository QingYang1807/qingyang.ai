import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-brand-500 rounded-full mr-2"></span>
                AI Engineering Consultant
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                清扬
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                5年+ AI 工程经验，专注于人工智能产品的商业化落地。从算法研究到产品部署，
                我提供端到端的 AI 解决方案，帮助企业和个人实现数字化转型。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  预约咨询
                </Link>
                <Link href="/projects" className="btn-secondary">
                  查看作品
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-large">
                <div className="text-center mb-6">
                  <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden ring-4 ring-brand-200 dark:ring-brand-800 mb-4">
                    <Image src="/avatar.svg" alt="清扬" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">清扬</h3>
                  <p className="text-gray-600 dark:text-gray-400">AI Engineering Consultant</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    北京，中国
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    qingyang.ai
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    响应时间 24小时内
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">专业经历</h2>
            <p className="section-description">
              从技术研发到产品交付，积累了丰富的 AI 项目实战经验
            </p>
          </div>
          <div className="space-y-8">
            <div className="card border-l-4 border-l-brand">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    AI 工程顾问
                  </h3>
                  <p className="text-brand font-medium">独立咨询</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  2022 - 至今
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                为多家企业提供 AI 技术咨询和产品开发服务，涵盖大语言模型应用、计算机视觉、
                自然语言处理等领域。成功交付 50+ 项目，客户满意度 100%。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs">大语言模型</span>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs">产品架构</span>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs">技术咨询</span>
                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs">团队指导</span>
              </div>
            </div>

            <div className="card border-l-4 border-l-gray-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    高级 AI 工程师
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">某知名科技公司</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  2019 - 2022
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                负责 AI 平台建设和算法产品化，主导多个核心 AI 产品的技术架构设计和开发。
                带领 10+ 人技术团队，建立了完整的 AI 工程化流程和规范。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">机器学习</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">深度学习</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">团队管理</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">产品化</span>
              </div>
            </div>

            <div className="card border-l-4 border-l-gray-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    算法工程师
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">AI 创业公司</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  2018 - 2019
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                从零开始构建公司的 AI 技术栈，负责算法研发、模型训练和部署优化。
                在计算机视觉和自然语言处理领域积累了深厚的工程实践经验。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">计算机视觉</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">NLP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">模型优化</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">工程化</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50 dark:bg-gray-900/50">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">技能矩阵</h2>
            <p className="section-description">
              全栈 AI 能力覆盖，从算法到工程，从研发到产品
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">技术能力</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">机器学习 / 深度学习</span>
                      <span className="text-brand">专家级</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-brand h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">大语言模型应用</span>
                      <span className="text-brand">专家级</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-brand h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Python / PyTorch / TensorFlow</span>
                      <span className="text-brand">专家级</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-brand h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">云原生 / DevOps</span>
                      <span className="text-green-600">熟练</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">前端开发 / React / Next.js</span>
                      <span className="text-green-600">熟练</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">业务能力</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">产品架构设计</span>
                      <span className="text-brand">专家级</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-brand h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">技术咨询</span>
                      <span className="text-brand">专家级</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-brand h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">团队管理</span>
                      <span className="text-green-600">熟练</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">商业分析</span>
                      <span className="text-green-600">熟练</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">培训授课</span>
                      <span className="text-green-600">熟练</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header">
            <h2 className="section-title">工作理念</h2>
            <p className="section-description">
              一个人就是一家公司的理念，提供企业级的专业服务
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">快速响应</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                24小时内回复，7天内完成需求分析，提供快速的技术决策支持
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">质量保证</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                工程化的开发流程，完整的文档交付，确保项目的可维护性和扩展性
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">持续学习</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                紧跟 AI 技术前沿，持续优化解决方案，为客户提供最新的技术服务
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container-narrow">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              让我们一起实现您的 AI 愿景
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              无论是技术咨询、产品开发还是团队培训，我都能为您提供专业的支持
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-lg px-8 py-4 bg-brand text-white hover:bg-brand-dark">
                开始咨询
              </Link>
              <Link href="/projects" className="btn-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900">
                查看案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

