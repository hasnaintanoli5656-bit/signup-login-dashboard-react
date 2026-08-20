import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Email ya Password galat hai!');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="logo-center">🍔 FoodieExpress</div>
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to access your dashboard</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              placeholder="Enter Your Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-input"
            />
          </div>
          <button type="submit" className="primary-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;