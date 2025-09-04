import Link from 'next/link'

export default function AdvantagesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-narrow">
          <div className="section-header text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              个人优势
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              基于5年企业级开发经验，形成了独特的"五有"优势体系，为客户提供全方位的专业服务
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section">
        <div className="container-narrow">
          <div className="space-y-12">
            {/* 一有厚度 */}
            <div className="card border-l-4 border-l-brand">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-brand">一</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    有厚度
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    5年Java & 数据平台开发、3年AI数据应用经验，主导企业级数据处理平台建设，覆盖采集-清洗-标注-增强-合成-评估-安全-回流全链路。累计交付30万+数据集，落地运营商、文旅、金融、医疗等6大场景，获公司级奖项，连续2年参展MWC & WAIC。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">技术积累</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">5年Java开发 + 3年AI应用，技术栈全面且深入</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">项目成果</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">30万+数据集交付，6大行业场景落地</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">行业认可</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">公司级奖项，连续参展MWC & WAIC</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">平台建设</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">主导企业级数据处理平台全链路建设</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 二懂技术 */}
            <div className="card border-l-4 border-l-blue-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">二</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    懂技术
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    熟练掌握Java、Python、Golang、Vue/React、微服务架构与分布式系统，深耕AI数据处理平台建设，精通AI应用搭建、LangChain、RAG、Agent、Prompt调优与大模型微调部署，能独立完成从高并发服务端开发到AI数据/应用全链路架构设计与优化。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">编程语言</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Java、Python、Golang、JavaScript/TypeScript</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">架构设计</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">微服务、分布式、高并发系统设计</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI技术栈</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">LangChain、RAG、Agent、大模型微调</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">全栈能力</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">从服务端到AI应用的全链路开发</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 三通架构 */}
            <div className="card border-l-4 border-l-green-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">三</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    通架构
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    熟悉微服务、分布式与容器化架构，擅长高并发数据流水线及Redis/Kafka/异步系统设计，驱动千万级数据处理与AI知识库/智能体的智能化生产。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">架构模式</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">微服务、分布式、容器化架构设计</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">高并发设计</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Redis、Kafka、异步系统优化</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">数据处理</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">千万级数据处理流水线设计</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">AI生产</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AI知识库、智能体智能化生产</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 四强落地 */}
            <div className="card border-l-4 border-l-purple-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">四</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    强落地
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    作为技术负责人，带领4人团队制定企业数据标准、搭建企业级数据平台，培训覆盖3000+员工，并主导开发19+ AI 应用赋能文旅、医疗、金融、电商等行业，实现企业级智能化落地。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">团队管理</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">带领4人团队，制定企业数据标准</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">平台建设</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">搭建企业级数据平台，培训3000+员工</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">应用落地</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">主导开发19+ AI应用，覆盖多行业</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">行业赋能</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">文旅、医疗、金融、电商等行业智能化</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 五重进化 */}
            <div className="card border-l-4 border-l-orange-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">五</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    重进化
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    持续3年深耕AI/LLM/RAG/Agent，年均精读50+ arxiv文献并转化落地，完成大模型微调与企业级Agent应用开发，获高级大数据分析师与软件设计师认证，承担公司级课程教学与AI培训分享，前沿实践MCP、A2A、多模态等新生态。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">持续学习</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">年均精读50+ arxiv文献并转化落地</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">技术实践</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">大模型微调、企业级Agent应用开发</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">专业认证</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">高级大数据分析师、软件设计师认证</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">前沿探索</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MCP、A2A、多模态等新生态实践</p>
                    </div>
                  </div>
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
              基于"五有"优势，为您提供专业服务
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              无论是技术咨询、产品开发还是团队培训，我都能基于丰富的实战经验为您提供专业的支持
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
