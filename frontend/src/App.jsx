import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CustomerFeedback from "./pages/feedback/CustomerFeedback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<CustomerFeedback/>} />
      </Routes>
    </>
  );
}

export default App;
