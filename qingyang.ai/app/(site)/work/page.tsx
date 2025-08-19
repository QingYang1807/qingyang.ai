'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Users, 
  FileText, 
  BarChart3, 
  Clock, 
  CheckSquare, 
  MessageSquare,
  Settings,
  Search,
  Bell,
  Plus,
  Filter,
  Download,
  Upload,
  Edit,
  Trash2,
  Eye,
  Share2,
  Star
} from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  assignee: string
  dueDate: string
  project: string
}

interface Project {
  id: string
  name: string
  description: string
  progress: number
  status: 'active' | 'completed' | 'paused'
  members: number
  dueDate: string
}

interface Meeting {
  id: string
  title: string
  time: string
  attendees: string[]
  type: 'video' | 'in-person'
  room?: string
}

export default function WorkSystemPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'tasks' | 'calendar' | 'docs' | 'reports'>('dashboard')
  const [selectedProject, setSelectedProject] = useState<string>('all')
  const [taskFilter, setTaskFilter] = useState<'all' | 'my-tasks' | 'completed'>('all')
  const [showNewTaskModal, setShowNewTaskModal] = useState(false)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [newTaskDesc, setNewTaskDesc] = useState('')
  const [newProjectName, setNewProjectName] = useState('')
  const [newProjectDesc, setNewProjectDesc] = useState('')

  const tasks: Task[] = [
    {
      id: '1',
      title: '用户界面设计优化',
      description: '优化主要页面的用户体验和界面设计',
      status: 'in-progress',
      priority: 'high',
      assignee: '张三',
      dueDate: '2024-01-15',
      project: '产品优化'
    },
    {
      id: '2',
      title: '数据库性能优化',
      description: '优化数据库查询性能，减少响应时间',
      status: 'todo',
      priority: 'medium',
      assignee: '李四',
      dueDate: '2024-01-20',
      project: '技术优化'
    },
    {
      id: '3',
      title: '客户反馈整理',
      description: '整理本月收到的客户反馈并制定改进计划',
      status: 'completed',
      priority: 'low',
      assignee: '王五',
      dueDate: '2024-01-10',
      project: '客户服务'
    }
  ]

  const projects: Project[] = [
    {
      id: '1',
      name: '产品优化',
      description: '提升产品用户体验和功能完善',
      progress: 75,
      status: 'active',
      members: 8,
      dueDate: '2024-02-28'
    },
    {
      id: '2',
      name: '技术升级',
      description: '系统架构升级和性能优化',
      progress: 45,
      status: 'active',
      members: 5,
      dueDate: '2024-03-15'
    },
    {
      id: '3',
      name: '市场推广',
      description: '新产品市场推广策略执行',
      progress: 90,
      status: 'active',
      members: 6,
      dueDate: '2024-01-30'
    }
  ]

  const meetings: Meeting[] = [
    {
      id: '1',
      title: '项目进度评审',
      time: '14:00 - 15:00',
      attendees: ['张三', '李四', '王五'],
      type: 'video'
    },
    {
      id: '2',
      title: '产品规划会议',
      time: '16:00 - 17:30',
      attendees: ['产品经理', '技术总监', 'UI设计师'],
      type: 'in-person',
      room: '会议室A'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'todo': return 'bg-gray-100 text-gray-700'
      case 'active': return 'bg-green-100 text-green-700'
      case 'paused': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (taskFilter === 'completed') return task.status === 'completed'
    if (taskFilter === 'my-tasks') return task.assignee === '张三' // 模拟当前用户
    return true
  })

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">进行中的项目</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">待办任务</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <CheckSquare className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">团队成员</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">本月完成</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 快速操作 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setShowNewProjectModal(true)}
            className="flex flex-col items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <Plus className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">新建项目</span>
          </button>
          <button 
            onClick={() => setShowNewTaskModal(true)}
            className="flex flex-col items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <CheckSquare className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">创建任务</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <Calendar className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">安排会议</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <FileText className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-600">新建文档</span>
          </button>
        </div>
      </div>

      {/* 今日会议 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">今日会议</h3>
        <div className="space-y-3">
          {meetings.map(meeting => (
            <div key={meeting.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{meeting.title}</p>
                  <p className="text-sm text-gray-600">{meeting.time} • {meeting.attendees.length} 人参与</p>
                </div>
              </div>
              <button 
                onClick={() => alert(`正在加入"${meeting.title}"会议...`)}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                加入会议
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">项目管理</h2>
        <button 
          onClick={() => setShowNewProjectModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          新建项目
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status === 'active' ? '进行中' : project.status === 'completed' ? '已完成' : '暂停'}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">进度</span>
                <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {project.members} 成员
              </span>
              <span>截止: {project.dueDate}</span>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <button 
                onClick={() => alert(`查看项目"${project.name}"详情`)}
                className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded text-sm hover:bg-blue-100"
              >
                查看详情
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderTasks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">任务管理</h2>
        <div className="flex items-center gap-3">
          <select 
            value={taskFilter} 
            onChange={(e) => setTaskFilter(e.target.value as any)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">所有任务</option>
            <option value="my-tasks">我的任务</option>
            <option value="completed">已完成</option>
          </select>
          <button 
            onClick={() => setShowNewTaskModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            新建任务
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">任务</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">状态</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">优先级</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">负责人</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">截止日期</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTasks.map(task => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-sm text-gray-600">{task.description}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status === 'todo' ? '待办' : task.status === 'in-progress' ? '进行中' : '已完成'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900">{task.assignee}</td>
                  <td className="py-3 px-4 text-gray-600">{task.dueDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => alert(`查看任务"${task.title}"详情`)}
                        className="text-gray-400 hover:text-blue-600"
                        title="查看详情"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => alert(`编辑任务"${task.title}"`)}
                        className="text-gray-400 hover:text-green-600"
                        title="编辑任务"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm(`确定要删除任务"${task.title}"吗？`)) {
                            alert(`任务"${task.title}"已删除`)
                          }
                        }}
                        className="text-gray-400 hover:text-red-600"
                        title="删除任务"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderCalendar = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">日程管理</h2>
        <button 
          onClick={() => alert('创建新日程安排')}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          新建日程
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['日', '一', '二', '三', '四', '五', '六'].map(day => (
              <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 35}, (_, i) => {
              const day = i - 6 + 1
              const isToday = day === 15
              const hasEvent = [3, 8, 15, 22, 29].includes(day)
              
              return (
                <div 
                  key={i} 
                  className={`aspect-square flex items-center justify-center text-sm relative cursor-pointer rounded
                    ${day <= 0 || day > 31 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}
                    ${isToday ? 'bg-blue-600 text-white' : ''}
                  `}
                >
                  {day > 0 && day <= 31 ? day : ''}
                  {hasEvent && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-4">今日安排</h3>
          <div className="space-y-3">
            {meetings.map(meeting => (
              <div key={meeting.id} className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-gray-900">{meeting.title}</p>
                <p className="text-sm text-gray-600">{meeting.time}</p>
                <div className="flex items-center gap-2 mt-2">
                  {meeting.type === 'video' ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">视频会议</span>
                  ) : (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{meeting.room}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDocs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">文档管理</h2>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('请选择要上传的文档文件')}
            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <Upload className="w-4 h-4" />
            上传文档
          </button>
          <button 
            onClick={() => alert('创建新文档功能')}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            新建文档
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <h3 className="font-medium text-gray-900 mb-3">文档分类</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:text-blue-700">所有文档</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">项目文档</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">会议纪要</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">技术文档</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">培训资料</a></li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="搜索文档..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: '产品需求文档.docx', type: 'docx', size: '2.5MB', date: '2024-01-15', starred: true },
                  { name: '技术架构设计.pdf', type: 'pdf', size: '5.2MB', date: '2024-01-14', starred: false },
                  { name: '项目进度报告.xlsx', type: 'xlsx', size: '1.8MB', date: '2024-01-13', starred: false },
                  { name: '会议纪要-1月第2周.md', type: 'md', size: '0.5MB', date: '2024-01-12', starred: true },
                  { name: '用户手册.pdf', type: 'pdf', size: '3.1MB', date: '2024-01-11', starred: false },
                  { name: '数据分析报告.pptx', type: 'pptx', size: '8.7MB', date: '2024-01-10', starred: false }
                ].map((doc, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <button className={`p-1 ${doc.starred ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400`}>
                        <Star className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">{doc.name}</h4>
                    <p className="text-xs text-gray-600 mb-3">{doc.size} • {doc.date}</p>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => alert(`打开文档: ${doc.name}`)}
                        className="flex-1 bg-blue-50 text-blue-600 py-1 px-2 rounded text-xs hover:bg-blue-100"
                      >
                        打开
                      </button>
                      <button 
                        onClick={() => alert(`分享文档: ${doc.name}`)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="分享文档"
                      >
                        <Share2 className="w-3 h-3" />
                      </button>
                      <button 
                        onClick={() => alert(`下载文档: ${doc.name}`)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="下载文档"
                      >
                        <Download className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">数据报表</h2>
        <button 
          onClick={() => alert('正在生成详细数据报表...')}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <BarChart3 className="w-4 h-4" />
          生成报表
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-4">项目完成情况</h3>
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{project.name}</span>
                  <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-4">任务状态分布</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">已完成</span>
              </div>
              <span className="text-sm font-medium">48%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">进行中</span>
              </div>
              <span className="text-sm font-medium">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">待办</span>
              </div>
              <span className="text-sm font-medium">17%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-4">团队效率</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
            <p className="text-sm text-gray-600">相比上月提升 8%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-gray-900 mb-4">本月完成任务</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
            <p className="text-sm text-gray-600">超额完成 12%</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold text-gray-900">
                清扬办公系统
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  工作台
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'projects' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  项目
                </button>
                <button 
                  onClick={() => setActiveTab('tasks')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'tasks' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  任务
                </button>
                <button 
                  onClick={() => setActiveTab('calendar')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'calendar' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日程
                </button>
                <button 
                  onClick={() => setActiveTab('docs')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'docs' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  文档
                </button>
                <button 
                  onClick={() => setActiveTab('reports')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'reports' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  报表
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="搜索..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">张</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'calendar' && renderCalendar()}
        {activeTab === 'docs' && renderDocs()}
        {activeTab === 'reports' && renderReports()}
      </main>

      {/* 新建任务模态框 */}
      {showNewTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">新建任务</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">任务标题</label>
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="请输入任务标题..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">任务描述</label>
                <textarea
                  value={newTaskDesc}
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  placeholder="请输入任务描述..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => {
                    if (newTaskTitle.trim()) {
                      alert(`任务"${newTaskTitle}"创建成功！`)
                      setNewTaskTitle('')
                      setNewTaskDesc('')
                      setShowNewTaskModal(false)
                    }
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  创建任务
                </button>
                <button
                  onClick={() => {
                    setNewTaskTitle('')
                    setNewTaskDesc('')
                    setShowNewTaskModal(false)
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 新建项目模态框 */}
      {showNewProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">新建项目</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">项目名称</label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="请输入项目名称..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">项目描述</label>
                <textarea
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  placeholder="请输入项目描述..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={() => {
                    if (newProjectName.trim()) {
                      alert(`项目"${newProjectName}"创建成功！`)
                      setNewProjectName('')
                      setNewProjectDesc('')
                      setShowNewProjectModal(false)
                    }
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  创建项目
                </button>
                <button
                  onClick={() => {
                    setNewProjectName('')
                    setNewProjectDesc('')
                    setShowNewProjectModal(false)
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 底部版权信息 */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 清扬办公系统. 由{' '}
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              清扬AI
            </Link>{' '}
            提供技术支持
          </div>
        </div>
      </footer>
    </div>
  )
}
