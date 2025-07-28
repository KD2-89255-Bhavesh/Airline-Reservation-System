import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import '../CSS/Home.css';
import FlightSearch from './customer/FlightSearch';
import AdminNavbar from '../components/AdminNavbar';
import AdminDashboard from './dashboards/AdminDashboard';



function Home() {
  return (
    <>
      <HomeNavbar />
      <FlightSearch/>
      <main className='main-content'>
        <Outlet />
      </main>

      

      
    </>
  );
}

export default Home;