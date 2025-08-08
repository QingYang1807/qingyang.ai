## 清扬 AI 门户（Next.js + Vercel）

### 本地开发（Windows PowerShell）
```powershell
cd E:\code\github\QIngYang1807\qingyang.ai
npm i
npm run dev
```

打开浏览器访问: `http://localhost:5173`

### 生产构建
```powershell
npm run build
npm start
```

### 部署到 Vercel
1. 登录 Vercel，选择 Import Project
2. 选择本仓库（或 GitHub 连接后选择该仓库）
3. Framework 选择 Next.js，保持默认 Build 命令与 Output 目录
4. Deploy 后绑定自定义域名 `qingyang.ai`
   - 在 Vercel Domain 设置中添加 `qingyang.ai`
   - 到域名 DNS 服务商配置 `A` 或 `CNAME` 指向 Vercel 提供的记录

### 内容与文章
- 文章放在 `content/posts/*.md`
- 新文章示例：
```md
---
title: 标题
excerpt: 摘要
---

正文 Markdown 内容
```

### 可选：接入 Vercel 数据能力（后续）
- Vercel Postgres / KV / Blob（配置环境变量后即可接入）

