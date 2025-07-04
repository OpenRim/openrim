import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Lightbulb, GitPullRequest } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{t('nav.about')} OpenRim</h1>
          <p className="lead">{t('about.mission')}</p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Users size={48} className="text-primary mb-3" />
                <h3>Collaboration</h3>
                <p>{t('about.values.collaboration')}</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Lightbulb size={48} className="text-primary mb-3" />
                <h3>Transparency</h3>
                <p>{t('about.values.transparency')}</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <GitPullRequest size={48} className="text-primary mb-3" />
                <h3>Community</h3>
                <p>{t('about.values.community')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenRim Story (Placeholder) */}
      <section className="story-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">The OpenRim Story</h2>
          <p className="text-center">[Placeholder for OpenRim&apos;s history and milestones]</p>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Meet the Team</h2>
          <p className="text-center">[Placeholder for team members and key contributors]</p>
        </div>
      </section>

      {/* Statistics (Placeholder) */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Impact in Numbers</h2>
          <p className="text-center">[Placeholder for project statistics like total projects, contributors, commits]</p>
        </div>
      </section>
    </div>
  );
};

export default About;
