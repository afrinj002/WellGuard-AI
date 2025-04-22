import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import mockData from '../data/mockData';

const HRDashboard = () => {
  const heatmapRef = useRef(null);
  const heatmapInstance = useRef(null);
  const wellnessRef = useRef(null);
  const wellnessInstance = useRef(null);
  const teamRef = useRef(null);
  const teamInstance = useRef(null);

  useEffect(() => {
    // Heatmap (Department Burnout Trends)
    const heatmapCtx = heatmapRef.current.getContext('2d');
    if (heatmapInstance.current) {
      heatmapInstance.current.destroy();
    }
    const heatmapData = {
      labels: mockData.hrDashboard.departments.map(d => d.name),
      datasets: [{
        label: 'Burnout Levels',
        data: mockData.hrDashboard.departments.map(d => d.score),
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          return value > 70 ? '#ff6384' : value > 40 ? '#36a2eb' : '#ffcd56';
        },
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }]
    };
    heatmapInstance.current = new Chart(heatmapCtx, {
      type: 'bar',
      data: heatmapData,
      options: {
        indexAxis: 'y',
        scales: {
          x: { display: false },
          y: { beginAtZero: true, max: 100, ticks: { color: '#666' } }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        maintainAspectRatio: false
      }
    });

    // Wellness Tracker
    const wellnessCtx = wellnessRef.current.getContext('2d');
    if (wellnessInstance.current) {
      wellnessInstance.current.destroy();
    }
    const wellnessData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Wellness Score',
        data: [30, 45, 60, 75, 90],
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.1
      }]
    };
    wellnessInstance.current = new Chart(wellnessCtx, {
      type: 'line',
      data: wellnessData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { display: false } },
          x: { ticks: { font: { size: 8 }, color: '#666' } }
        }
      }
    });

    // Team Drilldown (Bar Chart)
    const teamCtx = teamRef.current.getContext('2d');
    if (teamInstance.current) {
      teamInstance.current.destroy();
    }
    const teamData = {
      labels: mockData.hrDashboard.teamMembers.map(m => m.name),
      datasets: [{
        label: 'Burnout Level',
        data: mockData.hrDashboard.teamMembers.map(m => 
          m.level === 'High' ? 80 : m.level === 'Medium' ? 50 : 20
        ),
        backgroundColor: (context) => {
          const value = context.dataset.data[context.dataIndex];
          return value > 70 ? '#ff6384' : value > 40 ? '#36a2eb' : '#ffcd56';
        },
        borderWidth: 1
      }]
    };
    teamInstance.current = new Chart(teamCtx, {
      type: 'bar',
      data: teamData,
      options: {
        indexAxis: 'y',
        scales: {
          x: { display: false, max: 100 },
          y: { ticks: { color: '#666' } }
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        maintainAspectRatio: false
      }
    });

    // Cleanup
    return () => {
      if (heatmapInstance.current) heatmapInstance.current.destroy();
      if (wellnessInstance.current) wellnessInstance.current.destroy();
      if (teamInstance.current) teamInstance.current.destroy();
    };
  }, []);

  return (
    <div className="hr-dashboard">
      <h1 className="hr-title">HR Admin</h1>
      <div className="hr-grid">
        <div className="hr-card">
          <h2 className="hr-card-title">Organization Burnout Trends <span className="hr-badge">Corp-wide</span></h2>
          <div className="hr-heatmap">
            <canvas ref={heatmapRef} width="300" height="150"></canvas>
          </div>
          <div className="hr-department-labels">
            <span>Departments A, B, C, D</span>
          </div>
        </div>
        <div className="hr-card">
          <h2 className="hr-card-title">Wellness Tracker</h2>
          <div className="hr-wellness-graph">
            <canvas ref={wellnessRef} width="300" height="150"></canvas>
          </div>
        </div>
        <div className="hr-card">
          <h2 className="hr-card-title">Team Drilldown</h2>
          <div className="hr-team-graph">
            <canvas ref={teamRef} width="300" height="150"></canvas>
          </div>
        </div>
        <div className="hr-card">
          <h2 className="hr-card-title">Suggested Actions</h2>
          <div className="hr-suggested-actions">
            {mockData.hrDashboard.suggestedActions.map((action, index) => (
              <button key={index} className="hr-action-button">{action.action}</button>
            ))}
          </div>
        </div>
      </div>
      <p className="hr-subtitle">Burnout trends dashboard</p>

      {/* Reports Export Section */}
      <div className="hr-reports">
        <h2 className="hr-reports-title">Reports Export</h2>
        <div className="hr-reports-search">
          <input type="text" placeholder="Search..." className="hr-search-input" />
          <button className="hr-search-button">Search</button>
          <label className="hr-step-fuse">
            <input type="checkbox" /> Step Fuse
          </label>
        </div>
        <div className="hr-reports-content">
          <div className="hr-reports-menu">
            <div className="hr-reports-category">
              <input type="checkbox" id="employeeData" />
              <label htmlFor="employeeData">Employee Data</label>
              <button className="hr-download-button">Download</button>
            </div>
            <div className="hr-reports-category">
              <input type="checkbox" id="payrollSummaries" />
              <label htmlFor="payrollSummaries">Payroll Summaries</label>
              <button className="hr-download-button">Download</button>
            </div>
            <div className="hr-reports-category">
              <input type="checkbox" id="attendanceLogs" />
              <label htmlFor="attendanceLogs">Attendance Logs</label>
              <button className="hr-download-button">Download</button>
            </div>
            <div className="hr-reports-category">
              <input type="checkbox" id="trainingLogs" />
              <label htmlFor="trainingLogs">Training Logs</label>
              <button className="hr-download-button">Download</button>
            </div>
            <div className="hr-reports-category">
              <input type="checkbox" id="coukEss" />
              <label htmlFor="coukEss">Couk Ess</label>
              <button className="hr-download-button">Download</button>
            </div>
          </div>
          <div className="hr-export-history">
            <h3 className="hr-export-title">Export History</h3>
            <table className="hr-export-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mockData.hrDashboard.exportHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.type}</td>
                    <td>{item.status}</td>
                    <td>{item.progress}</td>
                    <td><button className="hr-download-button">Download</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;