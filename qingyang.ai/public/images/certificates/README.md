# 证书图片使用说明

## 图片放置位置
将你的证书图片放在这个目录下：`public/images/certificates/`

## 支持的图片格式
- JPG/JPEG
- PNG
- WebP
- SVG

## 如何添加图片

### 方法1：使用本地图片（推荐）
1. 将证书图片文件放在 `public/images/certificates/` 目录下
2. 在 `app/(site)/certificates/page.tsx` 文件中修改对应的 `image` 字段

例如：
```javascript
{
  id: 1,
  title: "AI全栈开发毕业证书",
  year: "2025年",
  description: "系统掌握AI全栈开发技能...",
  image: "/images/certificates/your-certificate.jpg", // 修改这里
  borderColor: "border-l-brand",
  textColor: "text-brand"
}
```

### 方法2：使用外部URL
如果你想使用网络上的图片，可以直接使用完整的URL：

```javascript
{
  id: 1,
  title: "AI全栈开发毕业证书",
  year: "2025年",
  description: "系统掌握AI全栈开发技能...",
  image: "https://example.com/path/to/certificate.jpg", // 外部URL
  borderColor: "border-l-brand",
  textColor: "text-brand"
}
```

## 图片命名建议
建议使用有意义的文件名，例如：
- `ai-fullstack-certificate.jpg`
- `rag-advanced-certificate.jpg`
- `enterprise-award-2024.jpg`

## 注意事项
1. 本地图片路径必须以 `/` 开头（相对于public目录）
2. 外部URL必须以 `http://` 或 `https://` 开头
3. 图片尺寸建议：
   - 垂直布局：建议 320x400 像素
   - 水平布局：建议 240x320 像素
4. 图片文件大小建议控制在 500KB 以内，以保证加载速度

## 当前配置的图片路径
- AI全栈开发毕业证书: `/images/certificates/ai-fullstack.jpg`
- 大模型RAG进阶毕业证书: `/images/certificates/rag-advanced.jpg`
- 企业级Agent开发毕业证书: `/images/certificates/agent-enterprise.jpg`
- 高级大数据分析师: `/images/certificates/bigdata-analyst.jpg`
- AI大模型技能认证: `/images/certificates/ai-model-skill.jpg`
- 中级软件设计师: `/images/certificates/software-designer.jpg`
- 企业年度优秀二等奖: `/images/certificates/enterprise-award.jpg`
- 国家励志奖学金: `/images/certificates/national-scholarship.jpg`
- 学院专业奖学金: `/images/certificates/college-scholarship.jpg`
- 学生干部经历: `/images/certificates/student-leader.jpg`
