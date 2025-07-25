import React, { useState } from 'react'

function Profile() {

    const [user, setUser] = useState({
    title: 'Mr.',
    firstName: 'Alexa',
    lastName: 'Rawles',
    mobileNo: '+1 (555) 123-4567',
    email: 'alexarawles@gmail.com',
    dob: '1990-01-01',
    profileImage: 'https://via.placeholder.com/300' // Larger placeholder
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    // Add save logic here
  };


  return (
   <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              {/* Header with Edit Button */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">My Profile</h2>
                <button 
                  className={`btn ${isEditMode ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  {isEditMode ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {/* Profile Photo and Name Section - Now with larger photo */}
              <div className="d-flex align-items-start mb-4">
                {/* Larger Profile Photo Column */}
                <div className="me-4 position-relative" style={{ width: '180px', flexShrink: 0 }}>
                  <img 
                    src={user.profileImage} 
                    alt="Profile" 
                    className="rounded-circle border border-3 border-primary"
                    style={{ 
                      width: '180px', 
                      height: '180px', 
                      objectFit: 'cover' 
                    }}
                  />
                  {isEditMode && (
                    <div className="position-absolute bottom-0 end-0">
                      <input
                        type="file"
                        id="profileImageInput"
                        className="d-none"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <label 
                        htmlFor="profileImageInput" 
                        className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '40px', 
                          height: '40px',
                          cursor: 'pointer'
                        }}
                      >
                        <i className="bi bi-camera-fill fs-5"></i>
                      </label>
                    </div>
                  )}
                </div>

                {/* Name and Basic Info Column */}
                <div className="flex-grow-1">
                  {isEditMode ? (
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <select
                        className="form-select"
                        name="title"
                        value={user.title}
                        onChange={handleChange}
                        style={{ width: '100px' }}
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        style={{ flexGrow: 1 }}
                      />
                    </div>
                  ) : (
                    <h3 className="mb-3">{user.title} {user.firstName}</h3>
                  )}

                  {/* Quick Info Section */}
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="mb-2">
                        <small className="text-muted d-block">Last Name</small>
                        {isEditMode ? (
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                          />
                        ) : (
                          <span className="d-block">{user.lastName}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <small className="text-muted d-block">Email</small>
                        <span className="d-block">{user.email}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <small className="text-muted d-block">Mobile</small>
                        {isEditMode ? (
                          <input
                            type="tel"
                            className="form-control form-control-sm"
                            name="mobileNo"
                            value={user.mobileNo}
                            onChange={handleChange}
                          />
                        ) : (
                          <span className="d-block">{user.mobileNo}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <small className="text-muted d-block">Date of Birth</small>
                        {isEditMode ? (
                          <input
                            type="date"
                            className="form-control form-control-sm"
                            name="dob"
                            value={user.dob}
                            onChange={handleChange}
                          />
                        ) : (
                          <span className="d-block">
                            {new Date(user.dob).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Details Form */}
              <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                  
                  
                  {/* Add any additional fields here if needed */}
                  
                  {isEditMode && (
                    <div className="col-12 d-flex justify-content-end mt-3">
                      <button 
                        type="submit" 
                        className="btn btn-primary px-4"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile


