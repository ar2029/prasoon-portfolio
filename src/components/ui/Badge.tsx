import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'blue' | 'cyan' | 'purple' | 'gray'
  size?: 'sm' | 'md'
  className?: string
}

export default function Badge({
  children,
  variant = 'blue',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const variants = {
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    cyan: 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20',
    purple: 'bg-brand-purple/10 text-brand-purple border border-brand-purple/20',
    gray: 'bg-white/5 text-gray-400 border border-white/10',
  }

  const sizes = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-mono font-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  )
}
