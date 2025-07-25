import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    title: 'Mr.',
    firstName: 'Alexa',
    lastName: 'Rawles',
    mobileNo: '+1 (555) 123-4567',
    email: 'alexarawles@gmail.com',
    dob: '1990-01-01',
    profileImage: 'https://via.placeholder.com/300'
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
        <div className="col-lg-10 col-xl-8">
          <div className="card border-0 shadow-lg overflow-hidden">
            {/* Gradient Header */}
            <div className="card-header bg-gradient-primary py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0 text-white">
                  <i className="bi bi-person-circle me-2"></i>
                  My Profile
                </h2>
                <button 
                  className={`btn btn-sm ${isEditMode ? 'btn-light' : 'btn-outline-light'}`}
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  {isEditMode ? (
                    <>
                      <i className="bi bi-x-circle me-1"></i> Cancel
                    </>
                  ) : (
                    <>
                      <i className="bi bi-pencil-square me-1"></i> Edit
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="card-body p-4">
              {/* Profile Section */}
              <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start mb-4">
                {/* Profile Image with Upload */}
                <div className="position-relative mb-3 mb-md-0 me-md-4">
                  <div className="profile-image-wrapper">
                    <img 
                      src={user.profileImage} 
                      alt="Profile" 
                      className="rounded-circle border border-4 border-white shadow"
                      style={{ 
                        width: '180px', 
                        height: '180px', 
                        objectFit: 'cover' 
                      }}
                    />
                    {isEditMode && (
                      <div className="image-upload-overlay">
                        <input
                          type="file"
                          id="profileImageInput"
                          className="d-none"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <label 
                          htmlFor="profileImageInput" 
                          className="btn btn-primary rounded-pill px-3 py-2 shadow-sm"
                        >
                          <i className="bi bi-cloud-arrow-up me-2"></i>
                          Change Photo
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-grow-1 w-100">
                  {/* Name Section */}
                  <div className="mb-4">
                    {isEditMode ? (
                      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
                        <select
                          className="form-select form-select-sm w-auto"
                          name="title"
                          value={user.title}
                          onChange={handleChange}
                        >
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                        </select>
                        <div className="flex-grow-1">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                    ) : (
                      <h3 className="display-5 fw-bold text-gradient-primary">
                        {user.title} {user.firstName} {user.lastName}
                      </h3>
                    )}
                  </div>

                  {/* Details Grid */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        {isEditMode ? (
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                          />
                        ) : (
                          <div className="form-control-plaintext ps-3">
                            {user.lastName}
                          </div>
                        )}
                        <label htmlFor="lastName">Last Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <div className="form-control-plaintext ps-3">
                          {user.email}
                        </div>
                        <label>Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        {isEditMode ? (
                          <input
                            type="tel"
                            className="form-control"
                            id="mobileNo"
                            name="mobileNo"
                            value={user.mobileNo}
                            onChange={handleChange}
                            placeholder="Mobile No."
                          />
                        ) : (
                          <div className="form-control-plaintext ps-3">
                            {user.mobileNo}
                          </div>
                        )}
                        <label htmlFor="mobileNo">Mobile No.</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        {isEditMode ? (
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={user.dob}
                            onChange={handleChange}
                          />
                        ) : (
                          <div className="form-control-plaintext ps-3">
                            {new Date(user.dob).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        )}
                        <label htmlFor="dob">Date of Birth</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {isEditMode && (
                <div className="d-flex justify-content-end mt-4 border-top pt-4">
                  <button 
                    type="button"
                    className="btn btn-outline-secondary me-3"
                    onClick={() => setIsEditMode(false)}
                  >
                    <i className="bi bi-x-lg me-2"></i>
                    Discard Changes
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    <i className="bi bi-check-lg me-2"></i>
                    Save Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
        }
        
        .text-gradient-primary {
          background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .profile-image-wrapper {
          position: relative;
          width: 180px;
          height: 180px;
        }
        
        .image-upload-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.5);
          padding: 1rem;
          border-bottom-left-radius: 50%;
          border-bottom-right-radius: 50%;
          display: flex;
          justify-content: center;
        }
        
        .form-floating .form-control-plaintext {
          height: calc(3.5rem + 2px);
          line-height: 1.25;
          padding-top: 1.625rem;
          padding-bottom: 0.625rem;
          min-height: 3.5rem;
        }
        
        .shadow-lg {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
    </div>
  );
};

export default Profile;

