import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", bookings: 5, earnings: 3000 },
  { name: "Week 2", bookings: 7, earnings: 4200 },
  { name: "Week 3", bookings: 3, earnings: 1500 },
  { name: "Week 4", bookings: 9, earnings: 5800 },
];

function PerformanceChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
          <Line type="monotone" dataKey="earnings" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
