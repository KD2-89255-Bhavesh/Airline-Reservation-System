import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/Login.css";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function BaseLogin({ loginType, authService, redirectPath }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.warn("Please enter a valid email");
      return;
    }

    if (!email.trim()) {
      toast.warn("Please enter email without spaces");
      return;
    }

    if (email.length === 0) {
      toast.warn("Please enter your email");
    } else if (password.length === 0) {
      toast.warn("Please enter your password");
    } else {
      try {
        setIsLoading(true);
        const result = await authService(email, password);
        if (result) {
          toast.success("Login successful!");
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("userEmail", email);
          sessionStorage.setItem("userType", loginType);
          sessionStorage.setItem("Name", result.name || "User");
          sessionStorage.setItem("userId", result.admin_id || "0");
          navigate(redirectPath);
        } else {
          toast.error("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("An error occurred during login");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="form_container">
        <h2>{loginType === "admin" ? "Admin Login" : "Login"}</h2>

        <form onSubmit={onLogin}>
          <div className="input_box">
            <i className="email">📧</i>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input_box">
            <i className="password">🔒</i>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
            <i className="pw_hide"></i>
          </div>

          <div className="option_field">
            <div className="checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="button" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login Now"}
          </button>
        </form>

        <div className="login_signup">
          Don't have an account?{" "}
          <Link to={`/${loginType}/register`}>
            {loginType === "admin" ? "Register as Admin" : "Signup"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BaseLogin;

