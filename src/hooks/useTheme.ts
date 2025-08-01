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
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return {theme, toggleTheme}
}
