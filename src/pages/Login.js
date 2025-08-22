import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../components/InputField";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (username === password)
      newErrors.password = "Username and Password cannot be same";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Get stored users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      console.log("Stored users during login:", storedUsers);
      console.log("Attempting login with:", { username, password });
      
      // Find user with matching username and password
      const user = storedUsers.find(
        user => user.username === username && user.password === password
      );
      
      console.log("Found user:", user);
      
      if (user) {
        // Store logged in user info
        localStorage.setItem('currentUser', JSON.stringify({
          name: user.name,
          username: user.username,
          email: user.email
        }));
        
        alert(`Login Successful ✅ Welcome back, ${user.name}!`);
        // You can navigate to a dashboard or home page here
        // navigate("/dashboard");
      } else {
        setErrors({
          username: "Invalid username or password",
          password: "Invalid username or password"
        });
      }
    } else {
      setErrors(formErrors);
    }
  };



  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-heading">
          <h2>Login</h2>
          <p>Sign in to continue</p>
        </div>
        <div className="form-div">
          <form className="login-form" onSubmit={handleSubmit}>
            <InputField
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors.username}
              placeholder="Enter username"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              placeholder="Enter password"
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="login-para">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
