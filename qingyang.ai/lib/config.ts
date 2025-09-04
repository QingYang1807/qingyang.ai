// 配置管理工具函数
export interface ProfileConfig {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  website?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    wechat?: string;
  };
}

// 默认配置
export const defaultProfile: ProfileConfig = {
  name: '清扬',
  title: 'AI 全栈工程师 & 数据平台专家',
  email: 'contact@qingyang.ai',
  phone: '+86 138-****-****',
  website: 'https://qingyang.ai',
  avatar: '/avatar.svg',
  bio: '5年Java & 数据平台开发、3年AI数据应用经验，主导企业级数据处理平台建设，覆盖采集-清洗-标注-增强-合成-评估-安全-回流全链路。累计交付30万+数据集，落地运营商、文旅、金融、医疗等6大场景。',
  location: '北京，中国',
  skills: [
    'AI数据处理平台架构设计',
    '大语言模型应用开发', 
    '企业级数据治理与中台建设',
    '微服务架构与分布式系统',
    'RAG/Agent/AI应用落地'
  ],
  social: {
    github: 'https://github.com/QIngYang1807',
    linkedin: 'https://linkedin.com/in/qingyang',
    wechat: 'qingyang_ai'
  }
};

// 获取配置（后续可以从数据库或API获取）
export async function GetProfile(): Promise<ProfileConfig> {
  // 这里暂时返回默认配置
  // 后续可以从 Prisma 数据库或其他数据源获取
  return defaultProfile;
}

// 更新配置（后续可以保存到数据库）
export async function UpdateProfile(profile: Partial<ProfileConfig>): Promise<ProfileConfig> {
  // 这里暂时返回合并后的配置
  // 后续可以保存到 Prisma 数据库
  return { ...defaultProfile, ...profile };
}

// 获取特定配置项
export async function GetProfileField(key: keyof ProfileConfig): Promise<any> {
  const profile = await GetProfile();
  return profile[key];
}
