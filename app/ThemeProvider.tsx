'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark', // Default to dark
  toggleTheme: () => {},
});

// Inline script to apply theme before React hydrates
const themeScript = `
(function() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') {
      return 'dark';
    }
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (savedTheme || (prefersDark ? 'dark' : 'light')) as 'light' | 'dark';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* Custom toggle switch */}
        <label
          className="
            fixed top-12 z-[1000]
            left-2 md:left-auto md:right-5
            inline-flex items-center cursor-pointer
          "
        >
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-label="Toggle Dark Mode"
          />
          <div
            className="
              w-20 h-10 rounded-full
              bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600
              peer-checked:from-indigo-600 peer-checked:via-indigo-700 peer-checked:to-indigo-800
              transition-all duration-500
              after:content-['☀️']
              after:absolute after:top-1 after:left-1
              after:bg-white after:rounded-full after:h-8 after:w-8
              after:flex after:items-center after:justify-center
              after:transition-all after:duration-500
              peer-checked:after:translate-x-10
              peer-checked:after:content-['🌙']
              after:shadow-md after:text-lg
              relative
            "
          ></div>
        </label>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export const useTheme = () => useContext(ThemeContext);
