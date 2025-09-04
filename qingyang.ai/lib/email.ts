import 'server-only';
import nodemailer from 'nodemailer';

// 邮件配置接口
export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// 从环境变量读取（腾讯企业邮默认值）
const {
  SMTP_HOST = 'smtp.exmail.qq.com',
  SMTP_PORT = '465',
  SMTP_SECURE = 'true',
  SMTP_USER = 'liufeng@datagov.top',
  SMTP_PASS = process.env.SMTP_PASS,
  MAIL_FROM = `qingyang.ai 咨询系统 <contact@qingyang.ai>`,
  MAIL_TO = '15274452497@163.com',
} = process.env;

// 最终 SMTP 配置
const emailConfig: EmailConfig = {
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: String(SMTP_SECURE) === 'true', // 465 -> true
  auth: { user: SMTP_USER, pass: SMTP_PASS },
};

// 创建邮件传输器（开发态单例复用）
let _transporter: nodemailer.Transporter | null = null;

export function CreateEmailTransporter() {
  if (_transporter) return _transporter;

  if (!emailConfig.auth.user || !emailConfig.auth.pass) {
    throw new Error('SMTP 鉴权信息缺失：请在 .env.local 配置 SMTP_USER / SMTP_PASS');
  }

  _transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: emailConfig.auth,
  });

  // 可选自检
  _transporter.verify().catch((e) => {
    console.error('[SMTP VERIFY FAILED]', e?.message || e);
  });

  return _transporter;
}

// 咨询请求数据结构
export interface ConsultationRequest {
  name: string;
  email: string;
  type: string;
  budget?: string;
  message: string;
}

// 格式化咨询类型
function FormatConsultationType(type: string): string {
  const types: Record<string, string> = {
    consultation: '技术咨询',
    development: '产品开发',
    training: '企业培训',
    collaboration: '项目合作',
    other: '其他',
  };
  return types[type] || type;
}

// 格式化预算范围（注意键名中的连字符需要引号）
function FormatBudgetRange(budget: string): string {
  const budgets: Record<string, string> = {
    'under-10k': '1万以下',
    '10k-50k': '1万-5万',
    '50k-100k': '5万-10万',
    '100k-500k': '10万-50万',
    'over-500k': '50万以上',
  };
  return budgets[budget] || budget || '未提供';
}

/** ========= 模板生成 ========= **/

