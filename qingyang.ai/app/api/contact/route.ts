import { NextRequest, NextResponse } from 'next/server'
import { SendConsultationEmail, SendConfirmationEmailToCustomer, ConsultationRequest } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => null)
    
    // 验证必填字段
    if (!data || !data.name || !data.email || !data.message) {
      return NextResponse.json({ 
        ok: false, 
        message: '请填写所有必填字段（姓名、邮箱、项目描述）' 
      }, { status: 400 })
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ 
        ok: false, 
        message: '请输入有效的邮箱地址' 
      }, { status: 400 })
    }

    // 构建咨询请求数据
    const consultationData: ConsultationRequest = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      type: data.type || 'consultation',
      budget: data.budget || '',
      message: data.message.trim(),
    }

    console.log('Processing consultation request:', {
      name: consultationData.name,
      email: consultationData.email,
      type: consultationData.type,
      timestamp: new Date().toISOString()
    })

    // 发送邮件到 contact@qingyang.ai
    const emailResult = await SendConsultationEmail(consultationData)
    
    if (!emailResult.success) {
      console.error('Failed to send consultation email:', emailResult.error)
      console.log('Email config check - USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET')
      console.log('Email config check - PASSWORD:', process.env.EMAIL_PASSWORD ? 'SET' : 'NOT SET')
      
      // 即使发送失败也不要让用户看到错误，记录日志即可
      // 但在开发环境下可以看到更详细的错误信息
      if (process.env.NODE_ENV === 'development') {
        console.warn('Development mode: Email sending failed but returning success to user')
      }
    } else {
      console.log('Email sent successfully, messageId:', emailResult.messageId)
    }

    // 发送确认邮件给客户（非阻塞，失败不影响主流程）
    SendConfirmationEmailToCustomer(consultationData).catch(error => {
      console.error('Failed to send confirmation email to customer:', error)
    })

    return NextResponse.json({ 
      ok: true, 
      message: '感谢您的咨询！我已收到您的请求，会在24小时内回复您。',
      messageId: emailResult.messageId || null,
      // 在开发模式下返回更多调试信息
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          emailSent: emailResult.success,
          error: emailResult.error || null
        }
      })
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: '服务器错误，请稍后重试' 
    }, { status: 500 })
  }
}

