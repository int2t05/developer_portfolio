import { motion } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * About 关于我组件
 * 包含个人介绍与技能列表（数据来自 data/skills.ts），按分类展示，滚动进入视口时动画
 */
const About = () => {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          关于{' '}
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            我
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-text-primary">个人介绍</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              我是一名充满热情的开发者，专注于使用现代 Web 技术构建优秀的数字体验。
              我喜欢将创意转化为实际的代码，并且始终追求代码质量和用户体验。
            </p>
            <p className="text-text-secondary leading-relaxed">
              在工作之余，我喜欢学习新技术、参与开源项目，以及分享技术心得。
            </p>
          </motion.div>

          {/* 技能列表 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-text-primary">技能</h3>
            {categories.map((category) => (
              <div key={category} className="mb-4">
                <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 text-sm rounded-full bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-start transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
