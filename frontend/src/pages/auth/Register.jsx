import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/user";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Register.css";

function Register() {
  const [title, setTitle] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.warn("please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("please enter last name");
    } else if (email.length == 0) {
      toast.warn("please enter email");
    } else if (phone.length == 0) {
      toast.warn("please enter phone number");
    } else if (password.length == 0) {
      toast.warn("please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warn("please confirm password");
    } else if (password != confirmPassword) {
      toast.warn("password does not match");
    } else {
      const result = await registerUser(
        title,
        firstName,
        lastName,
        email,
        phone,
        password,
      );
      if (!result) {
        toast.error("Error while registering the user");
      } else {
        if (result["status"] == "success") {
          toast.success("successfully registered a user");
          navigate("/");
        } else {
          toast.error("Error while registering the user");
        }
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <div className="form">
        <div>
          <label>Title</label>
          <select
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          <br />
        </div>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <div className="mb-3">
            Already have an account?{" "}
            <button onClick={onBack} className="btn btn-link">
              Login here
            </button>
          </div>
          <button onClick={onRegister} className="btn btn-success">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
