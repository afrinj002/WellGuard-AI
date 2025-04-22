const mockData = {
    employee: {
      name: "John Doe",
      role: "Software Engineer",
      burnoutScore: 65,
      nudges: [
        { id: 1, message: "You've had 6 hours of meetings today. Consider a short break.", helpful: null },
        { id: 2, message: "Try a 5-minute mindfulness activity to recharge.", helpful: null }
      ],
      trends: [
        { date: "2025-04-15", score: 60 },
        { date: "2025-04-16", score: 62 },
        { date: "2025-04-17", score: 65 }
      ]
    },
    hrDashboard: {
      departments: [
        { name: "Engineering", riskLevel: "Moderate", score: 60 },
        { name: "Sales", riskLevel: "High", score: 75 },
        { name: "HR", riskLevel: "Low", score: 40 }
      ],
      suggestedActions: [
        { id: 1, action: "Reschedule non-critical meetings for Engineering team" },
        { id: 2, action: "Encourage time off for Sales team members" }
      ]
    }
  };
  
  export default mockData;