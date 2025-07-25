import React from "react";

const AddScheduleFlight = () => {
  const schedule = {
    sch_flight_id: 1,
    flight_no: "202", // derived from joined flight table
    total_bookings: 2,
    total_capacity: 50, // Assume static or from seat sum
    economy_class: "0/25",
    business_class: "0/0",
    first_class: "2/25",
    source: "ATQ",
    destination: "KOC",
    departure: "2024-04-09 07:30:00",
    arrival: "2024-04-09 10:00:00"
  };

  return (
    <div className="container mt-4 p-4 border rounded shadow-sm bg-white">
      <div className="d-flex justify-content-between align-items-start">
        {/* Left Side: Booking and route */}
        <div>
          <h5 className="fw-bold">
            Total Bookings:{" "}
            <span className="text-primary">
              {schedule.total_bookings}/{schedule.total_capacity}
            </span>
          </h5>
          <p className="mb-1 text-muted">
            (Economy Class: {schedule.economy_class} | Business Class:{" "}
            {schedule.business_class} | First Class: {schedule.first_class})
          </p>
          <h6 className="fw-semibold mt-2">({schedule.source} to {schedule.destination})</h6>
        </div>

        {/* Right Side: Flight & timing */}
        <div className="text-end">
          <h5 className="fw-bold">Flight No : {schedule.flight_no}</h5>
          <p className="mb-1">
            <small>
              <strong>ADT:</strong> {schedule.departure}
            </small>
          </p>
          <p className="mb-0">
            <small>
              <strong>DDT:</strong> {schedule.arrival}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddScheduleFlight;
