import React from 'react';

const Signup = () => (
  <div className="auth-page">
    <div className="auth-container">
      <h1 className="auth-title">Sign Up for WellGuard AI</h1>
      <form>
        <div className="auth-form-group">
          <label className="auth-label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="auth-input" placeholder="Enter your full name" />
        </div>
        <div className="auth-form-group">
          <label className="auth-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="auth-input" placeholder="Enter your email" />
        </div>
        <div className="auth-form-group">
          <label className="auth-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="auth-input" placeholder="Create a password" />
        </div>
        <button
          type="button"
          className="auth-button"
          onClick={() => alert('Signup functionality is static for prototype')}
        >
          Sign Up
        </button>
      </form>
      <p className="auth-text">
        Already have an account? <button onClick={() => window.location.hash = '#login'} className="auth-link">Login</button>
      </p>
    </div>
  </div>
);

export default Signup;