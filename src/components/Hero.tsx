import React, { useState } from 'react';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/assets/images/me.png" className="me" alt="Picture of Marah Salahat" />
          </div>
        </div>
      </div>
      <div className="hero-detail">
        <h1 className="animated-title">I'm <span className="typed-name">Marah Salahat</span></h1>
        <p className="description">
          A Computer Systems Engineer with a focus on Frontend Development, Data Science, and Mobile Apps. I craft responsive UIs and smart systems using React, Sass, Webpack, Node.js, and Flutter. I also analyze data with tools like Tableau, Power BI, and machine learning models. I'm driven by clean code, elegant design, and continuous growth.
        </p>
      </div>
      <div className="contact-section">
        <div className="contact-icons">
          <div
            className="contact-item"
            onClick={() => copyToClipboard('0597191516', 'Phone')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && copyToClipboard('0597191516', 'Phone')}
            aria-label="Copy phone number to clipboard"
          >
            <img src="assets/images/phone.png" alt="Phone" className="contact-icon" />
            {copied === 'Phone' && <span className="copied-feedback">Copied!</span>}
          </div>
          <div
            className="contact-item"
            onClick={() => copyToClipboard('marah.salahat2001@gmail.com', 'Email')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && copyToClipboard('marah.salahat2001@gmail.com', 'Email')}
            aria-label="Copy email to clipboard"
          >
            <img src="assets/images/email.png" alt="Email" className="contact-icon" />
            {copied === 'Email' && <span className="copied-feedback">Copied!</span>}
          </div>
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/marah-salahat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <img src="assets/images/in.png" alt="LinkedIn" className="contact-icon" />
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://github.com/MarahSalahat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
            >
              <img src="assets/images/github.png" alt="GitHub" className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;