import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => (
  <div className="sidebar">
    <h2 className="sidebar-title">WellGuard AI</h2>
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
    </div>
  </div>
);

export default Navbar;