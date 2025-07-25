import React, { useState } from "react";
import { Button, Table, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "../../components/AdminNavbar";

function ScheduleFight() {
  const [search, setSearch] = useState("");

  const flights = [
    {
      id: 40,
      airline: "Emirates",
      flightNo: 102,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-22 23:30:00",
      ddt: "2024-05-23 01:25:00",
      cec: 1002,
      cbc: 8002,
      cfc: 5002,
      status: "",
    },
    {
      id: 39,
      airline: "AirIndia",
      flightNo: 402,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-22 20:20:00",
      ddt: "2024-05-22 22:22:00",
      cec: 1002,
      cbc: 8002,
      cfc: 0,
      status: "",
    },
    {
      id: 38,
      airline: "AirAsia",
      flightNo: 301,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-22 13:20:00",
      ddt: "2024-05-22 15:15:00",
      cec: 1003,
      cbc: 8003,
      cfc: 5003,
      status: "",
    },
    {
      id: 37,
      airline: "IndiGo",
      flightNo: 202,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-22 09:00:00",
      ddt: "2024-05-22 11:25:00",
      cec: 1002,
      cbc: 0,
      cfc: 5002,
      status: "Running",
    },
    {
      id: 36,
      airline: "Emirates",
      flightNo: 101,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-22 03:15:00",
      ddt: "2024-05-22 05:10:00",
      cec: 1001,
      cbc: 8001,
      cfc: 0,
      status: "Arrived",
    },
    {
      id: 35,
      airline: "AirAsia",
      flightNo: 301,
      src: "NSK",
      dest: "BOM",
      adt: "2024-05-20 17:40:00",
      ddt: "2024-05-20 19:10:00",
      cec: 1010,
      cbc: 8010,
      cfc: 5010,
      status: "Arrived",
    },
  ];

  const filteredFlights = flights.filter((flight) =>
    flight.flightNo.toString().includes(search)
  );

  return (
    <>
      <AdminNavbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Scheduled Flight Details</h3>
          <Button variant="warning">✈ SCHEDULE FLIGHT</Button>
        </div>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="you can search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="primary">Search</Button>
        </InputGroup>
        <small>(You can search flight details using flight no)</small>

        <Table striped bordered hover responsive className="mt-3 text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Airline Name</th>
              <th>Flight No</th>
              <th>SRC</th>
              <th>DEST</th>
              <th>ADT</th>
              <th>DDT</th>
              <th>CEC</th>
              <th>CBC</th>
              <th>CFC</th>
              <th>Make Changes</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td style={{ color: "blue", cursor: "pointer" }}>
                  {flight.airline}
                </td>
                <td>{flight.flightNo}</td>
                <td>{flight.src}</td>
                <td>{flight.dest}</td>
                <td>{flight.adt}</td>
                <td>{flight.ddt}</td>
                <td>{flight.cec}</td>
                <td>{flight.cbc}</td>
                <td>{flight.cfc}</td>
                <td className="d-flex justify-content-center gap-2">
                  {flight.status === "Running" ? (
                    <Button variant="warning" size="sm">
                      Running
                    </Button>
                  ) : flight.status === "Arrived" ? (
                    <Button variant="success" size="sm">
                      Arrived
                    </Button>
                  ) : (
                    <>
                      <Button variant="info" size="sm">
                        Edit
                      </Button>
                      <Button variant="danger" size="sm">
                        Remove
                      </Button>
                    </>
                  )}
                  <Button variant="primary" size="sm">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ScheduleFight;
