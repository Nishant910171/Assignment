import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ update state dynamically using "name" attribute
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z.\s]+$/.test(form.name))
      newErrors.name = "Name must contain only letters";
    if (!/^[a-zA-Z0-9@._-]+$/.test(form.username))
      newErrors.username = "Invalid username format";
    if (!/^[a-zA-Z0-9@._-]+$/.test(form.password))
      newErrors.password = "Invalid password format";
    if (form.username === form.password)
      newErrors.password = "Password cannot be same as Username";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(form.email))
      newErrors.email = "Invalid Gmail address";
    if (!/^\+\d{1,3}\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must include country code and number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Store user data in localStorage
      const userData = {
        name: form.name,
        username: form.username,
        email: form.email,
        phone: form.phone,
        password: form.password
      };
      
      console.log("Attempting to store user data:", userData);
      
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      console.log("Existing users:", existingUsers);
      
      // Check if username already exists
      const userExists = existingUsers.find(user => user.username === form.username);
      if (userExists) {
        setErrors({ username: "Username already exists. Please choose a different one." });
        return;
      }
      
      // Add new user to the array
      existingUsers.push(userData);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      console.log("Users after signup:", JSON.parse(localStorage.getItem('users')));
      
      alert("Signup Successful ✅ Redirecting to Login...");
      navigate("/login");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="form-container">
      <div className="signup-form">
        <div className="heading">
          <h2>Create new Account</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="two-column">
            <InputField
              label="Name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              placeholder={"Name"}
            />
            <InputField
              label="Username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              error={errors.username}
              placeholder={"Username"}
            />
          </div>
          <div className="two-column">
            <InputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              placeholder={"Email"}
            />
            <InputField
              label="Phone"
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder={"Phone with country code"}
            />
          </div>
          <div className="two-column">
            <InputField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              placeholder={"Password"}
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder={"Confirm Password"}
            />
          </div>
          <div className="btn-div">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
