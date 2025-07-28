import React, { useState } from "react";
import "./ForgotPassword.css"; // Optional for extra styling

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add reset link logic here
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", borderRadius: "12px" }}>
        <h3 className="text-center fw-bold text-warning mb-3">Forgot Your Password?</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your registered email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <small className="text-muted">Enter your registered email address.</small>
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Remember your password? </span>
          <a href="/login" className="fw-bold text-primary">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
