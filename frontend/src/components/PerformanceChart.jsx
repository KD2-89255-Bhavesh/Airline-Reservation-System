// import React from "react";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Week 1", bookings: 5, earnings: 3000 },
//   { name: "Week 2", bookings: 7, earnings: 4200 },
//   { name: "Week 3", bookings: 3, earnings: 1500 },
//   { name: "Week 4", bookings: 9, earnings: 5800 },
// ];

// function PerformanceChart() {
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
//           <Line type="monotone" dataKey="earnings" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default PerformanceChart;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// // Sample airline-related metrics per week
// const data = [
//   { name: "Week 1", bookings: 120, earnings: 58000, passengers: 100, cancelled: 2 },
//   { name: "Week 2", bookings: 135, earnings: 72000, passengers: 110, cancelled: 1 },
//   { name: "Week 3", bookings: 90, earnings: 40000, passengers: 80, cancelled: 4 },
//   { name: "Week 4", bookings: 150, earnings: 80000, passengers: 130, cancelled: 0 },
// ];

// function CustomTooltip({ active, payload, label }) {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: "10px", border: "1px solid #ccc" }}>
//         <p><strong>{label}</strong></p>
//         <p>Bookings: {payload[0].payload.bookings}</p>
//         <p>Passengers: {payload[0].payload.passengers}</p>
//         <p>Revenue: ${payload[0].payload.earnings.toLocaleString()}</p>
//         <p>Cancelled: {payload[0].payload.cancelled}</p>
//       </div>
//     );
//   }

//   return null;
// }

// function PerformanceChart() {
//   return (
//     <div style={{ width: "100%", height: 350 }}>
//       <h3 style={{ textAlign: "center", marginBottom: 20 }}>Weekly Airline Performance</h3>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{ top: 20, right: 0, left: -10, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip content={<CustomTooltip />} />
//           <Legend verticalAlign="top" height={36} />
//           <Line type="monotone" dataKey="bookings" stroke="#1e90ff" name="Bookings" />
//           <Line type="monotone" dataKey="earnings" stroke="#2ecc71" name="Revenue" />
//           <Line type="monotone" dataKey="passengers" stroke="#f39c12" name="Passengers" />
//           <Line type="monotone" dataKey="cancelled" stroke="#e74c3c" name="Cancellations" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default PerformanceChart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", bookings: 120, earnings: 58000, passengers: 100, cancelled: 2 },
  { name: "Week 2", bookings: 135, earnings: 72000, passengers: 110, cancelled: 1 },
  { name: "Week 3", bookings: 90, earnings: 40000, passengers: 80, cancelled: 4 },
  { name: "Week 4", bookings: 150, earnings: 80000, passengers: 130, cancelled: 0 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "#fff", padding: 10, border: "1px solid #ccc" }}>
        <p><strong>{label}</strong></p>
        <p>Bookings: {payload[0].payload.bookings}</p>
        <p>Passengers: {payload[0].payload.passengers}</p>
        <p>Revenue: ${payload[0].payload.earnings.toLocaleString()}</p>
        <p>Cancelled: {payload[0].payload.cancelled}</p>
      </div>
    );
  }

  return null;
}

function PerformanceChart() {
  return (
    <div
      style={{
        width: "80%",         // Set chart to 80% of parent width
        maxWidth: "800px",    // Optional: Limit to 800px
        margin: "0 auto",     // Center horizontally
        padding: "20px 10px",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 20 }}>Weekly Airline Performance</h3>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <LineChart
  data={data}
  margin={{ top: 20, right: 0, left: 10, bottom: 5 }} // <-- left: 10 (or 0)
>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="bookings" stroke="#1e90ff" name="Bookings" />
            <Line type="monotone" dataKey="earnings" stroke="#2ecc71" name="Revenue" />
            <Line type="monotone" dataKey="passengers" stroke="#f39c12" name="Passengers" />
            <Line type="monotone" dataKey="cancelled" stroke="#e74c3c" name="Cancellations" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceChart;