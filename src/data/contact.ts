/**
 * 联系方式数据
 * 在此配置邮箱、GitHub、社交媒体等链接，便于统一修改
 */
export interface ContactLink {
  label: string
  href: string
  icon: string
  /** 邮箱用 mailto:，外链建议加上 target="_blank" rel="noopener noreferrer" */
  isExternal?: boolean
}

export const contactLinks: ContactLink[] = [
  {
    label: 'your@email.com',
    href: 'mailto:your@email.com',
    icon: '📧',
    isExternal: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: '🐱',
    isExternal: true,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: '🐦',
    isExternal: true,
  },
]
