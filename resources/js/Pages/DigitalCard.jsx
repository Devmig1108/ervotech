import React from 'react';
import '../../css/DigitalCard.css';

const DigitalCard = () => {
  return (
    <div className="modern-page-wrapper">
      
      {/* NEW: Fixed Background Layer (Prevents scroll breaking) */}
      <div className="ambient-background">
        <div className="ambient-glow cyan-glow"></div>
        <div className="ambient-glow blue-glow"></div>
      </div>

      <div className="bento-card">
        
        {/* Header Module */}
        <div className="bento-module header-module">
          <img 
            src="/images/Logo2.png" 
            alt="Ervotech" 
            className="brand-logo"
          />
          <div className="profile-text">
            <h1 className="name">Miguel Flores</h1>
            <p className="title">Owner Technical Director</p>
          </div>
        </div>

        {/* Primary Action Module */}
        <div className="bento-module cta-module">
          <a href="/download-vcard" download="Miguel_Flores_Ervotech.vcf" className="download-btn">
            <div className="btn-content">
              <span>Save to Contacts</span>
              <span className="download-icon">↓</span>
            </div>
            <div className="animated-border"></div>
          </a>
        </div>

        {/* Contact Grid Modules */}
        <div className="contact-grid">
          
          <a href="tel:9153410376" className="bento-module contact-item">
            <div className="item-icon phone-icon"></div>
            <div className="item-details">
              <span className="item-label">Direct Line</span>
              <span className="item-value">915.341.0376</span>
            </div>
          </a>

          <a href="mailto:miguel@ervotechep.com" className="bento-module contact-item">
            <div className="item-icon email-icon"></div>
            <div className="item-details">
              <span className="item-label">Email</span>
              <span className="item-value truncate">miguel@ervotechep.com</span>
            </div>
          </a>

          <a href="https://www.ervotechep.com" target="_blank" rel="noreferrer" className="bento-module contact-item full-width">
            <div className="item-icon web-icon"></div>
            <div className="item-details">
              <span className="item-label">Website</span>
              <span className="item-value">ervotechep.com</span>
            </div>
            <div className="location-badge">El Paso, TX</div>
          </a>

        </div>

      </div>
    </div>
  );
};

export default DigitalCard;