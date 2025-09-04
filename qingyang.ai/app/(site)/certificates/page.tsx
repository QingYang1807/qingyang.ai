import Link from 'next/link'

export default function CertificatesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-narrow">
          <div className="section-header text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              荣誉证书
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              持续学习与专业认证，见证技术成长与行业认可
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-12">
            {/* AI相关认证 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                AI 全栈认证
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card border-l-4 border-l-brand text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    AI全栈开发毕业证书
                  </h3>
                  <p className="text-brand font-medium mb-2">2025年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    系统掌握AI全栈开发技能，包括前端、后端、AI模型部署等全链路能力
                  </p>
                </div>

                <div className="card border-l-4 border-l-blue-500 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    大模型RAG进阶毕业证书
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">2025年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    深入掌握大语言模型应用开发，RAG技术架构与Agent智能体开发
                  </p>
                </div>

                <div className="card border-l-4 border-l-green-500 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    企业级Agent开发毕业证书
                  </h3>
                  <p className="text-green-600 font-medium mb-2">2024年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    掌握企业级AI Agent应用开发，包括架构设计、部署优化、运维监控等
                  </p>
                </div>
              </div>
            </div>

            {/* 专业认证 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                专业认证
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card border-l-4 border-l-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        高级大数据分析师
                      </h3>
                      <p className="text-purple-600 font-medium mb-2">2024年</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        具备高级数据分析能力，能够处理复杂业务场景下的数据挖掘与分析需求
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card border-l-4 border-l-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        AI大模型技能认证
                      </h3>
                      <p className="text-orange-600 font-medium mb-2">2024年</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        掌握大语言模型应用开发技能，包括模型选择、Prompt工程、应用架构等
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card border-l-4 border-l-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        中级软件设计师
                      </h3>
                      <p className="text-indigo-600 font-medium mb-2">2018年</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        具备软件系统设计能力，能够独立完成中等规模软件项目的架构设计与开发
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card border-l-4 border-l-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        企业年度优秀二等奖
                      </h3>
                      <p className="text-teal-600 font-medium mb-2">2024年</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        在公司3000+员工中脱颖而出，获得年度优秀交付物二等奖，并在年会上实时直播表彰
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 学术荣誉 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                学术荣誉
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card border-l-4 border-l-red-500 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    国家励志奖学金
                  </h3>
                  <p className="text-red-600 font-medium mb-2">2018-2019年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    连续两年获得国家励志奖学金，表彰优秀的学习成绩和综合素质
                  </p>
                </div>

                <div className="card border-l-4 border-l-yellow-500 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    学院专业奖学金
                  </h3>
                  <p className="text-yellow-600 font-medium mb-2">2017-2019年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    连续三年获得学院专业奖学金，在软件工程专业学习中表现优异
                  </p>
                </div>

                <div className="card border-l-4 border-l-pink-500 text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    学生干部经历
                  </h3>
                  <p className="text-pink-600 font-medium mb-2">2016-2019年</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    担任3年班长、3年校区主持人、2年国旗班升旗手，培养领导力和组织能力
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container-narrow">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              专业认证，品质保证
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              基于丰富的认证经验和持续学习能力，为您提供专业可靠的技术服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-lg px-8 py-4 bg-brand text-white hover:bg-brand-dark">
                开始咨询
              </Link>
              <Link href="/advantages" className="btn-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900">
                了解优势
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
