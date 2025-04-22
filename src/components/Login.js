import React from 'react';

const Login = () => (
  <div className="auth-page">
    <div className="auth-container">
      <h1 className="auth-title">Login to WellGuard AI</h1>
      <form>
        <div className="auth-form-group">
          <label className="auth-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="auth-input" placeholder="Enter your email" />
        </div>
        <div className="auth-form-group">
          <label className="auth-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="auth-input" placeholder="Enter your password" />
        </div>
        <button
          type="button"
          className="auth-button"
          onClick={() => alert('Login functionality is static for prototype')}
        >
          Login
        </button>
      </form>
      <p className="auth-text">
        Don't have an account? <button onClick={() => window.location.hash = '#signup'} className="auth-link">Sign Up</button>
      </p>
    </div>
  </div>
);

export default Login;