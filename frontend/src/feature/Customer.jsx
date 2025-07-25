import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import FlightList from "../pages/customer/FlightList";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/footer";
import PassengerDetails from './../pages/customer/PassengerDetails';
import BookingPreview from './../pages/customer/BookingPreview';
import Payment from "../pages/customer/Payment";
import TicketPage from './../pages/customer/TicketPage';
import "../CSS/Home.css"; // Make sure to import your CSS

import Register from './../pages/auth/Register';
import Login from './../pages/auth/Login';


function Customer() {
  return (
    <div className="customer-layout">
      <HomeNavbar />
      
      <div className="main-background">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/flightlist" element={<FlightList />} />
          <Route path="/passengerdetails" element={<PassengerDetails />}/>
          <Route path="/bookingpreview" element={<BookingPreview />}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/ticketpage" element={<TicketPage />}/>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Customer;