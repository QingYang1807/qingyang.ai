// app/api/contact/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import {
  SendConsultationEmail,
  SendConfirmationEmailsInBackground,
  ConsultationRequest,
} from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => null);

    // 基础校验
    if (!data || !data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, message: '请填写所有必填字段（姓名、邮箱、项目描述）' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(data.email))) {
      return NextResponse.json(
        { ok: false, message: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 规范化数据
    const consultationData: ConsultationRequest = {
      name: String(data.name).trim(),
      email: String(data.email).trim().toLowerCase(),
      type: (data.type as string) || 'consultation',
      budget: (data.budget as string) || '',
      message: String(data.message).trim(),
    };

    console.log('Processing consultation request:', {
      name: consultationData.name,
      email: consultationData.email,
      type: consultationData.type,
      timestamp: new Date().toISOString(),
    });

    /**
     * 异步触发邮件发送（不阻塞响应）
     * 1) 发“新咨询通知”给你（单独一封）
     * 2) 发“确认邮件”给客户 + 再单独发一封同样内容的副本给你
     */
    try {
      // 内部通知（你的一封）
      setImmediate(() => {
        void SendConsultationEmail(consultationData).catch((err) => {
          console.error('Failed to send consultation email:', err);
        });
      });

      // 确认邮件（客户一封 + 你的副本一封）
      SendConfirmationEmailsInBackground(consultationData);
    } catch (bgErr) {
      // 这里理论上不会抛（上面都包了），留个兜底日志
      console.error('Background email scheduling error:', bgErr);
    }

    // 立刻返回成功（不等邮件发送完成）
    return NextResponse.json({
      ok: true,
      message: '感谢您的咨询！我已收到您的请求，会在24小时内回复您。',
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          smtpUserSet: Boolean(process.env.SMTP_USER),
          smtpPassSet: Boolean(process.env.SMTP_PASS),
        },
      }),
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { ok: false, message: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}