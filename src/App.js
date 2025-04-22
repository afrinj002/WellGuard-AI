import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeDashboard from './components/EmployeeDashboard';
import HRDashboard from './components/HRDashboard';
import Consent from './components/Consent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'consent':
        return <Consent onAgree={() => setCurrentPage('login')} />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      case 'employee':
        return <EmployeeDashboard />;
      case 'hr':
        return <HRDashboard />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
};

export default App;