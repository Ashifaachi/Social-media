import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/style.css"

function Login({ setUser }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", credentials);
      localStorage.setItem("token", response.data.access); // Store access token
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      alert("Login failed. Check credentials.");
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
        <form onSubmit={handleLogin}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-user" style={{ fontSize: "20px", color: "#20c997" }}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="fas fa-lock" style={{ fontSize: "20px", color: "#0dcaf0" }}></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            <i className="fas fa-sign-in-alt me-2"></i> Login
          </button>
        </form>

        <div className="forgot-password mt-3 text-center">
        <p>New user? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Login;