'use client'

import { useState, useEffect } from 'react'
import { defaultProfile, type ProfileConfig } from '@/lib/config'

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<ProfileConfig>(defaultProfile)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  const HandleSave = async () => {
    setIsSaving(true)
    setMessage('')
    
    try {
      // 这里暂时只是演示，实际应该调用API保存到数据库
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟API调用
      setMessage('保存成功！')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('保存失败，请重试')
    } finally {
      setIsSaving(false)
    }
  }

  const UpdateField = (field: keyof ProfileConfig, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">个人信息管理</h1>
        <p className="text-gray-600 dark:text-gray-400">管理您的个人资料和联系信息</p>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.includes('成功') 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 基本信息 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                姓名
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => UpdateField('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                职位标题
              </label>
              <input
                type="text"
                value={profile.title}
                onChange={(e) => UpdateField('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮箱地址
              </label>
              <input
                type="email"
                value={profile.email || ''}
                onChange={(e) => UpdateField('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="例：contact@qingyang.ai"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                电话号码
              </label>
              <input
                type="tel"
                value={profile.phone || ''}
                onChange={(e) => UpdateField('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="例：+86 138-0000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                网站链接
              </label>
              <input
                type="url"
                value={profile.website || ''}
                onChange={(e) => UpdateField('website', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="例：https://qingyang.ai"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                所在地
              </label>
              <input
                type="text"
                value={profile.location || ''}
                onChange={(e) => UpdateField('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="例：北京，中国"
              />
            </div>
          </div>

          {/* 个人简介 */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              个人简介
            </label>
            <textarea
              value={profile.bio || ''}
              onChange={(e) => UpdateField('bio', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
              placeholder="介绍您的专业背景和经验..."
            />
          </div>

          {/* 技能标签 */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              专业技能（每行一个）
            </label>
            <textarea
              value={profile.skills?.join('\n') || ''}
              onChange={(e) => UpdateField('skills', e.target.value.split('\n').filter(skill => skill.trim()))}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
              placeholder="机器学习模型部署专家&#10;大语言模型应用开发&#10;AI 产品架构设计&#10;企业AI战略咨询"
            />
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={HandleSave}
              disabled={isSaving}
              className="px-6 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? '保存中...' : '保存更改'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
