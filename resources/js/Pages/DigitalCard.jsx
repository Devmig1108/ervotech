import React from 'react';
import '../../css/styles.css'; // Make sure this path matches your file structure

const DigitalCard = () => {
  return (
    <div className="digital-card-container">
      
      {/* Hero / Identity */}
      <div className="identity-section">
        <img 
          src="/images/logo2.png" // Ensure this image is in your public/images folder
          alt="Ervotech Logo" 
          className="logo-image"
        />
        <h1 className="name-title">Miguel Flores</h1>
        <p className="job-title">Owner</p>
      </div>

      {/* Quick Action Icons */}
      <div className="quick-actions">
        <a href="tel:9153410376" className="action-button-group">
          <div className="icon-circle">
            <span className="icon">📞</span>
          </div>
          <span className="icon-label">Call</span>
        </a>
        
        <a href="mailto:miguel@ervotechep.com" className="action-button-group">
          <div className="icon-circle">
            <span className="icon">✉️</span>
          </div>
          <span className="icon-label">Email</span>
        </a>

        <a href="https://www.ervotechep.com" target="_blank" rel="noreferrer" className="action-button-group">
          <div className="icon-circle">
            <span className="icon">🌐</span>
          </div>
          <span className="icon-label">Website</span>
        </a>
      </div>

      {/* Primary CTA: Save Contact */}
      <div className="cta-section">
        <a 
          href="/miguel-flores.vcf" 
          download="Miguel_Flores_Ervotech.vcf"
          className="save-contact-btn"
        >
          Save Contact
        </a>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <h3>Website as a Service</h3>
        </div>
        <div className="service-card">
          <h3>Local SEO</h3>
        </div>
        <div className="service-card full-width">
          <h3>High-Performance Web Design</h3>
        </div>
      </div>

    </div>
  );
};

export default DigitalCard;