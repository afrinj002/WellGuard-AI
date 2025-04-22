import React from 'react';
import logo from '../assets/logo.png';

const Home = ({ setCurrentPage }) => (
  <div className="home">
    <header className="home-header">
      <img src={logo} alt="WellGuard AI Logo" className="home-logo" />
      <h1 className="home-title">Welcome to WellGuard AI</h1>
    </header>
    <p className="home-description">
      WellGuard AI proactively detects and mitigates employee burnout by analyzing behavioral signals from workplace tools. Empower your workforce with personalized nudges and real-time HR insights.
    </p>
    <div className="home-grid">
      <div className="home-card">
        <h2 className="home-card-title">For Employees</h2>
        <p className="home-card-text">Receive tailored wellness nudges and track your burnout risk confidentially.</p>
      </div>
      <div className="home-card">
        <h2 className="home-card-title">For HR Teams</h2>
        <p className="home-card-text">Gain real-time visibility into team health with burnout heatmaps and analytics.</p>
      </div>
      <div className="home-card">
        <h2 className="home-card-title">For Leadership</h2>
        <p className="home-card-text">Reduce attrition and boost productivity with actionable insights.</p>
      </div>
    </div>
    <button className="home-button" onClick={() => setCurrentPage('consent')}>
      Get Started
    </button>
  </div>
);

export default Home;