import Link from 'next/link'

type Project = {
  slug: string
  name: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: 'completed' | 'in-progress' | 'coming-soon'
  results?: string[]
  image?: string
  href?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    slug: 'qingyang-ai-portal',
    name: '清扬 AI 企业门户',
    description: '现代化的个人品牌网站，采用企业级设计理念',
    longDescription: '基于 Next.js 14 和 Tailwind CSS 构建的现代化个人门户网站。采用响应式设计，支持暗色模式，具备完整的SEO优化和性能优化。展示了"一个人就是一家公司"的理念，将个人品牌包装为企业级形象。',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: '全栈开发',
    status: 'completed',
    results: [
      '100% Lighthouse 性能评分',
      '完全响应式设计',
      '零服务器成本部署',
      'SEO 优化完善'
    ],
    href: '/',
    featured: true
  },
  {
    slug: 'enterprise-chatbot',
    name: '企业智能客服系统',
    description: '基于大语言模型的智能客服解决方案',
    longDescription: '为电商平台开发的企业级智能客服系统，集成了最新的大语言模型技术。支持多轮对话、情感分析、意图识别和知识库检索。通过智能路由将复杂问题转接给人工客服，实现了人机协作的最佳实践。',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'AI 产品',
    status: 'completed',
    results: [
      '90% 自动化回复率',
      '客户满意度提升 35%',
      '响应时间缩短 70%',
      '人工成本降低 60%'
    ],
    featured: true
  },
  {
    slug: 'ai-data-platform',
    name: 'AI 数据处理平台',
    description: '企业级机器学习数据处理和模型训练平台',
    longDescription: '为大型制造企业构建的AI数据处理平台，支持海量工业数据的清洗、标注、特征工程和模型训练。提供可视化的数据流编排界面，支持分布式计算和模型版本管理。平台采用微服务架构，具备高可用性和横向扩展能力。',
    technologies: ['Kubernetes', 'Apache Spark', 'MLflow', 'Apache Airflow', 'Kafka', 'Elasticsearch'],
    category: '数据平台',
    status: 'completed',
    results: [
      '数据处理效率提升 10倍',
      '支持 PB 级数据处理',
      '模型训练时间缩短 80%',
      '平台可用性 99.9%'
    ],
    featured: true
  },
  {
    slug: 'chatbi-platform',
    name: 'ChatBI 智能数据平台',
    description: '融合 AI 对话能力的企业级商业智能分析平台',
    longDescription: '创新性的商业智能平台，结合大语言模型技术实现自然语言查询和智能数据分析。支持多数据源接入、实时数据处理、智能图表生成和业务洞察自动发现。通过 AI 助手让数据分析变得像聊天一样简单，降低 BI 使用门槛，提升业务决策效率。',
    technologies: ['Vue.js', 'Apache Doris', 'Python', 'FastAPI', 'LangChain', 'ECharts', 'MySQL', 'Elasticsearch'],
    category: 'BI 智能分析',
    status: 'completed',
    results: [
      '数据查询效率提升 5倍',
      '支持 10+ 种数据源',
      '自然语言查询准确率 95%',
      '业务洞察发现率提升 80%'
    ],
    href: 'https://chatbi.qingyang.ai',
    featured: true
  }
]

const categories = ['全部', '全栈开发', 'AI 产品', '数据平台', 'BI 智能分析']

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '已完成'
      case 'in-progress': return '进行中'
      case 'coming-soon': return '即将发布'
    }
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'coming-soon': return 'bg-orange-100 text-orange-700'
    }
  }

  return (
    <main className="min-h-screen">
      <section className="section bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-wide">
          <div className="section-header">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              项目案例
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              从概念到部署的完整AI解决方案，每个项目都体现了技术创新与商业价值的完美结合
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button 
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-brand hover:text-brand transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">精选案例</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <article key={project.slug} className="card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-brand transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.results && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">项目成果</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  {project.href ? (
                    <Link href={project.href} className="text-brand font-medium hover:text-brand-dark">
                      查看项目 →
                    </Link>
                  ) : (
                    <Link href="/contact" className="text-brand font-medium hover:text-brand-dark">
                      了解详情 →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                有项目想法？让我们聊聊
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                每个成功的项目都始于一个想法。分享您的需求，让我帮助您将想法转化为现实。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-lg px-8 py-4 bg-white text-brand hover:bg-gray-100 hover:shadow-lg">
                  开始项目咨询
                </Link>
                <Link href="/about" className="btn-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand">
                  了解我的能力
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
