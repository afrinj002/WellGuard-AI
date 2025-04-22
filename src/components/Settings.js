import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('updateProfile');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Add logout logic here (e.g., clear session, redirect)
    console.log("Logging out...");
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="settings-page">
      <div className="settings-main-content">
        <h1 className="settings-title">Settings</h1>
        <div className="settings-container">
          <div className="settings-tabs">
            <button
              className={activeTab === 'updateProfile' ? 'settings-tab active' : 'settings-tab'}
              onClick={() => setActiveTab('updateProfile')}
            >
              Update Profile
            </button>
            <button
              className={activeTab === 'help' ? 'settings-tab active' : 'settings-tab'}
              onClick={() => setActiveTab('help')}
            >
              Help
            </button>
            <button
              className={activeTab === 'contactUs' ? 'settings-tab active' : 'settings-tab'}
              onClick={() => setActiveTab('contactUs')}
            >
              Contact Us
            </button>
            <button
              className={activeTab === 'logout' ? 'settings-tab active' : 'settings-tab'}
              onClick={() => setActiveTab('logout')}
            >
              Logout
            </button>
          </div>
          <div className="settings-content">
            {activeTab === 'updateProfile' && (
              <div className="settings-section">
                <p className="settings-description">Update your personal details and preferences below.</p>
                <div className="settings-field">
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" className="settings-input" />
                </div>
                <div className="settings-field">
                  <label>Email</label>
                  <input type="email" placeholder="john.doe@example.com" className="settings-input" />
                </div>
                <h2 className="settings-section-title">Integration</h2>
                <div className="settings-option">
                  <input type="checkbox" id="socialIntegration" />
                  <label htmlFor="socialIntegration">Social Integration</label>
                </div>
                <div className="settings-option">
                  <input type="checkbox" id="integrationOptIns" />
                  <label htmlFor="integrationOptIns">Integration Opt-Ins</label>
                </div>
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
                <button className="settings-submit">Save Changes</button>
              </div>
            )}
            {activeTab === 'help' && (
              <div className="settings-section">
                <p className="settings-description">
                  Find answers to common questions or learn how to use WellGuard AI effectively. Check our
                  <a href="/help" className="settings-link"> Help Center</a> for detailed guides and FAQs.
                </p>
                <p className="settings-description">
                  If you need further assistance, please refer to the Contact Us section.
                </p>
              </div>
            )}
            {activeTab === 'contactUs' && (
              <div className="settings-section">
                <p className="settings-description">
                  Reach out to our support team for any issues or inquiries. We’re here to help!
                </p>
                <div className="settings-field">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter subject" className="settings-input" />
                </div>
                <div className="settings-field">
                  <label>Message</label>
                  <textarea placeholder="Enter your message" className="settings-input settings-textarea"></textarea>
                </div>
                <button className="settings-submit">Send Message</button>
              </div>
            )}
            {activeTab === 'logout' && (
              <div className="settings-section">
                <p className="settings-description">Click the button below to end your session.</p>
                <button className="settings-logout" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLogoutConfirm && (
        <div className="settings-popup">
          <div className="settings-popup-content">
            <h3 className="settings-popup-title">Confirm Logout</h3>
            <p className="settings-popup-text">
              Are you sure you want to log out? This will end your current session, and you’ll need to
              log in again to continue.
            </p>
            <div className="settings-popup-actions">
              <button className="settings-popup-confirm" onClick={confirmLogout}>Yes, Logout</button>
              <button className="settings-popup-cancel" onClick={cancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;