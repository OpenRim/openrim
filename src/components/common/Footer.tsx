import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link to="/" className="d-flex align-items-center mb-2 text-decoration-none">
              <img src="/assets/logo-light.svg" alt="OpenRim Logo" height="30" className="me-2" />
              <span className="fs-5 text-white">OpenRim</span>
            </Link>
            <p className="text-white-50">{t('home.hero_subtitle')}</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-white">Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/projects" className="nav-link p-0 text-white-50">{t('nav.projects')}</Link></li>
              <li className="nav-item mb-2"><Link to="/contribute" className="nav-link p-0 text-white-50">{t('nav.contribute')}</Link></li>
              <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-white-50">{t('nav.about')}</Link></li>
              <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-white-50">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-white">Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-white-50 d-flex align-items-center"><Github size={18} className="me-2" /> GitHub</a></li>
              <li className="nav-item mb-2"><a href="#" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-white-50 d-flex align-items-center"><Twitter size={18} className="me-2" /> Twitter</a></li>
              <li className="nav-item mb-2"><a href="#" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-white-50 d-flex align-items-center"><Linkedin size={18} className="me-2" /> LinkedIn</a></li>
            </ul>
            <a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mt-3">
              <Github size={18} className="me-2" /> Fork us on GitHub
            </a>
          </div>
        </div>
        <hr className="text-white-50" />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0 text-white-50">&copy; {new Date().getFullYear()} OpenRim. All rights reserved.</p>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
