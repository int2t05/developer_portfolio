import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

/**
 * Projects 项目展示组件
 * 卡片含：项目名称、截图、简短描述、技术栈、项目链接；图片懒加载，失败时显示占位
 */
const Projects = () => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  const handleImageError = useCallback((id: number) => {
    setFailedImages((prev) => new Set(prev).add(id))
  }, [])

  return (
    <section id="projects" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          我的{' '}
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            项目
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-card rounded-xl border border-border overflow-hidden hover:border-accent-start/50 transition-colors group"
            >
              {/* 项目截图：懒加载，失败时显示占位 */}
              <div className="aspect-video bg-bg-primary overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${failedImages.has(project.id) ? 'hidden' : ''}`}
                  onError={() => handleImageError(project.id)}
                />
                {failedImages.has(project.id) && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bg-card to-bg-secondary"
                    aria-hidden
                  >
                    <span className="text-4xl text-text-muted">🖼️</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-bg-primary text-text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-start hover:underline"
                    >
                      在线预览 →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
