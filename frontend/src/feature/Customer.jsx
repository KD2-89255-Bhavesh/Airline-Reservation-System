import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import FlightList from "../pages/customer/FlightList";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/footer";
import PassengerDetails from "./../pages/customer/PassengerDetails";
import BookingPreview from "./../pages/customer/BookingPreview";
import Payment from "../pages/customer/Payment";
import TicketPage from "./../pages/customer/TicketPage";
import "../CSS/Home.css";

import Register from "./../pages/auth/Register";
import Login from "./../pages/auth/Login";
import About from "./../components/About";
import ContactUs from "../components/ContactUs";

function Customer() {
  return (
    <>
       <HomeNavbar />
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
    </>
  );
}

export default Customer;
