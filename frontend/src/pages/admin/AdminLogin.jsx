import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/user";
import { toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

function AdminLogin() {

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    
      const navigate = useNavigate()

      const onLogin = async () => {
        // if (email.length == 0) {
        //   toast.warn("please enter email");
        // } else if (password.length == 0) {
        //   toast.warn("please enter password");
        // } else {
        //   const result = await loginUser(email, password);
        //   if (!result) {
        //     toast.error("Error while login");
        //   } else {
        //     if (result["status"] == "success") {
        //       toast.success("Welcome to application");
        //       navigate("/admindashboard");
        //     } else {
        //       toast.error("Invalid email or password");
        //     }
        //   }
        // }
        navigate("/admin/admindashboard");
      };

  return (
    <div className="container">
      <h2 className="page-header">Admin Login</h2>

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
          <button onClick={onLogin} className="btn btn-success">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
