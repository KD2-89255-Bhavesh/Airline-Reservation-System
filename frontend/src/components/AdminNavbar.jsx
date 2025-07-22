import { Link, NavLink } from 'react-router-dom';


function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand/Logo with Project Name */}
        <div className="navbar-brand-container">
          <img 
            src="/images/Airline_logo.jpg" 
            alt="Airline Logo" 
            className="navbar-logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span className="navbar-brand fw-bold">
            <div className="project-name">Airline Reservation System</div>
          </span>
        </div>

        {/* Rest of your navbar code remains the same */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links - fixed all syntax and prop errors */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink 
                to="/admin/dashboard" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/airlines" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Airline Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/flights" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Flights Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/schedule" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Schedule Flight
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/passengers" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Passenger Lists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/admin/feedback" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Feedback
              </NavLink>
            </li>
          </ul>

          {/* Right-aligned items */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/admin/profile" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link text-light">
                MD Campbell Wilson
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;