import React from 'react'

import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

function ContactUs() {
  return (
    <>
      <HomeNavbar />
      <main className='main-content'>
        <Outlet />
        <h1>contact us</h1>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <span>Copyright © sunbeam@2025</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ContactUs
