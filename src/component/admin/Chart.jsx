import React from 'react';
import { PieChart, Pie, Cell,Legend } from 'recharts';

const Chart= ({ users, notes }) => {
  const data = [
    { name: 'Users', value: 100 },
    { name: 'Quize', value: 50 }
  ];

  const COLORS = [' #1abc9c', '#2c3e50'];

  return (
    <div className="pie-chart-container">
      <PieChart width={400} height={400}>
      <Legend />
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          // label={({ name, percent }) => `${name}: ${(percent*100).toFixed(0)}`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
  </div>
  );
};

export default Chart;