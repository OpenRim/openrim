import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Users, Twitter, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section py-5 text-center" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--color-heading)' }}>{t('contact.title')}</h1>
          <p className="lead" style={{ color: 'var(--color-text-secondary)' }}>{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>Reach Out to Us</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Mail size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>{t('contact.general_inquiries')}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Email: info@openrim.org</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Users size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>{t('contact.partnership_opportunities')}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Email: partnerships@openrim.org</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-secondary)' }}>
                <Twitter size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>{t('contact.media_contact')}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Email: media@openrim.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="community-channels-section py-5" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--color-heading)' }}>{t('contact.community_support')}</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-primary)' }}>
                <Github size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>GitHub Discussions</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Join the conversation on our GitHub discussions forum.</p>
                <a href="https://github.com/openrim/discussions" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to Discussions</a>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background-primary)' }}>
                <Twitter size={48} className="mb-3" style={{ color: 'var(--color-heading)' }} />
                <h3 style={{ color: 'var(--color-heading)' }}>Discord Community</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Chat with us and other community members on Discord.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Join Discord</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="social-newsletter-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h2 className="text-center mb-4" style={{ color: 'var(--color-heading)' }}>{t('contact.social_media')}</h2>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}><Github size={40} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}><Twitter size={40} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}><Linkedin size={40} /></a>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h2 className="text-center mb-4" style={{ color: 'var(--color-heading)' }}>{t('contact.newsletter_signup')}</h2>
              <form>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email"
                    style={{ 
                      backgroundColor: 'var(--color-background-secondary)', 
                      borderColor: 'var(--color-border)', 
                      color: 'var(--color-text-primary)' 
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
