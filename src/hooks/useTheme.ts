'use client'

import { useEffect, useState } from 'react';

const isValidTheme = (value: string | null): value is 'light' | 'dark' =>
  value === 'light' || value === 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
    const active: 'light'|'dark' = isValidTheme(saved) ? saved : (system ? 'dark' : 'light');
    setTheme(active);
    document.documentElement.classList.toggle('dark', active === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return {theme, toggleTheme}
}
