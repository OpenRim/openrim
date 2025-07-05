import React from 'react';
import { useTranslation } from 'react-i18next';
import { Book, Code, Users } from 'lucide-react';

const Contribute: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contribute-page">
      {/* Hero Section */}
      <section className="hero-section py-5 text-center" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--color-heading)' }}>{t('contribute.title')}</h1>
          <p className="lead" style={{ color: 'var(--color-text-secondary)' }}>{t('contribute.subtitle')}</p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>{t('contribute.getting_started')}</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Book size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>{t('contribute.code_of_conduct')}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Read our code of conduct to understand our community standards.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Code size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>{t('contribute.guidelines')}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Follow our contribution guidelines for a smooth contribution process.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Users size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>Community Channels</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Join our Discord or Slack channels to connect with other contributors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Setup (Placeholder) */}
      <section className="dev-setup-section py-5" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Development Setup</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for development environment setup instructions]</p>
        </div>
      </section>

      {/* Issue Reporting (Placeholder) */}
      <section className="issue-reporting-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Issue Reporting Process</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for how to report issues]</p>
        </div>
      </section>

      {/* Pull Request Guidelines (Placeholder) */}
      <section className="pr-guidelines-section py-5" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Pull Request Guidelines</h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>[Placeholder for pull request submission guidelines]</p>
        </div>
      </section>
    </div>
  );
};

export default Contribute;
