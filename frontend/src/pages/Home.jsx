import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import '../CSS/Home.css';

function Home() {
  return (
    <>
      <HomeNavbar />
      <main className='main-content'>
        <Outlet /> {/* This will render the matched child route component */}
      </main>

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