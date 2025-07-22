import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AirlineDashboard from "./pages/admin/airlinemanagement";
import FlightDashboard from "./pages/admin/FlightDetails";
import PassengersDashboard from "./pages/admin/PassengerList";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      {/* <AirlineDashboard /> */}
      {/* <FlightDashboard /> */}
      {/* <PassengersDashboard/> */}
    </>
  );
}

export default App;