// 生成“新咨询通知”（发给你/团队）
export function GenerateConsultationEmailContent(data: ConsultationRequest) {
  const consultationType = FormatConsultationType(data.type);
  const budgetRange = FormatBudgetRange(data.budget || '');

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>新的咨询请求</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .field-label { font-weight: 600; color: #4a5568; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { background-color: #f7fafc; padding: 12px; border-radius: 6px; border-left: 4px solid #667eea; }
        .message-content { background-color: #f7fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #6c757d; font-size: 12px; }
        .highlight { color: #667eea; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💼 新的咨询请求</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">来自 qingyang.ai 官网</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">👤 客户姓名</div>
            <div class="field-value"><strong>${data.name}</strong></div>
          </div>
          <div class="field">
            <div class="field-label">📧 联系邮箱</div>
            <div class="field-value">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </div>
          </div>
          <div class="field">
            <div class="field-label">🔖 咨询类型</div>
            <div class="field-value"><span class="highlight">${consultationType}</span></div>
          </div>
          <div class="field">
            <div class="field-label">💰 项目预算</div>
            <div class="field-value">${budgetRange}</div>
          </div>
          <div class="field">
            <div class="field-label">📝 项目描述</div>
            <div class="message-content">${data.message}</div>
          </div>
          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: white; font-weight: 600;">⏰ 请在24小时内回复客户咨询</p>
          </div>
        </div>
        <div class="footer">
          <p>此邮件由 qingyang.ai 自动发送 | ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
          <p>如需回复客户，请直接回复客户邮箱：${data.email}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
新的咨询请求 - qingyang.ai

客户信息:
姓名: ${data.name}
邮箱: ${data.email}
咨询类型: ${consultationType}
项目预算: ${budgetRange}

项目描述:
${data.message}

---
发送时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
请在24小时内回复客户咨询。
  `;

  return { html: htmlContent, text: textContent };
}

// 生成“客户确认”邮件（发给客户 & 也用于给自己单独一封副本）
export function GenerateCustomerConfirmationContent(data: ConsultationRequest) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>咨询请求确认</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 30px; }
        .success-badge { background: #10b981; color: white; padding: 12px 24px; border-radius: 50px; display: inline-block; font-weight: 600; margin-bottom: 20px; }
        .info-box { background-color: #f0f7ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #6c757d; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ 咨询请求已收到</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">感谢您选择 qingyang.ai</p>
        </div>
        <div class="content">
          <div class="success-badge">🎉 您的咨询请求已成功提交</div>
          <p>尊敬的 <strong>${data.name}</strong>，</p>
          <p>非常感谢您对我们的AI咨询服务的关注！您关于<strong>"${FormatConsultationType(data.type)}"</strong>的咨询请求已经成功提交。</p>
          <div class="info-box">
            <h3 style="margin-top: 0; color: #4338ca;">📋 您的咨询信息</h3>
            <p><strong>咨询类型：</strong>${FormatConsultationType(data.type)}</p>
            <p><strong>项目预算：</strong>${FormatBudgetRange(data.budget || '')}</p>
            <p><strong>提交时间：</strong>${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
          </div>
          <h3>⏰ 接下来会发生什么？</h3>
          <ul>
            <li><strong>24小时内</strong> - 我会仔细阅读您的需求并初步评估</li>
            <li><strong>1-2个工作日内</strong> - 您将收到详细的回复邮件</li>
            <li><strong>必要时</strong> - 我会安排线上或线下会议进行深入讨论</li>
          </ul>
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: 600;">💡 首次咨询完全免费，无任何隐藏费用</p>
          </div>
          <p>如果您有任何紧急问题或需要补充信息，请直接回复此邮件或联系：</p>
          <p>📧 <a href="mailto:contact@qingyang.ai" style="color: #667eea;">contact@qingyang.ai</a></p>
          <p>期待与您的合作！</p>
          <p style="margin-top: 30px;">
            最诚挚的问候，<br/>
            <strong>林清扬</strong><br/>
            AI Engineering Consultant<br/>
            qingyang.ai
          </p>
        </div>
        <div class="footer">
          <p>此邮件由 qingyang.ai 自动发送</p>
          <p>如果您不希望收到此类邮件，请回复"退订"</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
咨询请求确认 - qingyang.ai

尊敬的 ${data.name}，

感谢您的咨询请求！

您的信息：
- 咨询类型：${FormatConsultationType(data.type)}
- 项目预算：${FormatBudgetRange(data.budget || '')}
- 提交时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}

我会在24小时内仔细评估您的需求并回复。首次咨询完全免费。

如有紧急问题，请联系：contact@qingyang.ai

最诚挚的问候，
林清扬
AI Engineering Consultant
qingyang.ai
  `;

  return { html: htmlContent, text: textContent };
}

/** ========= 发送函数 ========= **/

// 1) 发给你：站点有新咨询（内部通知）
export async function SendConsultationEmail(data: ConsultationRequest) {
  try {
    const transporter = CreateEmailTransporter();
    const emailContent = GenerateConsultationEmailContent(data);

    const result = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `🚀 新咨询请求：${FormatConsultationType(data.type)} - ${data.name}`,
      text: emailContent.text,
      html: emailContent.html,
      replyTo: data.email,
      envelope: {
        from: SMTP_USER, // 必须与授权用户一致
        to: MAIL_TO,
      },
    });

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('邮件发送失败(内部通知):', error);
    return { success: false, error: error instanceof Error ? error.message : '未知错误' };
  }
}

// 2) 发给客户：确认邮件（只给客户，非 BCC）
export async function SendConfirmationEmailToCustomer(data: ConsultationRequest) {
  try {
    const transporter = CreateEmailTransporter();
    const emailContent = GenerateCustomerConfirmationContent(data);

    const result = await transporter.sendMail({
      from: MAIL_FROM,
      to: data.email,
      subject: `✅ 咨询请求确认 - 我会在24小时内回复您`,
      text: emailContent.text,
      html: emailContent.html,
      envelope: {
        from: SMTP_USER, // 必须与授权用户一致
        to: data.email,
      },
    });

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('客户确认邮件发送失败:', error);
    return { success: false, error: error instanceof Error ? error.message : '未知错误' };
  }
}

// 3) 再单独发一封“客户确认”的副本给你（内容与客户一致，非 BCC）
export async function SendConfirmationEmailToOwner(data: ConsultationRequest) {
  try {
    const transporter = CreateEmailTransporter();
    const emailContent = GenerateCustomerConfirmationContent(data);

    const result = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `【副本】已向 ${data.name} 发送确认邮件`,
      text: emailContent.text,
      html: emailContent.html,
      envelope: {
        from: SMTP_USER,
        to: MAIL_TO,
      },
    });

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('发送客户确认副本给自己失败:', error);
    return { success: false, error: error instanceof Error ? error.message : '未知错误' };
  }
}

/** ========= 异步触发器 =========
 * 在 API Route 里调用这个函数，可以“先返回给前端”，
 * 邮件发送在后台并行执行（两封：客户 + 你的副本）。
 * 注意：serverless 场景下，最好保证函数执行时间窗口内能跑完；
 * 如需更稳妥，可接队列/任务系统。
 */
export function SendConfirmationEmailsInBackground(data: ConsultationRequest) {
  // setImmediate 在 Node.js 下会尽快异步执行，不阻塞当前请求返回
  setImmediate(async () => {
    try {
      await Promise.allSettled([
        SendConfirmationEmailToCustomer(data),
        SendConfirmationEmailToOwner(data),
      ]);
    } catch (e) {
      // 理论上不会到这里，因上面用的是 allSettled
      console.error('后台发送确认邮件时出现未捕获异常:', e);
    }
  });
}
