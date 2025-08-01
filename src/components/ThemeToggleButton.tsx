'use client'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
        bg-white dark:bg-navy-blue-900
        text-navy-blue-900 dark:text-navy-blue-100
        hover:bg-navy-blue-200 dark:hover:bg-navy-blue-700
        focus:outline-none focus:ring-2 focus:ring-moch-500 dark:focus:ring-moch-400
        focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-navy-blue-900"
        // outline-none ring-2 ring-moch-500 dark:ring-moch-400
        // ring-offset-2 ring-offset-white dark:ring-offset-navy-blue-900"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <>
          <svg
            className="w-4 h-4 text-yellow-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            className="w-4 h-4 text-moch-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </>
      )}
    </button>
  )
}
