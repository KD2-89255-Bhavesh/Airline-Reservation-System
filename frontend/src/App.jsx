import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

// Auth Components
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Admin Components
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import AirlineManagement from "./pages/admin/AirlineManagement";
import FlightManagement from "./pages/admin/FlightDetails";
import PassengerManagement from "./pages/admin/PassengerList";

// Customer Components
import FlightSearch from "./pages/customer/FlightSearch";
import FlightList from "./pages/customer/FlightList";
import PassengerDetails from "./pages/customer/PassengerDetails";
import BookingPreview from "./pages/customer/BookingPreview";
import Payment from "./pages/customer/Payment";
import TicketPage from "./pages/customer/TicketPage";

function App() {
  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Routes>
        {/* Main Layout with Home as Wrapper */}
        <Route path="/" element={<Home />}>
          <Route index element={<FlightSearch />} />
          
          {/* Authentication Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* Flight Booking Flow */}
          <Route path="flightList" element={<FlightList />} />
          <Route path="passenger-details" element={<PassengerDetails />} />
          <Route path="booking-preview" element={<BookingPreview />} />
          <Route path="payment" element={<Payment />} />
          <Route path="ticket" element={<TicketPage />} />
        </Route>

        {/* Admin Dashboard Routes - Separate Layout */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<AirlineManagement />} />
          <Route path="airlines" element={<AirlineManagement />} />
          <Route path="flights" element={<FlightManagement />} />
          <Route path="passengers" element={<PassengerManagement />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;