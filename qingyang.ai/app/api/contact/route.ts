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
      // 即使发送失败也不要让用户看到错误，记录日志即可
      // return NextResponse.json({ 
      //   ok: false, 
      //   message: '邮件发送失败，请稍后重试或直接联系 contact@qingyang.ai' 
      // }, { status: 500 })
    }

    // 发送确认邮件给客户（非阻塞，失败不影响主流程）
    SendConfirmationEmailToCustomer(consultationData).catch(error => {
      console.error('Failed to send confirmation email to customer:', error)
    })

    return NextResponse.json({ 
      ok: true, 
      message: '感谢您的咨询！我会在24小时内回复您。',
      messageId: emailResult.messageId || null
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: '服务器错误，请稍后重试' 
    }, { status: 500 })
  }
}

