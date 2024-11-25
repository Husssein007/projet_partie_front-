import React, { useState } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = async () => {
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/auth/register', userData);
      console.log('Registration success:', res.data);
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="wrapper login-page">
      {/* Gym Logo */}
      <div className="logo">
        <img src="gym-logo.png" alt="Gym Logo" />
        <h1>GymZone</h1>
      </div>

      {/* Register Form */}
      <div className="login-container">
        <h2>Create an Account</h2>
        <p>Register to access exclusive gym products and offers.</p>

        {/* Name Input */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-user" />
          </span>
          <input
            type="text"
            required
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        {/* Email Input */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-envelope" />
          </span>
          <input
            type="email"
            required
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        {/* Password Input */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-lock" />
          </span>
          <input
            type="password"
            required
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        {/* Confirm Password Input */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-lock" />
          </span>
          <input
            type="password"
            required
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
        </div>

        {/* Register Button */}
        <button
          type="button"
          className="btn login-btn"
          onClick={submit}
        >
          Register
        </button>

        {/* Login Link */}
        <div className="login-register">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="register-link">
              <strong>Login here</strong>
            </Link>
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="bg-image">
        <img src="gym-background.jpg" alt="Gym Equipment" />
      </div>
    </div>
  );
};

export default Register;
