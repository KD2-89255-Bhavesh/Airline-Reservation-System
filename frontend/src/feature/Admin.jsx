import React from "react";
import { Route, Routes } from "react-router-dom";
import ScheduleFight from "../pages/admin/ScheduleFight";
import AdminNavbar from "../components/AdminNavbar";
import AirlineManagement from "../pages/admin/AirlineManagement";
import FlightManagement from "../pages/admin/FlightManagement";
import PassengersList from "../pages/admin/PassengersList";
import AddAirline from "../pages/admin/AddAirline";
import AddFlights from "../pages/admin/Addflight";
import AddScheduleFlight from "../pages/admin/AddScheduleFlight";
import AdminDashboard from "../pages/dashboards/AdminDashboard";
import CustomerFeedback from "../pages/feedback/CustomerFeedback";
import Profile from "../components/Profile";
import Home from "./../pages/Home";

function Admin() {
  return (
    <>
    <AdminNavbar/>
    <Routes>

        <Route path='/adminlogin' element={<AdminDashboard/>}/>
        <Route path='/scheduleflight' element={<ScheduleFight/>}/>
        <Route path='/airlinemanagement' element={<AirlineManagement/>}/>
        <Route path='/flightmanagement' element={<FlightManagement/>}/>
        <Route path='/passengerslist' element={<PassengersList/>}/>
        <Route path='/addairline' element={<AddAirline/>}/>
        <Route path='/addflight' element={<AddFlights/>}/>
        <Route path='/addscheduleflight' element={<AddScheduleFlight/>}/>
        <Route path='/feedback' element={<CustomerFeedback/>}/>
    </Routes>
    </>
  )

}

export default Admin;
