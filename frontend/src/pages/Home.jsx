import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import '../CSS/Home.css';
import FlightSearch from './customer/FlightSearch';



function Home() {
  return (
    <>
     
      <main className='main-content'>
        <Outlet />
        <FlightSearch/>
      </main>

      
    </>
  );
}

export default Home;