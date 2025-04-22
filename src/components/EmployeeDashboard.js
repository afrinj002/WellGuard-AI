import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import mockData from '../data/mockData';

const EmployeeDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: mockData.employee.trends.map(t => t.date),
        datasets: [{
          data: mockData.employee.trends.map(t => t.score),
          backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Burnout Trends (Last 7 Days)' }
        }
      }
    });

    // Cleanup function to destroy chart when component unmounts or trends change
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [mockData.employee.trends]); // Dependency array to re-run only if trends change

  return (
    <div className="employee-dashboard">
      <h1 className="employee-title">Welcome, {mockData.employee.name}</h1>
      <div className="employee-grid">
        <div className="employee-card">
          <h2 className="employee-card-title">Your Burnout Score</h2>
          <p className="employee-score">{mockData.employee.burnoutScore}</p>
          <p className="employee-risk">Moderate Risk</p>
        </div>
        <div className="employee-card">
          <h2 className="employee-card-title">Recent Nudges</h2>
          {mockData.employee.nudges.map(nudge => (
            <div key={nudge.id} className="employee-nudge">
              <p>{nudge.message}</p>
              <div className="employee-nudge-buttons">
                <button className="employee-nudge-button">Helpful</button>
                <button className="employee-nudge-button">Not Helpful</button>
              </div>
            </div>
          ))}
        </div>
        <div className="employee-card">
          <h2 className="employee-card-title">Burnout Trends</h2>
          <div className="employee-chart">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;