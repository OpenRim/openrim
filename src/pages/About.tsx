import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Lightbulb, GitPullRequest } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--color-heading)' }}>{t('nav.about')} OpenRim</h1>
          <p className="lead" style={{ color: 'var(--color-text-secondary)' }}>{t('about.mission')}</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Our Core Values</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Users size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>Collaboration</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{t('about.values.collaboration')}</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Lightbulb size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>Transparency</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{t('about.values.transparency')}</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <GitPullRequest size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>Community</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{t('about.values.community')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenRim Story (Placeholder) */}
      <section className="story-section py-5" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>The OpenRim Story</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for OpenRim&apos;s history and milestones]</p>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Meet the Team</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for team members and key contributors]</p>
        </div>
      </section>

      {/* Statistics (Placeholder) */}
      <section className="stats-section py-5" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Our Impact in Numbers</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for project statistics like total projects, contributors, commits]</p>
        </div>
      </section>
    </div>
  );
};

export default About;
