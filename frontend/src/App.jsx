import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/customer/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import Register from "./pages/auth/Register";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import FlightList from "./pages/customer/FlightList";
import AirlineManagement from "./pages/admin/AirlineManagement";
import FlightManagement from "./pages/admin/FlightManagement";
import ScheduleFight from "./pages/admin/ScheduleFight";
import PassengersList from "./pages/admin/PassengersList";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Profile";
import PassengerDetails from "./pages/customer/PassengerDetails";
import BookingPreview from "./pages/customer/BookingPreview";
import Payment from "./pages/customer/Payment";
import TicketPage from "./pages/customer/TicketPage";
import AddAirline from "./pages/admin/AddAirline";
import AddFlights from "./pages/admin/Addflight";

import AddScheduleFlight from "./pages/admin/AddScheduleFlight";
import FlightSearch from "./pages/customer/FlightSearch";
import AdminNavbar from "./components/AdminNavbar";
import AdminLayout from './pages/admin/AdminLayout';
import CustomerFeedback from './pages/feedback/CustomerFeedback';
import AdminLogin from './pages/admin/auth/Login';


function App() {
  return (
    <>

      <Routes>
        {/* Public/Home Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Customer Routes */}
        <Route path="/customer">
          <Route index element={<FlightSearch />} />
          <Route path="flightlist" element={<FlightList />} />
          <Route path="passengerdetails" element={<PassengerDetails />} />
          <Route path="bookingpreview" element={<BookingPreview />} />
          <Route path="payment" element={<Payment />} />
          <Route path="ticketpage" element={<TicketPage />} />
        </Route>

        

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>


          <Route index element={<AdminDashboard />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="addairline" element={<AddAirline />} />
          <Route path="airlinemanagement" element={<AirlineManagement />} />
          <Route path="flightmanagement" element={<FlightManagement />} />
          <Route path="scheduleflight" element={<ScheduleFight />} />
          <Route path="passengerslist" element={<PassengersList />} />
          <Route path="addairline" element={<AddAirline />} />
          <Route path="addflight" element={<AddFlights />} />
          <Route path="addscheduleflight" element={<AddScheduleFlight />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedback" element={<CustomerFeedback />} />
        </Route>
      </Routes>
      <ToastContainer />

    </>
  );
}

export default App;
