import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (values) => {
    try {
      const res = await axios.post('http://localhost:4000/auth/login', values);
      console.log('Response login', res.data);
      localStorage.setItem('token', res.data.token);
      navigate('/privateRoute');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="wrapper login-page">
     
      <div className="logo">
 
        <h1>GymZone</h1>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <p>Login to explore the best deals on gym products.</p>

        {/* Email Input */}
        <div className="input-box">
          <span className="icon">
            <i className="bx bx-envelope" />
          </span>
          <input
            type="email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        {/* Login Button */}
        <button
          type="button"
          className="btn login-btn"
          onClick={() => submit({ email, password })}
        >
          Login
        </button>

        {/* Register Link */}
        <div className="login-register">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="register-link" >
              
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

export default Login;
