"use client"

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<string>("")

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('提交中...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('提交失败')
      setStatus('已收到，我会尽快联系你。')
      e.currentTarget.reset()
    } catch (err: unknown) {
      setStatus((err as Error).message)
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">联系我</h1>
      <form onSubmit={HandleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">你的邮箱</label>
          <input name="email" type="email" required className="w-full rounded border px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">你的称呼</label>
          <input name="name" type="text" required className="w-full rounded border px-3 py-2 bg-transparent" />
        </div>
        <div>
          <label className="block text-sm mb-1">内容</label>
          <textarea name="message" required rows={6} className="w-full rounded border px-3 py-2 bg-transparent" />
        </div>
        <button className="px-4 py-2 rounded bg-brand text-white">发送</button>
        {status && <p className="text-sm text-gray-500">{status}</p>}
      </form>
    </main>
  )
}

