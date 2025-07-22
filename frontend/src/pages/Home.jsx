import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import '../CSS/Home.css';
import FlightSearch from './customer/FlightSearch';



function Home() {
  return (
    <>
      <HomeNavbar />
      <main className='main-content'>
        <Outlet />
      </main>
<body>
  
</body>

      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <span>Copyright © sunbeam@2025</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;