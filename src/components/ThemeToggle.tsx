'use client'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme} 
      className="group relative inline-flex items-center justify-center w-12 h-6 bg-navy-blue-100 dark:bg-navy-blue-800 rounded-full transition-all duration-300 ease-in-out hover:bg-navy-blue-200 dark:hover:bg-navy-blue-700 focus:outline-none focus:ring-2 focus:ring-moch-500 dark:focus:ring-moch-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-navy-blue-900"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span 
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-navy-blue-100 rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <span className="text-xs transition-opacity duration-200">
          {theme === 'dark' ? (
            <svg 
              className="w-3 h-3 text-yellow-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                clipRule="evenodd" 
              />
            </svg>
          ) : (
            <svg 
              className="w-3 h-3 text-moch-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" 
              />
            </svg>
          )}
        </span>
      </span>

      <span 
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-transparent via-moch-500/20 to-moch-500/40' 
            : 'bg-gradient-to-r from-moch-500/40 via-moch-500/20 to-transparent'
        }`}
      />
    </button>
  )
}