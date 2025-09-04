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
    slug: 'chatbi-platform',
    name: 'ChatBI 智能数据平台',
    description: '创新性的商业智能平台，结合大语言模型技术实现自然语言查询和智能数据分析',
    longDescription: '创新性的商业智能平台，结合大语言模型技术实现自然语言查询和智能数据分析。支持多数据源接入、实时数据处理、智能图表生成和业务洞察自动发现。通过 AI 助手让数据分析变得像聊天一样简单，降低 BI 使用门槛，提升业务决策效率。',
    technologies: ['Vue.js', 'Apache Doris', 'Python', 'FastAPI', 'LangChain', 'ECharts', 'MySQL', 'Elasticsearch'],
    category: 'AI 平台',
    status: 'completed',
    results: [
      '数据查询效率提升 5倍',
      '支持 10+ 种数据源',
      '自然语言查询准确率 95%',
      '业务洞察发现率提升 80%'
    ],
    href: 'https://chatbi.qingyang.ai',
    featured: true
  },
  {
    slug: 'efficient-office-system',
    name: '高效办公系统',
    description: '全方位的企业办公管理系统，集成项目管理、任务协作、文档管理等核心功能',
    longDescription: '全方位的企业办公管理系统，集成了项目管理、任务协作、文档管理、日程安排、考勤管理等核心办公功能。采用现代化的前后端分离架构，支持多端同步，实时协作。通过智能化的工作流引擎和数据可视化分析，帮助企业提升管理效率，优化工作流程。',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Redis', 'Docker'],
    category: '全栈开发',
    status: 'completed',
    results: [
      '办公效率提升 40%',
      '团队协作效率提升 60%',
      '文档管理效率提升 80%',
      '项目交付周期缩短 30%'
    ],
    href: 'https://work.qingyang.ai',
    featured: true
  },
  {
    slug: 'enterprise-customer-service',
    name: '企业智能客服系统',
    description: '为电商平台开发的企业级智能客服系统，集成最新的大语言模型技术',
    longDescription: '为电商平台开发的企业级智能客服系统，集成了最新的大语言模型技术。支持多轮对话、情感分析、意图识别和知识库检索。通过智能路由将复杂问题转接给人工客服，实现了人机协作的最佳实践。',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'AI 应用',
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
    slug: 'ai-data-processing-platform',
    name: 'AI 数据处理平台',
    description: '企业级AI数据处理平台，覆盖全链路自动化管线',
    longDescription: '主导企业级AI数据处理平台建设，覆盖数据采集、清洗、标注、增强、合成、评估、安全、回流全链路。通过工作流、Agent、智能批量标注等工具链研发，实现数据集构建自动化，数据标注/合成自动化，提效200%。累计交付30万+数据集，支撑DeepSeek R1模型训练和10+AI场景数据集支撑。',
    technologies: ['Java', 'SpringCloud', 'Python', 'LangChain', 'RAG', 'Agent', 'Milvus', 'Whisper', 'PaddleOCR'],
    category: 'AI 平台',
    status: 'completed',
    results: [
      '累计交付30万+数据集',
      '数据标注/合成自动化提效200%',
      '支撑DeepSeek R1模型训练',
      '覆盖10+AI场景数据集支撑'
    ],
    href: 'https://data.qingyang.ai',
    featured: true
  },
  {
    slug: 'rag-agent-applications',
    name: 'RAG+Agent AI应用',
    description: '19+ AI智能应用，涵盖多行业场景落地',
    longDescription: '牵头研发19+ AI RAG+Agent应用，包括合同结构化提取、制度定位问答、知识库问答、面试助手、售前售后电商专业客服、意图识别助手、文档生成、周报生成、代码生成、小红书爆款文案生成、智能客服、旅行行程规划、天气助手、AI行政助理、医疗诊断、参数提取等。建设3省文旅AI场景应用（行程规划助手）和数据集，入选政府数字化转型案例。',
    technologies: ['Python', 'LangChain', 'RAG', 'Agent', 'ChatGLM4-9B', 'LoRA微调', 'Redis', 'MySQL'],
    category: 'AI 应用',
    status: 'completed',
    results: [
      '成功落地19+ AI应用',
      '覆盖文旅、医疗、金融、电商等行业',
      '入选政府数字化转型案例',
      '获得公司级年度优秀交付物奖项'
    ],
    featured: true
  },
  {
    slug: 'data-governance-platform',
    name: '数据治理平台',
    description: '全生命周期数据治理平台，支撑企业数字化转型',
    longDescription: '负责全生命周期数据治理平台开发，覆盖元数据管理、数据标准、血缘分析、数据质量、安全管控、数据资产地图与数据运营等核心模块。实现元数据与业务系统打通，制定统一数据标准并构建可视化血缘图，提升任务元数据追溯效率90%+。推动平台在10+运营商省市部署，获行业客户书面表扬。',
    technologies: ['Java', 'SpringBoot', 'Hibernate', 'MyBatis', 'Redis', 'Kafka', 'MySQL', 'Oracle', 'Vue', 'Element-ui'],
    category: '数据平台',
    status: 'completed',
    results: [
      '元数据追溯效率提升90%+',
      '数据资产使用率提升80%',
      '企业数据扫描安全合规达标率100%',
      '客户决策效率提升100%'
    ],
    featured: true
  },
  {
    slug: 'data-middle-platform',
    name: '数据中台平台',
    description: '企业级数据中台，实现数据治理与业务场景无缝对接',
    longDescription: '负责数据中台底层框架开发，将数据治理平台集成至数据中台，拆分前后端分离架构。集成数据治理4个模块适配改造：数据标准、模型设计、数据资产管理、文档管理对接。实现数据资产地图搜索和资产异常短信飞书预警推送，提高数据使用效率200%，获得客户书面表扬。',
    technologies: ['Java', 'SpringBoot', 'SpringCloud', 'MySQL', 'MyBatis', 'Redis', 'Kafka', 'Nacos', 'Vue', 'Element-ui'],
    category: '数据平台',
    status: 'completed',
    results: [
      '数据使用效率提升200%',
      '支撑公司销售签约客户3000w+RMB',
      '获得客户书面表扬',
      '实现数据治理与业务场景无缝对接'
    ],
    featured: true
  },
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
    featured: false
  }
]

const categories = ['全部', 'AI 平台', 'AI 应用', '数据平台', '全栈开发']

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
