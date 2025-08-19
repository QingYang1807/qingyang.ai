# 邮件发送功能设置指南

## 🔧 快速设置

为了使联系表单的邮件发送功能正常工作，您需要配置Zoho邮箱的SMTP设置。

### 1. 创建环境变量文件

在项目根目录创建 `.env.local` 文件：

```bash
# 邮件发送配置 - Zoho邮箱
EMAIL_USER=contact@qingyang.ai
EMAIL_PASSWORD=your_zoho_email_password

# 其他配置...
DATABASE_URL="your_database_url_here"
NEXTAUTH_SECRET="your_nextauth_secret_here"
NEXTAUTH_URL="http://localhost:5173"
```

### 2. 获取Zoho邮箱应用密码

1. 登录您的Zoho邮箱账户
2. 进入 **账户设置** → **安全** → **应用专用密码**
3. 生成一个新的应用专用密码
4. 将生成的密码填入 `EMAIL_PASSWORD` 字段

### 3. 重启开发服务器

```bash
npm run dev
```

## ✅ 测试邮件功能

1. 访问 http://localhost:5173/contact
2. 填写并提交咨询表单
3. 检查浏览器控制台的网络请求
4. 查看服务器终端的日志输出

### 成功的日志示例：
```
Email sent successfully, messageId: <xxx@xxx.zohomail.com>
```

### 失败的日志示例：
```
Failed to send consultation email: Error: Invalid login
Email config check - USER: SET
Email config check - PASSWORD: NOT SET
```

## 🔍 故障排除

### 问题 1: `messageId: null`
- **原因**: 缺少邮箱密码配置
- **解决**: 设置正确的 `EMAIL_PASSWORD` 环境变量

### 问题 2: `Invalid login` 错误
- **原因**: 邮箱用户名或密码错误
- **解决**: 检查 Zoho 邮箱凭据，确保使用应用专用密码

### 问题 3: `ECONNREFUSED` 错误
- **原因**: 网络连接问题或SMTP服务器不可达
- **解决**: 检查网络连接，确认防火墙设置

## 🚀 功能说明

### 邮件发送功能包括：

1. **管理员通知邮件** → `contact@qingyang.ai`
   - 包含客户完整信息
   - 格式化的咨询内容
   - 专业的HTML模板

2. **客户确认邮件** → 客户邮箱
   - 感谢信息和确认
   - 服务流程说明
   - 联系方式信息

### 开发模式特性：

- 即使邮件发送失败，用户界面仍显示成功
- 详细的调试信息在控制台输出
- API响应包含 `debug` 字段（仅开发环境）

## 📧 生产环境部署

在生产环境中，请确保：

1. 设置正确的环境变量
2. 使用安全的应用专用密码
3. 定期检查邮件发送日志
4. 考虑使用邮件服务提供商的API（如SendGrid、阿里云邮件推送等）

---

🎯 **目标**: 为访客提供专业、可靠的咨询服务体验！
