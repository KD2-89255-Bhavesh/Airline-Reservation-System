import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/user";
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "react-bootstrap/esm/AccordionContext";

function Login() {

  const { setUser } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warn("please enter email");
    } else if (password.length == 0) {
      toast.warn("please enter password");
    } else {
      const result = await loginUser(email, password);
      if (!result) {
        toast.error("Error while login");
      } else {
        if (result["status"] == "success") {

          toast.success("Welcome to application");
          navigate("/");
        } else {
          toast.error("Invalid email or password");
        }
      }
    }
  };

  return (
    <div className="container">
      <h2 className="page-header">Login</h2>

      <div className="form">
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="customer@mail.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="******"
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            Don't have an account yet? <Link to="/register">Register here</Link>
          </div>
          <button onClick={onLogin} className="btn btn-success">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
