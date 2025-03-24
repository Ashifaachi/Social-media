import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/style.css"

function Register() {
  const [user, setUser] = useState({ username: "", email: "", phone: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/register/", user);
      alert("Registration successful. Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="login_body">
     
      <div className="login-container">
      <div className="login-header">
        <img src="logo_png.png" alt="Logo" style={{ width: "90px", height: "80px" }} />
      </div>
      <div className="login-body">
        {/* Alert Messages (if any) */}
        {/* <div className="alert alert-info">This is a demo message</div> */}

        {/* Login Form */}
        <form onSubmit={handleRegister}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-user" style={{ fontSize: "20px", color: "#20c997" }}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
           
              <i className="fas fa-envelope" style={{ fontSize: "20px", color: "#20c997" }}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
            
              <i className="fas fa-phone-volume" style={{ fontSize: "20px", color: "#20c997" }}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Phone" onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-lock" style={{ fontSize: "20px", color: "#20c997" }}></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            <i className="fas fa-sign-in-alt me-2"></i> Register
          </button>
        </form>

        <div className="forgot-password mt-3 text-center">
        <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
