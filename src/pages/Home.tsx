import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';
import Button from '@components/ui/Button';
import useTheme from '@hooks/useTheme';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center py-5 text-white">
        <div className="container">
          <img 
            src={theme === 'light' ? '/assets/logo-light.svg' : '/assets/logo-light.svg'} 
            alt="OpenRim Logo" 
            className="img-fluid mb-4" 
            style={{ maxWidth: '200px' }} 
          />
          <h1 className="display-4 fw-bold mb-3">{t('home.hero_title')}</h1>
          <p className="lead mb-4">{t('home.hero_subtitle')}</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" size="lg" href="#">
              {t('home.cta_button')}
            </Button>
            <Button variant="outline-light" size="lg" href="/projects">
              {t('home.cta_secondary')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why OpenRim?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Github size={48} className="text-primary mb-3" />
                <h3>{t('home.features.collaboration')}</h3>
                <p>Leverage the power of collective intelligence to build robust and innovative solutions.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Github size={48} className="text-primary mb-3" />
                <h3>{t('home.features.transparency')}</h3>
                <p>Our processes and code are open for everyone to see, fostering trust and accountability.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Github size={48} className="text-primary mb-3" />
                <h3>{t('home.features.innovation')}</h3>
                <p>Drive technological advancements through continuous experimentation and community-driven ideas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Impact</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h3 className="display-4 fw-bold text-primary">10+</h3>
              <p className="lead">{t('home.stats.projects')}</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="display-4 fw-bold text-primary">50+</h3>
              <p className="lead">{t('home.stats.contributors')}</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="display-4 fw-bold text-primary">1000+</h3>
              <p className="lead">{t('home.stats.commits')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section (Placeholder) */}
      <section className="featured-projects-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Projects</h2>
          <p className="text-center">[Placeholder for featured projects grid]</p>
        </div>
      </section>

      {/* Community Testimonials (Placeholder) */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">What Our Community Says</h2>
          <p className="text-center">[Placeholder for community testimonials]</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
