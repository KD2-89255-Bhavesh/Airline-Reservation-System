import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user";
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const onLogin = async () => {
 // if (email.length === 0) {
    //   toast.warn("Please enter email");
    // } else if (password.length === 0) {
    //   toast.warn("Please enter password");
    // } else {
    //   const result = await loginUser(email, password);
    //   if (!result) {
    //     toast.error("Error while login");
    //   } else {
    //     if (result["status"] === "success") {
    //       toast.success("Welcome to application");
    //       navigate("/home");
    //     } else {
    //       toast.error("Invalid email or password");
    //     }
    //   }
    // }
    navigate("/home");
//     if (email.length === 0) {
//       toast.warn("Please enter email");
//     } else if (password.length === 0) {
//       toast.warn("Please enter password");
//     } else {
//       const result = await loginUser(email, password);
//       if (!result) {
//         toast.error("Error while login");
//       } else {
//         if (result["status"] === "success") {
//           toast.success("Welcome to application");
//           navigate("/");
//         } else {
//           toast.error("Invalid email or password");
//         }
//       }
//     }
  };

  return (
    <div className="login-page">
      <div className="form_container">
        <h2>Login</h2>
        
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

        <button className="button" onClick={onLogin}>
          Login Now
        </button>

        <div className="login_signup">
          Don't have an account? <Link to="/register">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;