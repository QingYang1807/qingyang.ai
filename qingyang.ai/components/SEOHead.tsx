import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = '清扬 AI - 智能科技的未来',
  description = '从深度学习到认知计算，清扬 AI 引领下一代技术革命。专注于 AI 产品落地与工程实践，为企业和个人提供前沿的AI解决方案。',
  keywords = ['清扬', '清扬AI', 'AI工程师', '人工智能', '数据平台', '机器学习', '深度学习', 'RAG', 'Agent', '北京AI专家'],
  image = '/avatar.svg',
  url = 'https://qingyang.ai',
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title.includes('清扬') ? title : `${title} | 清扬 AI`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="清扬" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="zh-CN" />
      <meta name="geo.region" content="CN-BJ" />
      <meta name="geo.placename" content="北京" />
      <meta name="geo.position" content="39.9042;116.4074" />
      <meta name="ICBM" content="39.9042, 116.4074" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://qingyang.ai${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="清扬 AI" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://qingyang.ai${image}`} />
      <meta name="twitter:creator" content="@qingyang_ai" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="apple-mobile-web-app-title" content="清扬 AI" />
      <meta name="application-name" content="清扬 AI" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="zh-CN" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Head>
  )
}
