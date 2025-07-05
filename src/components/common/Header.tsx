import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import useTheme from '@hooks/useTheme';
import useLanguage from '@hooks/useLanguage';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <header className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={theme === 'light' ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
            alt="OpenRim Logo"
            height="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {t('nav.home')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {t('nav.about')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                {t('nav.projects')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contribute">
                {t('nav.contribute')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <select
              className="form-select form-select-sm me-2"
              value={currentLanguage}
              onChange={handleLanguageChange}
              aria-label="Language switcher"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
            <button className="btn btn-link text-decoration-none" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
