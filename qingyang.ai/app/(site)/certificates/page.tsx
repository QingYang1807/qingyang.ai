import Link from 'next/link'
import Image from 'next/image'
// 注意：页面文件保持 Server Component（不要加 'use client'）
import SafeImage from '@/components/SafeImage';

// 一个 SVG 的 data:URI 占位符（灰底“暂无图片”）
const PLACEHOLDER = `data:image/svg+xml;utf8,` + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="280">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <g fill="#9ca3af">
      <path d="M120 170l50-50a20 20 0 0128 0l50 50m-30-30l18-18a20 20 0 0128 0l22 22" stroke="#9ca3af" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="150" cy="120" r="12"/>
    </g>
    <text x="200" y="310" text-anchor="middle" fill="#6b7280" font-size="16">暂无图片</text>
  </svg>
`);

// 证书数据配置
const certificatesData = {
  aiCertificates: [
    {
      id: 1,
      title: "AI全栈开发毕业证书",
      year: "2025年",
      description: "系统掌握AI全栈开发技能，包括前端、后端、AI模型部署等全链路能力",
      image: "/images/certificates/ai-fullstack.png", // 本地图片路径
      // image: "https://example.com/certificates/ai-fullstack.png", // 或者使用外部URL
      borderColor: "border-l-brand",
      textColor: "text-brand"
    },
    {
      id: 2,
      title: "大模型RAG进阶毕业证书",
      year: "2025年",
      description: "深入掌握大语言模型应用开发，RAG技术架构与Agent智能体开发",
      image: "/images/certificates/rag-advanced.png",
      borderColor: "border-l-blue-500",
      textColor: "text-blue-600"
    },
    {
      id: 3,
      title: "企业级Agent开发毕业证书",
      year: "2024年",
      description: "掌握企业级AI Agent应用开发，包括架构设计、部署优化、运维监控等",
      image: "/images/certificates/agent-enterprise.png",
      borderColor: "border-l-green-500",
      textColor: "text-green-600"
    }
  ],
  professionalCertificates: [
    {
      id: 4,
      title: "高级大数据分析师",
      year: "2024年",
      description: "具备高级数据分析能力，能够处理复杂业务场景下的数据挖掘与分析需求",
      image: "/images/certificates/bigdata-analyst.png",
      borderColor: "border-l-purple-500",
      textColor: "text-purple-600"
    },
    {
      id: 5,
      title: "AI大模型技能认证",
      year: "2024年",
      description: "掌握大语言模型应用开发技能，包括模型选择、Prompt工程、应用架构等",
      image: "/images/certificates/ai-model-skill.png",
      borderColor: "border-l-orange-500",
      textColor: "text-orange-600"
    },
    {
      id: 6,
      title: "中级软件设计师",
      year: "2018年",
      description: "具备软件系统设计能力，能够独立完成中等规模软件项目的架构设计与开发",
      image: "/images/certificates/software-designer.png",
      borderColor: "border-l-indigo-500",
      textColor: "text-indigo-600"
    },
    {
      id: 7,
      title: "企业年度优秀二等奖",
      year: "2024年",
      description: "在公司3000+员工中脱颖而出，获得年度优秀交付物二等奖，并在年会上实时直播表彰",
      image: "/images/certificates/enterprise-award.png",
      borderColor: "border-l-teal-500",
      textColor: "text-teal-600"
    }
  ],
  academicHonors: [
    {
      id: 8,
      title: "国家励志奖学金",
      year: "2018-2019年",
      description: "连续两年获得国家励志奖学金，表彰优秀的学习成绩和综合素质",
      image: "/images/certificates/national-scholarship.png",
      borderColor: "border-l-red-500",
      textColor: "text-red-600"
    },
    {
      id: 9,
      title: "学院专业奖学金",
      year: "2017-2019年",
      description: "连续三年获得学院专业奖学金，在软件工程专业学习中表现优异",
      image: "/images/certificates/college-scholarship.png",
      borderColor: "border-l-yellow-500",
      textColor: "text-yellow-600"
    },
    {
      id: 10,
      title: "学生干部经历",
      year: "2016-2019年",
      description: "担任3年班长、3年校区主持人、2年国旗班升旗手，培养领导力和组织能力",
      image: "/images/certificates/student-leader.png",
      borderColor: "border-l-pink-500",
      textColor: "text-pink-600"
    }
  ]
}

// 证书卡片：负责尺寸与文案
function CertificateCard({ certificate, layout = 'vertical' }: { certificate: any, layout?: 'vertical'|'horizontal' }) {
  const boxClass = layout === 'vertical' ? 'h-40' : 'h-32';
  return (
    <div className={`card border-l-4 ${certificate.borderColor} ${layout === 'vertical' ? 'text-center' : ''}`}>
      <div className={`${layout === 'horizontal' ? 'flex items-start gap-4' : ''}`}>
        <div className={`relative w-full ${boxClass} rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${layout === 'horizontal' ? 'max-w-[8rem] flex-shrink-0' : 'mb-4'}`}>
          <SafeImage
            src={certificate.image || PLACEHOLDER}
            alt={certificate.title}
            fill
            className="object-cover"
          />
        </div>
        <div className={`${layout === 'horizontal' ? '' : ''}`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{certificate.title}</h3>
          <p className={`${certificate.textColor} font-medium mb-2`}>{certificate.year}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{certificate.description}</p>
        </div>
      </div>
    </div>
  );
}

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
            {/* AI 全栈认证 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificatesData.aiCertificates.map(c => (
                <CertificateCard key={c.id} certificate={c} layout="vertical" />
              ))}
            </div>

            {/* 专业认证 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificatesData.professionalCertificates.map(c => (
                <CertificateCard key={c.id} certificate={c} layout="horizontal" />
              ))}
            </div>

            {/* 学术荣誉 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificatesData.academicHonors.map(c => (
                <CertificateCard key={c.id} certificate={c} layout="vertical" />
              ))}
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
