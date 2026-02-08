import { motion } from 'framer-motion'

/**
 * Hero 首页大标题区域组件
 * 包含头像、大标题、简介、CTA 按钮；带入场动画，渐变色强调，移动端适配
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* 头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-accent-start to-accent-end p-[2px]">
            <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        {/* 大标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          你好，我是{' '}
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            开发者
          </span>
        </motion.h1>

        {/* 简介 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          一名热爱编程的全栈开发者，专注于构建优雅、高效的 Web 应用。
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-start to-accent-end text-white font-medium hover:opacity-90 transition-opacity"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
          >
            联系我
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
