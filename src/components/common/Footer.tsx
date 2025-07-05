import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Twitter, Linkedin } from 'lucide-react';
import useTheme from '@hooks/useTheme';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="footer py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link to="/" className="d-flex align-items-center mb-2 text-decoration-none">
              <img 
                src={theme === 'light' ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'} 
                alt="OpenRim Logo" 
                height="30" 
                className="me-2" 
              />
              <span className="fs-5" style={{ color: 'var(--color-footer-text)' }}>OpenRim</span>
            </Link>
            <p style={{ color: 'var(--color-footer-text)' }} className="opacity-75">{t('home.hero_subtitle')}</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 style={{ color: 'var(--color-footer-text)' }}>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/projects" className="nav-link p-0 opacity-75" style={{ color: 'var(--color-footer-text)' }}>{t('nav.projects')}</Link></li>
              <li className="nav-item mb-2"><Link to="/contribute" className="nav-link p-0 opacity-75" style={{ color: 'var(--color-footer-text)' }}>{t('nav.contribute')}</Link></li>
              <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 opacity-75" style={{ color: 'var(--color-footer-text)' }}>{t('nav.about')}</Link></li>
              <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 opacity-75" style={{ color: 'var(--color-footer-text)' }}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 style={{ color: 'var(--color-footer-text)' }}>Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" className="nav-link p-0 opacity-75 d-flex align-items-center" style={{ color: 'var(--color-footer-text)' }}><Github size={18} className="me-2" /> GitHub</a></li>
              <li className="nav-item mb-2"><a href="#" target="_blank" rel="noopener noreferrer" className="nav-link p-0 opacity-75 d-flex align-items-center" style={{ color: 'var(--color-footer-text)' }}><Twitter size={18} className="me-2" /> Twitter</a></li>
              <li className="nav-item mb-2"><a href="#" target="_blank" rel="noopener noreferrer" className="nav-link p-0 opacity-75 d-flex align-items-center" style={{ color: 'var(--color-footer-text)' }}><Linkedin size={18} className="me-2" /> LinkedIn</a></li>
            </ul>
            <a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-3">
              <Github size={18} className="me-2" /> Fork us on GitHub
            </a>
          </div>
        </div>
        <hr style={{ borderColor: 'var(--color-footer-text)', opacity: 0.5 }} />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0 opacity-75" style={{ color: 'var(--color-footer-text)' }}>&copy; {new Date().getFullYear()} OpenRim. All rights reserved.</p>
          <button className="btn btn-outline-primary btn-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
