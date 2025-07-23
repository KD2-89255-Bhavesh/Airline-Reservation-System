import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import FlightList from "../pages/customer/FlightList";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/footer";

function Customer() {
  return (
    <div>
      <HomeNavbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/flightlist" element={<FlightList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Customer;
