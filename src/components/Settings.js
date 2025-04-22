import React from 'react';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="main-content">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-container">
          <div className="settings-section">
            <h2 className="settings-section-title">Profile</h2>
            <div className="settings-field">
              <label>Name</label>
              <input type="text" placeholder="John Doe" className="settings-input" />
            </div>
            <div className="settings-field">
              <label>Email</label>
              <input type="email" placeholder="john.doe@example.com" className="settings-input" />
            </div>
          </div>
          <div className="settings-section">
            <h2 className="settings-section-title">Integration</h2>
            <div className="settings-option">
              <input type="checkbox" id="socialIntegration" />
              <label htmlFor="socialIntegration">Social Integration</label>
            </div>
            <div className="settings-option">
              <input type="checkbox" id="integrationOptIns" />
              <label htmlFor="integrationOptIns">Integration Opt-Ins</label>
            </div>
          </div>
          <div className="settings-section">
            <h2 className="settings-section-title">Role Selection</h2>
            <div className="settings-option">
              <input type="radio" name="role" id="wellnessEnabled" />
              <label htmlFor="wellnessEnabled">Wellness enabled</label>
            </div>
            <div className="settings-option">
              <input type="radio" name="role" id="teamStatus" />
              <label htmlFor="teamStatus">Team status</label>
            </div>
            <div className="settings-option">
              <input type="radio" name="role" id="presentationView" />
              <label htmlFor="presentationView">Presentation view</label>
            </div>
            <div className="settings-option">
              <input type="radio" name="role" id="customSettings" />
              <label htmlFor="customSettings">Custom settings</label>
            </div>
            <div className="settings-option">
              <input type="radio" name="role" id="caregiver" />
              <label htmlFor="caregiver">Caregiver</label>
            </div>
            <div className="settings-option">
              <input type="radio" name="role" id="user" />
              <label htmlFor="user">User</label>
            </div>
          </div>
          <button className="settings-logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;