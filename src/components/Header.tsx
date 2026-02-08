import { useState } from 'react'

/** 导航项配置，便于扩展 */
const navItems = [
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
] as const

/**
 * Header 导航栏组件
 * 固定在页面顶部，含 Logo 与导航链接；移动端为汉堡菜单，确保链接可点击与移动端适配
 */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo：点击回到顶部 */}
        <a
          href="#"
          onClick={closeMobile}
          className="text-xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* 移动端：汉堡按钮 */}
        <button
          type="button"
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 text-text-primary hover:text-accent-start transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {/* 移动端下拉菜单 */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-md">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMobile}
                  className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
