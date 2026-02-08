/**
 * 项目数据
 * 在这里添加和管理你的项目信息
 */
export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '示例项目一',
    description: '这是一个示例项目的描述，介绍项目的主要功能和亮点。',
    image: '/projects/project1.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project1',
  },
  {
    id: 2,
    title: '示例项目二',
    description: '这是另一个示例项目，展示了不同的技术栈和功能。',
    image: '/projects/project2.png',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project2',
  },
]
