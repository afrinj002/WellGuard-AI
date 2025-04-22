import React from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ currentPage, setCurrentPage }) => (
  <div className="sidebar">
    <div className="sidebar-logo">
      <img src={logo} alt="WellGuard AI Logo" className="sidebar-logo-img" />
      <h2 className="sidebar-title">WellGuard AI</h2>
    </div>
    <div className="sidebar-menu">
      <button
        className={currentPage === 'home' ? 'active' : ''}
        onClick={() => setCurrentPage('home')}
      >
        Home
      </button>
      <button
        className={currentPage === 'login' ? 'active' : ''}
        onClick={() => setCurrentPage('login')}
      >
        Login
      </button>
      <button
        className={currentPage === 'signup' ? 'active' : ''}
        onClick={() => setCurrentPage('signup')}
      >
        Sign Up
      </button>
      <button
        className={currentPage === 'employee' ? 'active' : ''}
        onClick={() => setCurrentPage('employee')}
      >
        Employee Dashboard
      </button>
      <button
        className={currentPage === 'hr' ? 'active' : ''}
        onClick={() => setCurrentPage('hr')}
      >
        HR Dashboard
      </button>
      <button
        className={currentPage === 'settings' ? 'active' : ''}
        onClick={() => setCurrentPage('settings')}
      >
        Settings
      </button>
    </div>
  </div>
);

export default Navbar;