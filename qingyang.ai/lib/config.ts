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
  name: '林清扬',
  title: 'AI Engineering Consultant',
  email: 'contact@qingyang.ai',
  phone: '+86 138-0000-0000',
  website: 'https://qingyang.ai',
  avatar: '/avatar.svg',
  bio: '专注于 AI 产品落地与工程实践，为企业和个人提供前沿的 AI 解决方案。一个人就是一家公司的全栈能力。',
  location: '北京，中国',
  skills: [
    '机器学习模型部署专家',
    '大语言模型应用开发', 
    'AI 产品架构设计',
    '企业AI战略咨询'
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
