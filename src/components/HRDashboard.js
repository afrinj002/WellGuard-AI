import React from 'react';
import mockData from '../data/mockData';

const HRDashboard = () => (
  <div className="hr-dashboard">
    <h1 className="hr-title">HR Admin Dashboard</h1>
    <div className="hr-grid">
      <div className="hr-card">
        <h2 className="hr-card-title">Department Burnout Heatmap</h2>
        <table className="hr-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Risk Level</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {mockData.hrDashboard.departments.map(dept => (
              <tr key={dept.name}>
                <td>{dept.name}</td>
                <td>{dept.riskLevel}</td>
                <td>{dept.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hr-card">
        <h2 className="hr-card-title">Suggested Actions</h2>
        {mockData.hrDashboard.suggestedActions.map(action => (
          <div key={action.id} className="hr-action">
            <p>{action.action}</p>
            <button className="hr-action-button">Implement</button>
          </div>
        ))}
      </div>
      <div className="hr-card">
        <h2 className="hr-card-title">Team Analytics</h2>
        <img
          src="https://via.placeholder.com/400x200.png?text=HR+Analytics+Heatmap"
          alt="HR Analytics"
          className="hr-image"
        />
      </div>
    </div>
  </div>
);

export default HRDashboard;