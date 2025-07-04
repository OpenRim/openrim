import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
