import { motion } from 'framer-motion'
import { contactLinks } from '../data/contact'

/**
 * Contact 联系方式组件
 * 展示邮箱、GitHub、社交媒体链接，数据来自 data/contact.ts，所有链接可点击
 */
const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          联系{' '}
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            我
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary mb-12 text-lg"
        >
          如果你有任何问题或合作意向，欢迎随时联系我。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-start transition-colors"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
