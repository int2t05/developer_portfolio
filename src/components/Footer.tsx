/**
 * Footer 页脚组件
 * 显示版权信息，与全局深色主题、边框样式一致
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-text-muted text-sm">
          © {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
