import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';
import '../../CSS/AdminNavbar.css';
import '../../CSS/AdminDashboard.css'
import { FaPlane, FaChartLine, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa'; // Import icons


function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      
      <div className="container-fluid p-4 dashboard-content">
        {/* Summary Cards Row - 4 cards in one row */}
        <div className="row summary-cards">
          {/* Card 1: Available Airlines */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex align-items-center">
                <div className="card-icon mr-3">
                  <FaPlane size={30} className="text-primary" />
                </div>
                <div className="card-content">
                  <h6 className="card-title text-muted text-uppercase">Available Airlines</h6>
                  <div className="h4 mb-0 font-weight-bold">4</div>
                  <small className="text-muted">Alindia lastly added</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Available Flights */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex align-items-center">
                <div className="card-icon mr-3">
                  <FaPlane size={30} className="text-success" />
                </div>
                <div className="card-content">
                  <h6 className="card-title text-muted text-uppercase">Available Flights</h6>
                  <div className="h4 mb-0 font-weight-bold">8</div>
                  <small className="text-muted">Flight No: 108 lastly added</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Total Bookings */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex align-items-center">
                <div className="card-icon mr-3">
                  <FaClipboardList size={30} className="text-info" />
                </div>
                <div className="card-content">
                  <h6 className="card-title text-muted text-uppercase">Total Bookings</h6>
                  <div className="h4 mb-0 font-weight-bold">38</div>
                  <small className="text-muted">From 19 registrations</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Total Earnings */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex align-items-center">
                <div className="card-icon mr-3">
                  <FaMoneyBillWave size={30} className="text-warning" />
                </div>
                <div className="card-content">
                  <h6 className="card-title text-muted text-uppercase">Total Earnings</h6>
                  <div className="h4 mb-0 font-weight-bold">INR 234,962</div>
                  <small className="text-muted">Today: INR 16,004</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="row chart-section">
          <div className="col-12 mb-4">
            <div className="card shadow">
              <div className="card-header py-3 d-flex justify-content-between align-items-center">
                <h6 className="m-0 font-weight-bold text-primary">Performance Overview</h6>
                <div className="dropdown no-arrow">
                  <button className="btn btn-sm dropdown-toggle" type="button">
                    This Month
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  {/* Chart will be rendered here */}
                  <div className="text-center py-5">
                    <FaChartLine size={50} className="text-gray-400" />
                    <p className="mt-2">Chart will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © sunbeam@2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminDashboard;