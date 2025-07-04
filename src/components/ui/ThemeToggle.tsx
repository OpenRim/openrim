import React from 'react';
import { Sun, Moon } from 'lucide-react';
import useTheme from '@hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-link text-decoration-none" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
