'use client'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

