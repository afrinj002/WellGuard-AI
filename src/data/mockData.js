const mockData = {
    employee: {
      name: 'John Doe',
      burnoutScore: 65,
      nudges: [
        { id: 1, message: "You've had 6 hours of meetings today. Consider a short break." },
        { id: 2, message: "Try a 5-minute mindfulness activity to recharge." }
      ],
      trends: [
        { date: '2025-04-15', score: 65 },
        { date: '2025-04-16', score: 50 },
        { date: '2025-04-17', score: 35 }
      ]
    },
    hrDashboard: {
      departments: [
        { name: 'A', riskLevel: 'High', score: 80 },
        { name: 'B', riskLevel: 'Medium', score: 60 },
        { name: 'C', riskLevel: 'Low', score: 40 },
        { name: 'D', riskLevel: 'Low', score: 20 }
      ],
      teamMembers: [
        { name: 'John Doe', level: 'High' },
        { name: 'Sarah Smith', level: 'Medium' },
        { name: 'Michael Brown', level: 'Early' },
        { name: 'Emily Davis', level: 'Early' }
      ],
      suggestedActions: [
        { id: 1, action: 'Schedule 15 min meetings' },
        { id: 2, action: 'Notify employees about play therapy' },
        { id: 3, action: 'Recommend mindfulness' }
      ],
      exportHistory: [
        { type: 'Reports', status: 'Completed', progress: '100%' },
        { type: 'Nurture', status: 'In Progress', progress: '40%' },
        { type: 'Download', status: 'Pending', progress: '10%' }
      ]
    }
  };
  
  export default mockData;