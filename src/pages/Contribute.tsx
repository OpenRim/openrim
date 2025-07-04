import React from 'react';
import { useTranslation } from 'react-i18next';
import { Book, Code, Users } from 'lucide-react';

const Contribute: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contribute-page">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{t('contribute.title')}</h1>
          <p className="lead">{t('contribute.subtitle')}</p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">{t('contribute.getting_started')}</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Book size={48} className="text-primary mb-3" />
                <h3>{t('contribute.code_of_conduct')}</h3>
                <p>Read our code of conduct to understand our community standards.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Code size={48} className="text-primary mb-3" />
                <h3>{t('contribute.guidelines')}</h3>
                <p>Follow our contribution guidelines for a smooth contribution process.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Users size={48} className="text-primary mb-3" />
                <h3>Community Channels</h3>
                <p>Join our Discord or Slack channels to connect with other contributors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Setup (Placeholder) */}
      <section className="dev-setup-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Development Setup</h2>
          <p className="text-center">[Placeholder for development environment setup instructions]</p>
        </div>
      </section>

      {/* Issue Reporting (Placeholder) */}
      <section className="issue-reporting-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Issue Reporting Process</h2>
          <p className="text-center">[Placeholder for how to report issues]</p>
        </div>
      </section>

      {/* Pull Request Guidelines (Placeholder) */}
      <section className="pr-guidelines-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Pull Request Guidelines</h2>
          <p className="text-center">[Placeholder for pull request submission guidelines]</p>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
