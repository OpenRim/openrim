import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useTheme from '@hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="d-flex flex-column min-vh-100" data-theme={theme}>
      <Header />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
