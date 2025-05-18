import React, { useState } from 'react';
import '../styles/contact-section.scss';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000); 
    });
  };

  return (
    <section id="contact-section" className="contact">
      <h2>Contact me</h2>
      <div className="contact-icons">

        {/* Phone: clickable icon only */}
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

        {/* Email: clickable icon only */}
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

        {/* LinkedIn */}
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

        {/* GitHub */}
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
    </section>
  );
};

export default Contact;