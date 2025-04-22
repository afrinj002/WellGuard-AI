import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import mockData from '../data/mockData';

const EmployeeDashboard = () => {
  const gaugeRef = useRef(null);
  const gaugeInstance = useRef(null);
  const moodGraphRef = useRef(null);
  const moodGraphInstance = useRef(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Gauge Chart
    const gaugeCtx = gaugeRef.current.getContext('2d');
    if (gaugeInstance.current) {
      gaugeInstance.current.destroy();
    }
    const burnoutScore = mockData.employee.burnoutScore;
    gaugeInstance.current = new Chart(gaugeCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [burnoutScore, 100 - burnoutScore],
          backgroundColor: ['#ff6384', '#e0e0e0'],
          borderWidth: 0,
          circumference: 180,
          rotation: 270
        }]
      },
      options: {
        cutout: '75%',
        circumference: 180,
        rotation: 270,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        animation: { animateRotate: true }
      }
    });

    // Mood Graph
    const moodGraphCtx = moodGraphRef.current.getContext('2d');
    if (moodGraphInstance.current) {
      moodGraphInstance.current.destroy();
    }
    const timeData = ['0m', '2m', '4m', '6m', '8m', '10m'];
    const greenData = [10, 15, 20, 25, 30, 35];
    const redData = [5, 10, 15, 20, 25, 28];
    moodGraphInstance.current = new Chart(moodGraphCtx, {
      type: 'line',
      data: {
        labels: timeData,
        datasets: [
          {
            label: 'Green Mood',
            data: greenData,
            borderColor: '#36a2eb',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Red Mood',
            data: redData,
            borderColor: '#ff6384',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }, // Remove legend to save space
          title: { display: true, text: 'Mood Graph', font: { size: 10 } }
        },
        scales: {
          y: { beginAtZero: true, max: 40, ticks: { display: true } }, // Hide y-axis
          x: { ticks: { font: { size: 8 }, color: '#666' } } // Small x-axis ticks
        }
      }
    });

    // Burnout Trends Pie Chart
    const chartCtx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(chartCtx, {
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

    // Cleanup
    return () => {
      if (gaugeInstance.current) gaugeInstance.current.destroy();
      if (moodGraphInstance.current) moodGraphInstance.current.destroy();
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [mockData.employee.burnoutScore, mockData.employee.trends]);

  // Dynamic suggestion based on burnout score
  const suggestion = mockData.employee.burnoutScore > 50
    ? 'Consider a short break.'
    : 'You’re doing great! Keep it up.';
  const riskLevel = mockData.employee.burnoutScore <= 33 ? 'Low Risk' :
                   mockData.employee.burnoutScore <= 66 ? 'Moderate Risk' : 'High Risk';

  return (
    <div className="employee-dashboard">
      <h1 className="employee-title">Welcome, {mockData.employee.name}</h1>
      <div className="employee-grid">
        <div className="employee-card">
          <h2 className="employee-card-title">Your Burnout Score</h2>
          <div className="employee-gauge">
            <canvas ref={gaugeRef} width="120" height="60"></canvas> {/* Smaller gauge */}
            <div className="employee-score">{mockData.employee.burnoutScore}%</div>
          </div>
          <p className="employee-risk">{riskLevel}</p>
          <p className="employee-suggestion">{suggestion}</p>
          <p className="employee-timing">10h 4m</p>
          <div className="employee-mood-graph">
            <canvas ref={moodGraphRef} width="120" height="60"></canvas> {/* Smaller graph */}
          </div>
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