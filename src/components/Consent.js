import React from 'react';

const Consent = ({ onAgree }) => (
  <div className="home">
    <h1 className="home-title">Consent Interface</h1>
    <p className="home-description">
      WellGuard AI helps proactively manage employee well-being by analyzing workplace patterns. We value your privacy. Your data will be kept secure and used only to provide personalized insights. Our advanced algorithms process anonymized data to identify trends and offer tailored wellness recommendations, ensuring your individual privacy is protected at all times. We adhere to strict data protection standards, including regular security audits and encryption protocols, to safeguard your information. By agreeing, you allow us to monitor workplace interactions to deliver real-time nudges and insights that promote a healthier work environment. You have the right to withdraw consent at any time through your account settings, and we will promptly delete your data upon request, in compliance with applicable privacy laws. This service aims to empower you with tools to manage stress and burnout, contributing to both personal well-being and organizational productivity.
    </p>
    <button className="home-button" onClick={onAgree}>
      I Agree
    </button>
  </div>
);

export default Consent;