import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Users, Twitter, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{t('contact.title')}</h1>
          <p className="lead">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Reach Out to Us</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Mail size={48} className="text-primary mb-3" />
                <h3>{t('contact.general_inquiries')}</h3>
                <p>Email: info@openrim.org</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Users size={48} className="text-primary mb-3" />
                <h3>{t('contact.partnership_opportunities')}</h3>
                <p>Email: partnerships@openrim.org</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Twitter size={48} className="text-primary mb-3" />
                <h3>{t('contact.media_contact')}</h3>
                <p>Email: media@openrim.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="community-channels-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">{t('contact.community_support')}</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Github size={48} className="text-primary mb-3" />
                <h3>GitHub Discussions</h3>
                <p>Join the conversation on our GitHub discussions forum.</p>
                <a href="https://github.com/openrim/discussions" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to Discussions</a>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <Twitter size={48} className="text-primary mb-3" />
                <h3>Discord Community</h3>
                <p>Chat with us and other community members on Discord.</p>
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
              <h2 className="text-center mb-4">{t('contact.social_media')}</h2>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com/openrim" target="_blank" rel="noopener noreferrer" className="text-dark"><Github size={40} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark"><Twitter size={40} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark"><Linkedin size={40} /></a>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h2 className="text-center mb-4">{t('contact.newsletter_signup')}</h2>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
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
