/**
 * 技能数据
 * 在这里添加和管理你的技能信息
 */
export interface Skill {
  name: string
  icon?: string
  category: '前端' | '后端' | '工具' | '其他'
}

export const skills: Skill[] = [
  // 前端技能
  { name: 'React', category: '前端' },
  { name: 'TypeScript', category: '前端' },
  { name: 'Tailwind CSS', category: '前端' },
  { name: 'HTML/CSS', category: '前端' },
  { name: 'JavaScript', category: '前端' },

  // 后端技能
  { name: 'Node.js', category: '后端' },
  { name: 'Python', category: '后端' },
  { name: 'PostgreSQL', category: '后端' },

  // 工具
  { name: 'Git', category: '工具' },
  { name: 'Docker', category: '工具' },
  { name: 'VS Code', category: '工具' },
]
